'use strict';
const paths = {
 pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 bolt:'<path d="M13.5 2 4 14h7l-1 8 10-13h-7z"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.7"/><path d="m16 16 4.7 4.7"/>',
 cart:'<path d="M2 3h3l2.4 12h11.8l2-9H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.1"/><rect x="14" y="3" width="7" height="7" rx="1.1"/><rect x="3" y="14" width="7" height="7" rx="1.1"/><rect x="14" y="14" width="7" height="7" rx="1.1"/>',
 heart:'<path d="M20.6 4.9a5.4 5.4 0 0 0-7.6 0l-1 1-1-1a5.4 5.4 0 0 0-7.6 7.6L12 21l8.6-8.5a5.4 5.4 0 0 0 0-7.6Z"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 1 1 4.2 2.4c-1.4.8-1.5 1.2-1.5 2.4m0 3h.01"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',
 bulb:'<path d="M9 17c0-2-3.5-3.3-3.5-7.5a6.5 6.5 0 0 1 13 0c0 4.2-3.5 5.5-3.5 7.5ZM9.5 20h5m-4 2h3M10 10l2 2 2-2m-2 2v5"/>',
 cable:'<path d="M4 5v4a3 3 0 0 0 6 0V7a3 3 0 0 1 6 0v9a3 3 0 0 1-6 0v-1m10 3v-4"/><path d="M18 18h4v3h-4zM2 2h4v3H2z"/>',
 switch:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m9 7 6-1v11l-6 1zM11.5 9v2"/>',
 wrench:'<path d="M20.3 3.8a6 6 0 0 1-7.7 8L5 19.4a2.1 2.1 0 0 1-3-3l7.6-7.6a6 6 0 0 1 8-7.2L14 5.2 17 8z" transform="translate(1 1) scale(.94)"/>',
 hammer:'<path d="m13 10-9 11-2-2 9-11m-3-2 3-3c3-2 6-1 9 2l-3-1-2 3 3 3-3 3z"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>'
};
function icon(name){return '<svg aria-hidden="true" class="ic" viewBox="0 0 24 24">'+paths[name]+'</svg>';}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
const categories = [
 {id:1,name:'Iluminación',icon:'bulb'},{id:2,name:'Cables eléctricos',icon:'cable'},
 {id:3,name:'Interruptores',icon:'switch'},{id:4,name:'Herramientas',icon:'wrench'},
 {id:5,name:'Ferretería general',icon:'hammer'}
];
const featuredIds=[91,2,44,67];
const byId=new Map(products.map(p=>[p.id,p]));
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const money=n=>'S/ '+new Intl.NumberFormat('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
const categoryOf=p=>categories.find(c=>c.id===p.category);
const checkoutOrigin = 'https://ferreteria-las-malvinas.nobleferry2.chatgpt.site';
const localKey='malvinas-catalogo-v1';
function loadState(){try{return JSON.parse(localStorage.getItem(localKey))||{};}catch{return {};}}
const saved=loadState();
const favorites=new Set((Array.isArray(saved.favorites)?saved.favorites:[]).filter(id=>byId.has(id)));
const cart=new Map();
function validQty(p,n){return Number.isFinite(n)&&n>0&&n<=99999&&(p.unit==='metro'||p.unit==='kg'?Math.abs(n*100-Math.round(n*100))<1e-6:Number.isInteger(n));}
for(const [id,n] of Object.entries(saved.cart||{})){const p=byId.get(+id);if(p&&validQty(p,n))cart.set(+id,n);}
function persist(){try{localStorage.setItem(localKey,JSON.stringify({favorites:[...favorites],cart:Object.fromEntries(cart)}));return true;}catch{return false;}}
const cartSum=(p,n)=>Math.round((p.price*100)*n)/100;
const total=()=>[...cart].reduce((v,[id,n])=>v+Math.round(cartSum(byId.get(id),n)*100),0)/100;
let toastTimer;
function notice(msg){clearTimeout(toastTimer);$('#toast').textContent=msg;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2300);}
function updateCount(){$('#count').textContent=cart.size;$('.quote-head').setAttribute('aria-label','Mi carrito, '+cart.size+(cart.size===1?' producto':' productos'));}
function favoriteButton(p){const on=favorites.has(p.id);return '<button class="icon fav" data-fav="'+p.id+'" aria-label="'+(on?'Quitar de favoritos':'Guardar en favoritos')+' · '+esc(p.name)+'" aria-pressed="'+on+'">'+icon('heart')+'</button>';}
function picture(p) {
  return `<img src="${checkoutOrigin}/assets/products/${p.id}.webp" alt="${esc(p.name)}" loading="lazy" decoding="async">`;
}
function card(p) {
  return `<article class="prod">
    <button class="pic" data-detail="${p.id}" aria-label="Ver ficha de ${esc(p.name)}">${picture(p)}</button>
    ${favoriteButton(p)}
    <div class="prod-info">
      <div class="product-meta"><span class="label">${categoryOf(p).name}</span><span class="sku">${esc(p.code)}</span></div>
      <button class="name" data-detail="${p.id}">${esc(p.name)}</button>
      <p class="summary">${esc(p.description)}</p>
      <div class="card-foot">
        <div><b class="price">${money(p.price)}</b> <span class="unit">/ ${esc(p.unit)}</span></div>
        <button class="cart-add" data-add="${p.id}" aria-label="Agregar al carrito · ${esc(p.name)}">${icon('cart')} Agregar</button>
      </div>
    </div>
  </article>`;
}
$('#categoryCards').innerHTML=categories.map(c=>'<a class="category" href="#catalogo?cat='+c.id+'"><span class="tile">'+icon(c.icon)+'</span><span><strong>'+c.name+'</strong><small>'+products.filter(p=>p.category===c.id).length+' productos</small></span></a>').join('');
function renderFeatured(){$('#featured').innerHTML=featuredIds.map(id=>card(byId.get(id))).join('');}
let page='inicio',category=0,search='',limit=20;
function route(scroll=true){
 const [raw,params='']=location.hash.slice(1).split('?');const args=new URLSearchParams(params);
 page=['catalogo','favoritos','categorias'].includes(raw)?raw:'inicio';
 category=categories.some(c=>c.id===+args.get('cat'))?+args.get('cat'):0;
 search=(args.get('q')||'').slice(0,120);if(scroll)$('#query').value=search;
 const home=page==='inicio'||page==='categorias';$('#home').hidden=!home;$('#listPage').hidden=home;
 document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===page;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 limit=20;
 if(home)renderFeatured();else renderList();
 if(scroll){if(page==='categorias')$('#categorySection').scrollIntoView();else window.scrollTo(0,0);}
}
function catalogHash(cat,q){const a=new URLSearchParams();if(cat)a.set('cat',cat);if(q)a.set('q',q);return '#catalogo'+(a.size?'?'+a:'');}
function renderList(){
 const fav=page==='favoritos';const c=categories.find(c=>c.id===category);
 const title=fav?'Mis favoritos':search?'Resultados de búsqueda':c?c.name:'Catálogo de productos';
 $('#listTitle').textContent=title;$('#trail').textContent=fav?'Favoritos':'Catálogo';
 $('#filters').innerHTML=fav?'':'<div class="tags" aria-label="Filtrar por categoría">'+[{id:0,name:'Todas'},...categories].map(c=>'<a class="tag '+(c.id===category?'active':'')+'" href="'+esc(catalogHash(c.id,search))+'">'+c.name+'</a>').join('')+'</div>';
 const terms=norm(search).split(/\s+/).filter(Boolean);
 const found=products.filter(p=>(!fav||favorites.has(p.id))&&(!category||p.category===category)&&terms.every(t=>norm(p.name).includes(t)||(t.length>3 && t.endsWith('s') && norm(p.name).includes(t.slice(0,-1)))));
 if(search)found.sort((a,b)=>Number(norm(b.name).startsWith(norm(search)))-Number(norm(a.name).startsWith(norm(search))));
 const sort=$('#sort').value;
 if(sort==='az')found.sort((a,b)=>a.name.localeCompare(b.name,'es'));
 if(sort==='low'||sort==='high')found.sort((a,b)=>(a.price-b.price)*(sort==='low'?1:-1));
 $('#resultCount').textContent=found.length+' producto'+(found.length===1?'':'s')+(search?' para «'+search+'»':'');
 $('#results').className=found.length?'cards catalog-grid':'';
 $('#results').innerHTML=found.length?found.slice(0,limit).map(card).join(''):'<div class="empty"><strong>'+(fav?'Aún no tienes favoritos':'Sin coincidencias')+'</strong><p>'+(fav?'Guarda un producto con el corazón para encontrarlo aquí.':'Prueba con un nombre más corto, como foco o taladro.')+'</p><a class="btn secondary" href="#catalogo">Ver todo el catálogo</a></div>';
 $('#more').hidden=found.length<=limit;
}
const dialog=$('#dialog');
function show(content){$('#dialogContent').innerHTML=content;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;}
function detail(id){const p=byId.get(id);show(('<div class="dialog-pic">'+picture(p)+'</div>')+'<span class="label">'+esc(p.code)+' · '+categoryOf(p).name+'</span><h2 id="dialogTitle">'+esc(p.name)+'</h2><p>'+esc(p.description)+'</p><dl class="specs"><div><dt>Subcategoría</dt><dd>'+esc(p.group)+'</dd></div><div><dt>Unidad de venta</dt><dd>'+esc(p.unit)+'</dd></div></dl><div class="price-line"><b class="price">'+money(p.price)+'</b><span class="unit">/ '+esc(p.unit)+'</span></div><p class="note">Precio referencial del catálogo. Imagen ilustrativa.</p><div class="dialog-actions"><button class="btn primary" data-add="'+id+'">'+icon('cart')+' Agregar al carrito</button>'+favoriteButton(p)+'</div><p class="note" id="detailStatus" role="status"></p>');}
function taxBreakdown(amount){
 const cents=Math.round(amount*100),base=Math.round(cents/1.18);
 return '<div><span>Subtotal</span><span>'+money(base/100)+'</span></div><div><span>IGV incluido (18 %)</span><span>'+money((cents-base)/100)+'</span></div>';
}
function renderQuote(){
 const lines=[...cart].map(([id,n])=>{const p=byId.get(id),step=(p.unit==='metro'||p.unit==='kg')?'0.01':'1';return '<article class="quote-item"><div class="cart-product"><div class="cart-thumb">'+picture(p)+'</div><div><h3>'+esc(p.name)+'</h3><span class="unit">'+p.code+' · '+money(p.price)+' / '+p.unit+'</span></div></div><div class="row-controls"><label class="qty">Cantidad <input type="number" data-qty="'+id+'" aria-label="Cantidad de '+esc(p.name)+'" min="'+step+'" max="99999" step="'+step+'" required value="'+n+'"></label><b data-sub="'+id+'">'+money(cartSum(p,n))+'</b><button type="button" class="remove" data-remove="'+id+'">Quitar</button></div></article>';}).join('');
 show('<h2 id="dialogTitle">Mi carrito</h2>'+(lines?'<form id="quoteForm">'+lines+'<div class="cart-tax" id="taxDetail">'+taxBreakdown(total())+'</div><div class="quote-total"><span>Total del carrito</span><strong id="total">'+money(total())+'</strong></div><div class="dialog-actions"><button type="submit" class="btn primary">Continuar al pago</button><button type="button" class="btn secondary" data-action="download">Descargar lista</button></div><p id="downloadStatus" class="note" role="status"></p></form>':'<div class="empty"><strong>Tu carrito está vacío</strong><p>Agrega los productos que necesitas para calcular tu presupuesto.</p><a href="#catalogo" class="btn primary" data-action="close">Explorar catálogo</a></div>'));}
function help() {
  show('<h2 id="dialogTitle">Comprar con recojo</h2><p>Agrega tus productos al carrito. Pulsa Continuar al pago, completa tus datos y elige el método de pago. Descarga tu constancia para presentarla en tienda.</p>');
}
function downloadQuote(){
 const today=new Intl.DateTimeFormat('es-PE',{timeZone:'America/Lima'}).format(new Date());
 const lines=[...cart].map(([id,n])=>{const p=byId.get(id);return p.code+' | '+p.name+'\n  '+n+' '+p.unit+' × '+money(p.price)+' = '+money(cartSum(p,n));});
 const content=['MEGA LAS MALVINAS · BARRANCA','Lista de compras | '+today,'',...lines,'','TOTAL REFERENCIAL: '+money(total()),'Precios y disponibilidad sujetos a confirmación en tienda.'].join('\r\n');
 const url=URL.createObjectURL(new Blob(['\uFEFF'+content],{type:'text/plain;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='Carrito-Mega-Las-Malvinas.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);$('#downloadStatus').textContent='Lista de compras preparada para descargar.';
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a[data-action]');if(!b)return;
 const d=b.dataset;
 if(d.action==='download' && $('#quoteForm').reportValidity())downloadQuote();if(d.action==='help')help();if(d.action==='quote')renderQuote();if(d.action==='close')dialog.close();
 if(d.detail)detail(+d.detail);
 if(d.add){const id=+d.add,n=(cart.get(id)||0)+1;let msg='Producto agregado al carrito.';if(validQty(byId.get(id),n)){cart.set(id,n);if(!persist())msg+=' Guardado solo en esta sesión.';updateCount();}else msg='Se alcanzó la cantidad máxima.';if(dialog.open&&$('#detailStatus'))$('#detailStatus').textContent=msg;else notice(msg);}
 if(d.fav){const id=+d.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);const stored=persist();const p=byId.get(id);
 document.querySelectorAll('[data-fav="'+id+'"]').forEach(el=>{el.setAttribute('aria-pressed',favorites.has(id));el.setAttribute('aria-label',(favorites.has(id)?'Quitar de favoritos':'Guardar en favoritos')+' · '+p.name);});
 if(page==='favoritos')renderList();const msg=(favorites.has(id)?'Producto guardado en favoritos.':'Producto retirado de favoritos.')+(stored?'':' Solo en esta sesión.');if(dialog.open&&$('#detailStatus'))$('#detailStatus').textContent=msg;else notice(msg);}
 if(d.remove){cart.delete(+d.remove);persist();updateCount();renderQuote();}
});
document.addEventListener('input',e=>{
 const field=e.target;if(!field.matches('[data-qty]'))return;
 const id=+field.dataset.qty,p=byId.get(id),n=field.valueAsNumber;
 const valid=field.validity.valid&&validQty(p,n);
 if(valid){cart.set(id,n);persist();}
 document.querySelector('[data-sub="'+id+'"]').textContent=valid?money(cartSum(p,n)):'—';
 $('#taxDetail').innerHTML=taxBreakdown(total());
 $('#total').textContent=$('#quoteForm').checkValidity()?money(total()):'Revisa las cantidades';
 $('#downloadStatus').textContent=valid?'':'Ingresa una cantidad válida entre '+field.min+' y 99999.';
});
document.addEventListener('submit',e=>{if(e.target.id==='quoteForm'){e.preventDefault();checkout();}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
function searchNow(){const q=$('#query').value.trim().slice(0,120);const h=catalogHash(0,q);if(location.hash!==h){if(page==='catalogo'&&search)history.replaceState(null,'',h);else history.pushState(null,'',h);}route(false);window.scrollTo(0,0);}
$('#query').maxLength=120;
$('#query').addEventListener('input',searchNow);
$('#search').addEventListener('submit',e=>{e.preventDefault();searchNow();$('#listTitle').setAttribute('tabindex','-1');$('#listTitle').focus();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!dialog.open&&!e.ctrlKey&&!e.metaKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();$('#query').focus();}});
$('#sort').addEventListener('change',()=>{limit=20;renderList();});
$('#more').addEventListener('click',()=>{const previous=limit;limit+=20;renderList();$('#results').children[previous]?.querySelector('button')?.focus();});
window.addEventListener('hashchange',()=>route());
$('.skip').addEventListener('click',e=>{e.preventDefault();$('#contenido').focus();$('#contenido').scrollIntoView();});


function checkout() {
  if (!cart.size) return renderQuote();
  const items = new URLSearchParams([...cart]);
  location.assign(checkoutOrigin + '/#pedido-github?' + items);
}

renderFeatured();
updateCount();
route();
