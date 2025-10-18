(function(){
  function parseKey(obj, path){
    return path.split('.').reduce((o,k)=> (o&&o[k]!=null)? o[k]: null, obj);
  }

  function detectLang(){
    var p = location.pathname || '';
    if (/\/ru\//.test(p)) return 'ru';
    if (/\/ro\//.test(p)) return 'ro';
    var q = new URLSearchParams(location.search);
    if (q.get('lang')) return q.get('lang');
    return localStorage.getItem('lang') || 'en';
  }

  function applyMeta(lang){
    var m = I18N[lang] && I18N[lang].meta || {};
    if (m.title) document.title = m.title;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n-meta]').forEach(function(el){
      var pairs = el.getAttribute('data-i18n-meta').split(';');
      pairs.forEach(function(p){
        var [attr, key] = p.split(':');
        var val = parseKey(I18N[lang], key.trim());
        if (val!=null) el.setAttribute(attr.trim(), val);
      });
    });
  }

  function applyTexts(lang){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = parseKey(I18N[lang], key);
      if (val!=null) el.textContent = val;
    });
  }

  function renderFlag(lang){
    if (lang === 'ru') {
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" style="width:24px;height:24px"><rect y="16" fill="#F4F4F4" width="112" height="26.7"/><rect y="42.7" fill="#323E95" width="112" height="26.7"/><rect y="69.3" fill="#D8001E" width="112" height="26.7"/></svg>';
    }
    if (lang === 'ro') {
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" style="width:24px;height:24px"><rect y="16" fill="#F3D54D" width="112" height="80"/><rect y="16" fill="#293D86" width="37.3" height="80"/><rect x="74.7" y="16" fill="#D23333" width="37.3" height="80"/></svg>';
    }
    // en
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" style="width:24px;height:24px"><rect y="16" fill="#19237F" width="112" height="80"/><path fill="#EDEDED" d="M47.8,16h3.5v33.7H0v-4.8h27.5L0,25.9v-3.8l33.2,22.8h7.7L0,16.8V16h8.8l39,26.9V16z M75,44.9h-7.7L109.4,16h-5.1L65.1,42.9V16h-3.4v33.7H112v-4.8H85.4L112,26.6v-7L75,44.9z M61.7,96h3.4V70.7l37,25.3h9.9v-0.8L73.2,68.7H81l31,21.2v-3.1L85.4,68.7H112v-4.8H61.7V96z M0,68.7h27.5L0,87.7v7.8l39.1-26.8h7.8L7.1,96H11l36.8-25.3V96h3.5V63.9H0V68.7z"/><path fill="#BD0034" d="M112,16v3.6L75,44.9h-7.7L109.4,16H112z M73.2,68.7L112,95.2v-5.3L81,68.7H73.2z M40.9,44.9L0,16.8v5.3l33.2,22.8C33.2,44.9,40.9,44.9,40.9,44.9z M39.1,68.7L0,95.5V96h7.1l39.8-27.3H39.1z M61.7,16H51.3v33.7H0v14.2h51.3V96h10.4V63.9H112V49.7H61.7V16z"/></svg>';
  }

  function updateActiveLanguageUI(lang){
    var active = document.querySelector('.u-language-1 > .u-language-active');
    if (!active) return;
    active.setAttribute('data-language', lang);
    var caret = '<svg class="u-caret u-caret-svg" viewBox="0 0 16 16" width="16" height="16"><polygon points="8,12 2,4 14,4"></polygon></svg>';
    active.innerHTML = caret + renderFlag(lang);
  }

  function wireLanguageLinks(){
    document.querySelectorAll('[data-language]').forEach(function(a){
      a.addEventListener('click', function(ev){
        var lang = a.getAttribute('data-language');
        if (!lang) return;
        localStorage.setItem('lang', lang);
      });
    });
  }

  function init(){
    var lang = detectLang();
    localStorage.setItem('lang', lang);
    applyMeta(lang);
    applyTexts(lang);
    wireLanguageLinks();
    updateActiveLanguageUI(lang);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
