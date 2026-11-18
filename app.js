'use strict';

const byId = id => document.getElementById(id);
const catalog = new Map(products.map(product => [product.code, product]));
const storageKey = 'mega-las-malvinas.materiales.v1';
const pageSize = 12;
let visible = pageSize;
let toastTimer;
let list = readList();

function readList() {
  try {
    const entries = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return new Map(entries.filter(([code, qty]) =>
      catalog.has(code) && Number.isSafeInteger(qty) && qty > 0 && qty <= 9999));
  } catch {
    return new Map();
  }
}
function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function button(text, className, action, label) {
  const node = make('button', className, text);
  if (label) node.setAttribute('aria-label', label);
  node.addEventListener('click', action);
  return node;
}
function normalize(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
const soles = cents => 'S/ ' + (cents / 100).toFixed(2);
const shortNames = ['Iluminación', 'Cables eléctricos', 'Interruptores', 'Herramientas', 'Ferretería general'];
const drawings = [
  'M9 18h6m-5 3h4M8 12a6 6 0 1 1 8 0c-1.3 1-2 2-2 3.5h-4c0-1.5-.6-2.5-2-3.5Z',
  'M3 19c2-5 5-2 8-5s-1-6 3-9m-7 15c2-4 5-2 8-5s0-6 3-9m-5-2 2-2m3 3 2-2',
  'M5 3h14v18H5z M9 7h6l-1 9H8z M10 7l-1 6h5',
  'M13 6a5 5 0 0 0-6 6l-4 4a2.5 2.5 0 0 0 4 4l5-5a5 5 0 0 0 6-7l-3 3-3-3 3-3',
  'M14 3l7 7-3 3-7-7z M14 10l-9 9-2 1 1-3 9-9 M8 14l2 2'
];
function categoryIcon(index) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  for (const [key,value] of Object.entries({viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.7','stroke-linejoin':'round','stroke-linecap':'round','aria-hidden':'true'})) svg.setAttribute(key,value);
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', drawings[index]);
  svg.append(path);
  return svg;
}
function setupFilters() {
  for (const [id, name] of Object.entries(categories)) {
    byId('category').add(new Option(name, id));
    const categoryButton = button('', 'cat', () => {
      byId('category').value = id;
      byId('initial').value = '';
      byId('search').value = '';
      resetPage();
      byId('catalogo').scrollIntoView();
    });
    categoryButton.dataset.category = id;
    const copy = make('span');
    copy.append(make('strong','',shortNames[id - 1]), make('small','',products.filter(p => p.category === Number(id)).length + ' productos'));
    categoryButton.append(categoryIcon(Number(id) - 1),copy);
    byId('category-buttons').append(categoryButton);
  }
  const letters = [...new Set(products.map(p => normalize(p.name)[0].toUpperCase()))].sort();
  for (const letter of letters) byId('initial').add(new Option(letter, letter.toLowerCase()));
}
function productCard(product) {
  const card = make('article', 'product');
  const meta = make('div', 'meta');
  meta.append(make('span','',product.family), make('span','code',product.code));
  const bottom = make('div','product-bottom');
  const price = make('span','price',soles(product.cents) + ' ');
  price.append(make('span','unit','/ ' + product.unit));
  bottom.append(price,button('+ Agregar','add',() => changeQuantity(product.code,1,true),'Agregar ' + product.name));
  card.append(meta,make('h3','',product.name),make('p','description',product.description),bottom);
  return card;
}
function renderCatalog() {
  const category = byId('category').value;
  const terms = normalize(byId('search').value).split(/\s+/);
  const initial = byId('initial').value;
  const matches = products.filter(p => {
    const searchText = normalize([p.name,p.code,p.description,p.family].join(' '));
    return (!category || p.category === Number(category)) &&
      normalize(p.name).startsWith(initial) && terms.every(word => searchText.includes(word));
  });
  for (const node of document.querySelectorAll('.cat')) node.setAttribute('aria-pressed', String(category === node.dataset.category));
  byId('results').textContent = matches.length ? 'Mostrando ' + Math.min(visible,matches.length) + ' de ' + matches.length + ' productos' : 'Sin coincidencias';
  byId('cards').replaceChildren(...matches.slice(0,visible).map(productCard));
  byId('more').hidden = matches.length <= visible;
  if (!matches.length) {
    const empty = make('div','empty');
    empty.append(make('p','','Prueba otro nombre, código o letra inicial.'),button('Limpiar filtros','secondary',() => {
      for (const id of ['search','category','initial']) byId(id).value = '';
      resetPage();
      byId('search').focus();
    }));
    byId('cards').append(empty);
  }
}
function resetPage() {
  visible = pageSize;
  renderCatalog();
}
function notify(message) {
  byId('feedback').textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { byId('feedback').textContent = ''; }, 2500);
}
function changeQuantity(code, delta, fromCatalog = false) {
  const qty = (list.get(code) || 0) + delta;
  if (qty > 9999) return notify('Máximo de 9999 por producto.');
  if (qty <= 0) list.delete(code);
  else list.set(code,qty);
  try {
    localStorage.setItem(storageKey,JSON.stringify([...list]));
    if (fromCatalog) notify(catalog.get(code).name + ' agregado a tu lista.');
  } catch {
    notify('Lista actualizada para esta sesión. El navegador impide guardarla.');
  }
  renderList();
  if (!fromCatalog) {
    const next = document.querySelector('[data-code="' + code + '"][data-delta="' + delta + '"]:enabled') || byId('close-list');
    next.focus();
  }
}
function subtotal() {
  return [...list].reduce((sum,[code,qty]) => sum + catalog.get(code).cents * qty,0);
}
function renderList() {
  const items = byId('items');
  items.replaceChildren();
  for (const [code,qty] of list) {
    const p = catalog.get(code);
    const row = make('div','list-row');
    const details = make('div');
    details.append(make('strong','',p.name), make('small','',code + ' · ' + soles(p.cents) + ' / ' + p.unit + ' · Subtotal ' + soles(p.cents * qty)));
    const steps = make('div','steps');
    for (const delta of [-1,1]) {
      const step = button(delta < 0 ? '−' : '+','step',() => changeQuantity(code,delta),(delta < 0 ? 'Restar uno de ' : 'Sumar uno de ') + p.name);
      step.dataset.code = code;
      step.dataset.delta = delta;
      step.disabled = qty >= 9999 && delta === 1;
      if (delta === 1) steps.append(make('span','',String(qty)));
      steps.append(step);
    }
    row.append(details,steps);
    items.append(row);
  }
  if (!list.size) items.append(make('p','description','Aún no tienes materiales. Usa «Agregar» en el catálogo para comenzar.'));
  byId('count').textContent = list.size;
  byId('total').textContent = soles(subtotal());
  byId('download').hidden = !list.size;
}
function downloadList() {
  const lines = ['FERRETERÍA MEGA LAS MALVINAS · BARRANCA','Lista de materiales',''];
  for (const [code,qty] of list) {
    const p = catalog.get(code);
    lines.push(code + ' | ' + p.name, qty + ' × ' + soles(p.cents) + ' / ' + p.unit + ' = ' + soles(qty * p.cents),'');
  }
  lines.push('TOTAL REFERENCIAL: ' + soles(subtotal()),'Precios de ejemplo del proyecto académico.');
  const url = URL.createObjectURL(new Blob(['\uFEFF' + lines.join('\r\n')],{type:'text/plain;charset=utf-8'}));
  const link = make('a');
  link.href = url;
  link.download = 'Lista_Mega_Las_Malvinas.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url),1000);
}
setupFilters();
byId('search').addEventListener('input',resetPage);
for (const id of ['category','initial']) byId(id).addEventListener('change',resetPage);
byId('more').addEventListener('click',() => {
  const firstNew = visible;
  visible += pageSize;
  renderCatalog();
  byId('cards').children[firstNew]?.querySelector('button')?.focus();
});
byId('open-list').addEventListener('click',() => byId('list').showModal());
byId('close-list').addEventListener('click',() => byId('list').close());
byId('download').addEventListener('click',downloadList);
window.addEventListener('storage',event => {
  if (event.key === storageKey || event.key === null) {
    list = readList();
    renderList();
  }
});
renderCatalog();
renderList();
