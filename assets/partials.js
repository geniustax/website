// Lightweight HTML partial loader
(function() {
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

