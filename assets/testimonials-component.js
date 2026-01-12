// Renders testimonials block dynamically from i18n data
(function(){
  function getTestimonials(){
    var lang = 'ru';
    try { lang = (localStorage && localStorage.getItem('lang')) || 'ru'; } catch(e){}
    var i18n = window.I18N && window.I18N[lang];
    if (i18n && i18n.aboutPage && i18n.aboutPage.testimonials && i18n.aboutPage.testimonials.list) {
      return i18n.aboutPage.testimonials.list;
    }
    // Fallback to Russian
    if (window.I18N && window.I18N.ru && window.I18N.ru.aboutPage) {
      return window.I18N.ru.aboutPage.testimonials.list;
    }
    return [];
  }

  function render(){
    var testimonials = getTestimonials();
    var slidesHTML = '';

    for (var i = 0; i < testimonials.length; i++) {
      slidesHTML += '<div class="slide">' +
        '<article class="testimonial-card">' +
          '<p class="testimonial-quote" data-i18n="aboutPage.testimonials.list.' + i + '.quote">' + (testimonials[i].quote || '') + '</p>' +
          '<div class="testimonial-meta">' +
            '<h3 class="testimonial-author" data-i18n="aboutPage.testimonials.list.' + i + '.name">' + (testimonials[i].name || '') + '</h3>' +
            '<p class="testimonial-role" data-i18n="aboutPage.testimonials.list.' + i + '.role">' + (testimonials[i].role || '') + '</p>' +
          '</div>' +
        '</article>' +
      '</div>';
    }

    return '<section class="testimonials" aria-labelledby="testimonials-title">\n' +
      '  <div class="container">\n' +
      '    <h2 id="testimonials-title" class="testimonials-title" data-i18n="aboutPage.testimonials.title">Что говорят о нас?</h2>\n' +
      '    <div class="testimonials-slider" role="region" aria-label="Testimonials slider">\n' +
      '      <div class="slider-track">\n' + slidesHTML + '</div>\n' +
      '      <button class="slider-nav slider-prev" aria-label="Previous" type="button">&#10094;</button>\n' +
      '      <button class="slider-nav slider-next" aria-label="Next" type="button">&#10095;</button>\n' +
      '      <div class="slider-dots" role="tablist" aria-label="Slide pagination"></div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n';
  }

  function getSlidesPerView(){
    var w = window.innerWidth || document.documentElement.clientWidth || 0;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  }

  function initSlider(root){
    var track = root.querySelector('.slider-track');
    var slides = Array.from(root.querySelectorAll('.slide'));
    var prev = root.querySelector('.slider-prev');
    var next = root.querySelector('.slider-next');
    var dotsWrap = root.querySelector('.slider-dots');
    var total = slides.length;
    var index = 0;
    var spv = getSlidesPerView();

    function layout(){
      spv = getSlidesPerView();
      slides.forEach(function(s){ s.style.flex = '0 0 ' + (100/spv) + '%'; });
      update();
      renderDots();
    }

    function maxIndex(){ return Math.max(0, total - spv); }

    function update(){
      if (index > maxIndex()) index = maxIndex();
      if (index < 0) index = 0;
      var offset = (100/spv) * index;
      track.style.transform = 'translateX(' + (-offset) + '%)';
      prev.disabled = (index === 0);
      next.disabled = (index === maxIndex());
      Array.from(dotsWrap.children).forEach(function(dot, i){
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }

    function renderDots(){
      var pages = maxIndex() + 1;
      dotsWrap.innerHTML = '';
      for (var i=0; i<pages; i++){
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'slider-dot' + (i===index? ' is-active':'');
        b.setAttribute('role','tab');
        b.setAttribute('aria-label','Go to slide ' + (i+1));
        b.setAttribute('aria-selected', i===index ? 'true' : 'false');
        (function(i0){ b.addEventListener('click', function(){ index = i0; update(); }); })(i);
        dotsWrap.appendChild(b);
      }
    }

    prev.addEventListener('click', function(){ index = Math.max(0, index-1); update(); });
    next.addEventListener('click', function(){ index = Math.min(maxIndex(), index+1); update(); });
    window.addEventListener('resize', layout);

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    var minSwipeDistance = 50;

    track.addEventListener('touchstart', function(e){
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function(e){
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0 && index < maxIndex()) {
          index++;
          update();
        } else if (diff < 0 && index > 0) {
          index--;
          update();
        }
      }
    }, { passive: true });

    layout();
  }

  function mount(){
    var host = document.querySelector('[data-testimonials]');
    if (!host) return;
    host.innerHTML = render();
    var root = host.querySelector('.testimonials-slider');
    if (root) initSlider(root);
    try{
      var lang = (localStorage && localStorage.getItem('lang')) || 'ru';
      if (typeof window.applyI18n === 'function') window.applyI18n(lang);
    }catch(e){}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
