// Renders the shared site header and wires interactions. File-protocol safe (no fetch).
(function(){
  var headerHTML = '\n<header class="site-header" role="banner">\n  <div class="site-header__container">\n    <a href="index.html" class="site-header__logo" aria-label="GeniusTax Home">\n      <img src="images/brand.png" alt="GeniusTax" width="126" height="126" />\n    </a>\n\n    <nav id="primary-nav" class="site-header__nav" role="navigation">\n      <ul class="site-header__menu">\n        <li><a data-i18n="nav.home" href="index.html">Home</a></li>\n        <li><a data-i18n="nav.services" href="Services.html">Services</a></li>\n        <li><a data-i18n="nav.about" href="About-us.html">About</a></li>\n        <li><a data-i18n="nav.contact" href="Contact.html">Contacts</a></li>\n      </ul>\n    </nav>\n\n    <div class="site-header__right">\n      <div class="site-header__lang-wrap">\n        <button class="site-header__lang" aria-label="Language selector" aria-expanded="false">\n          <svg viewBox="0 0 16 16" width="16" height="16" class="site-header__caret"><polygon points="8,12 2,4 14,4"></polygon></svg>\n          <span class="site-header__flag" aria-hidden="true"></span>\n        </button>\n        <div class="site-header__lang-menu" role="menu">\n          <button class="site-header__lang-item" data-lang="en">English</button>\n          <button class="site-header__lang-item" data-lang="ru">Русский</button>\n          <button class="site-header__lang-item" data-lang="ro">Română</button>\n        </div>\n      </div>\n      <button class="site-header__burger" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">\n        <span></span><span></span><span></span>\n      </button>\n      <a href="https://cal.com/geniustax/geniustax?overlayCalendar=true" class="site-header__cta" data-i18n="cta.consult">Консультация</a>\n    </div>\n  </div>\n  <div class="site-header__overlay" aria-hidden="true"></div>\n</header>\n';

  function mountHeader(){
    var host = document.querySelector('[data-header]');
    if (!host){ host = document.createElement('div'); host.setAttribute('data-header',''); document.body.insertBefore(host, document.body.firstChild); }
    host.innerHTML = headerHTML;

    var root = host.querySelector('.site-header');
    var burger = root.querySelector('.site-header__burger');
    var nav = root.querySelector('#primary-nav');
    var ov = root.querySelector('.site-header__overlay');
    if (burger && nav){
      burger.addEventListener('click', function(){
        var open = root.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    if (ov){ ov.addEventListener('click', function(){ root.classList.remove('is-open'); burger && burger.setAttribute('aria-expanded','false'); }); }

    // Set current flag from localStorage
    try{
      var lang = (localStorage && localStorage.getItem('lang')) || 'en';
      var flag = root.querySelector('.site-header__flag');
      if (flag){
        var svg='';
        if (lang==='ru') svg = '<svg viewBox="0 0 112 112" width="24" height="24"><rect y="16" fill="#F4F4F4" width="112" height="26.7"/><rect y="42.7" fill="#323E95" width="112" height="26.7"/><rect y="69.3" fill="#D8001E" width="112" height="26.7"/></svg>';
        else if (lang==='ro') svg = '<svg viewBox="0 0 112 112" width="24" height="24"><rect y="16" fill="#F3D54D" width="112" height="80"/><rect y="16" fill="#293D86" width="37.3" height="80"/><rect x="74.7" y="16" fill="#D23333" width="37.3" height="80"/></svg>';
        else svg = '<svg viewBox="0 0 112 112" width="24" height="24"><rect y="16" fill="#19237F" width="112" height="80"/><path fill="#EDEDED" d="M47.8,16h3.5v33.7H0v-4.8h27.5L0,25.9v-3.8l33.2,22.8h7.7L0,16.8V16h8.8l39,26.9V16z M75,44.9h-7.7L109.4,16h-5.1L65.1,42.9V16h-3.4v33.7H112v-4.8H85.4L112,26.6v-7L75,44.9z M61.7,96h3.4V70.7l37,25.3h9.9v-0.8L73.2,68.7H81l31,21.2v-3.1L85.4,68.7H112v-4.8H61.7V96z M0,68.7h27.5L0,87.7v7.8l39.1-26.8h7.8L7.1,96H11l36.8-25.3V96h3.5V63.9H0V68.7z"/><path fill="#BD0034" d="M112,16v3.6L75,44.9h-7.7L109.4,16H112z M73.2,68.7L112,95.2v-5.3L81,68.7H73.2z M40.9,44.9L0,16.8v5.3l33.2,22.8C33.2,44.9,40.9,44.9,40.9,44.9z M39.1,68.7L0,95.5V96h7.1l39.8-27.3H39.1z M61.7,16H51.3v33.7H0v14.2h51.3V96h10.4V63.9H112V49.7H61.7V16z"/></svg>';
        flag.innerHTML = svg;
        if (lang==='en') {
          flag.innerHTML = '<svg viewBox="0 0 112 112" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="16" width="112" height="80" fill="#012169"/><path d="M0 16 L112 96 M112 16 L0 96" stroke="#FFFFFF" stroke-width="18"/><path d="M0 16 L112 96 M112 16 L0 96" stroke="#C8102E" stroke-width="10"/><rect x="0" y="52" width="112" height="8" fill="#FFFFFF"/><rect x="52" y="16" width="8" height="80" fill="#FFFFFF"/><rect x="0" y="54" width="112" height="4" fill="#C8102E"/><rect x="54" y="16" width="4" height="80" fill="#C8102E"/></svg>';
        }
      }
    }catch(e){}

    // Active link highlight
    try{
      var path = new URL(location.href).pathname.toLowerCase();
      if (path === '/' || path === '') path = '/index.html';
      root.querySelectorAll('.site-header__menu a').forEach(function(a){
        var link = new URL(a.getAttribute('href'), location.href).pathname.toLowerCase();
        var isActive = (path === link) || (path.endsWith('/index.html') && (link.endsWith('/index.html') || link === './')) || (path.indexOf('about-us')>-1 && link.indexOf('about-us')>-1) || (path.indexOf('services')>-1 && link.indexOf('services')>-1) || (path.indexOf('contact')>-1 && link.indexOf('contact')>-1);
        if (isActive) a.classList.add('is-active');
      });
    }catch(e){}

    // Language menu
    try{
      var wrap = root.querySelector('.site-header__lang-wrap');
      var btn = root.querySelector('.site-header__lang');
      var menu = root.querySelector('.site-header__lang-menu');
      if (btn && wrap && menu){
        btn.addEventListener('click', function(e){ e.stopPropagation(); wrap.classList.toggle('is-open'); });
        document.addEventListener('click', function(){ wrap.classList.remove('is-open'); });
        menu.addEventListener('click', function(e){
          var t = e.target.closest('[data-lang]'); if (!t) return;
          var l = t.getAttribute('data-lang'); try{ localStorage.setItem('lang', l);}catch(_){ }
          location.reload();
        });
      }
    }catch(e){}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountHeader);
  else mountHeader();
})();
