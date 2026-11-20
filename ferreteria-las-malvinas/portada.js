'use strict';
(() => {
  const slides = [
    {file:'hero.webp', alt:'Taladro percutor sobre una mesa de taller', category:'Herramientas', lead:'Perfora con', accent:'precisión.', product:'Taladro percutor de 650 W', id:91},
    {file:'hero-alicate.webp', alt:'Alicate aislado junto a cable de cobre', category:'Herramientas', lead:'Sujeta con', accent:'firmeza.', product:'Alicate universal aislado de 8″', id:81},
    {file:'hero-luz.webp', alt:'Foco con filamentos encendidos en un taller', category:'Iluminación', lead:'Dale calidez', accent:'a tu espacio.', product:'Foco vintage de filamento LED', id:11}
  ];
  const duration = 2000;
  const hero = document.querySelector('.hero');
  const home = document.querySelector('#home');
  const dialog = document.querySelector('#dialog');
  const photo = document.querySelector('#heroPhoto');
  const product = document.querySelector('#heroProduct');
  let index = 0;
  let timer;
  hero.style.setProperty('--slide-time', duration+'ms');
  for (const slide of slides.slice(1)) new Image().src = 'https://ferreteria-las-malvinas.nobleferry2.chatgpt.site/assets/'+slide.file;

  function showSlide() {
    const slide = slides[index];
    photo.style.backgroundImage = 'url("https://ferreteria-las-malvinas.nobleferry2.chatgpt.site/assets/'+slide.file+'")';
    photo.style.backgroundPosition = index ? '78% center' : '';
    photo.setAttribute('aria-label',slide.alt);
    document.querySelector('#heroCategory').textContent = slide.category.toUpperCase();
    document.querySelector('#heroLead').textContent = slide.lead;
    document.querySelector('#heroAccent').textContent = slide.accent;
    product.textContent = slide.product;
    product.dataset.detail = slide.id;
    photo.classList.remove('moving');
    void photo.offsetWidth;
    photo.classList.add('moving');
  }

  function schedule() {
    clearInterval(timer);
    if (document.hidden || home.hidden || dialog.open || hero.contains(document.activeElement)) {
      photo.classList.remove('moving');
      return;
    }
    showSlide();
    timer = setInterval(() => {
      index = (index+1) % slides.length;
      showSlide();
    },duration);
  }
  document.addEventListener('visibilitychange',schedule);
  hero.addEventListener('focusin',schedule);
  hero.addEventListener('focusout',()=>queueMicrotask(schedule));
  const observer = new MutationObserver(schedule);
  observer.observe(home,{attributes:true,attributeFilter:['hidden']});
  observer.observe(dialog,{attributes:true,attributeFilter:['open']});
  schedule();
})();
