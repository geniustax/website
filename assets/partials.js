// Lightweight HTML partial loader
(function() {
  if (location && location.protocol === 'file:') {
    // Running from file:// — browsers block fetch for local files.
    // Skip partial loading to avoid CORS errors; inline markup should be present.
    return;
  }
  function loadPartial(el) {
    var url = el.getAttribute('data-include');
    if (!url) return;
    fetch(url)
      .then(function(r) { return r.text(); })
      .then(function(html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        // Replace the placeholder with the partial’s root nodes
        var parent = el.parentNode;
        while (tmp.firstChild) parent.insertBefore(tmp.firstChild, el);
        parent.removeChild(el);
        // Re-apply i18n for dynamically injected content
        try {
          if (window.applyI18n) window.applyI18n();
          else window.dispatchEvent(new Event('i18n:refresh'));
        } catch (_) {}
      })
      .catch(function(err) {
        console.error('Partial include failed:', url, err);
      });
  }

  function init() {
    var nodes = document.querySelectorAll('[data-include]');
    nodes.forEach(loadPartial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
