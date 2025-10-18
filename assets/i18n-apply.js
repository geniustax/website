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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

