// Renders a shared site footer with i18n labels
(function(){
  var html = '\n<footer class="site-footer" role="contentinfo">\n  <div class="site-footer__container">\n    <div class="site-footer__top">\n      <div class="site-footer__brand">\n        <img src="images/brand.png" alt="GeniusTax" width="126" height="126"/>\n        <div class="site-footer__address">\n          <h5 class="site-footer__title" data-i18n="contact.info.addressTitle">Address</h5>\n          <p class="site-footer__text">KVK: 89654889<br/>Boschjesstraat 22B<br/>1541KK Koog aan de Zaan</p>\n        </div>\n      </div>\n      <div class="site-footer__contacts">\n        <h5 class="site-footer__title" data-i18n="contact.info.contactsTitle">Contacts</h5>\n        <p class="site-footer__text">\n          <span data-i18n="contact.info.emailLabel">Email</span>: <a href="mailto:info@geniustax.nl" class="site-footer__link">info@geniustax.nl</a><br/>\n          <span data-i18n="contact.info.phoneLabel">Phone</span>: <a href="tel:+31644492189" class="site-footer__link">+31644492189</a><br/>\n          <span data-i18n="contact.info.hoursLabel">Working hours</span>: <span data-i18n="contact.info.hoursValue">Mon–Fri 9:00 - 19:00</span>\n        </p>\n      </div>\n      <div class="site-footer__links">\n        <a href="Terms-of-use.html" target="_blank" class="site-footer__link">Terms &amp; Conditions</a>\n        <a href="#" class="site-footer__link" data-i18n="footer.privacy">Privacy Policy (GDPR)</a>\n        <div class="site-footer__social">\n          <a href="https://www.instagram.com/geniustax_nl?igsh=cjdtMTVhYXQxZ2Ri&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram" class="site-footer__icon">\n            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2z"/></svg>\n          </a>\n          <a href="https://www.facebook.com/share/1ZRvv2gSMN/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook" class="site-footer__icon">\n            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/></svg>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class="site-footer__copy" data-i18n="footer.copyright">© 2025 All rights reserved</div>\n  </div>\n</footer>\n';

  function mount(){
    var host = document.querySelector('[data-footer]');
    if (!host){ host = document.createElement('div'); host.setAttribute('data-footer',''); document.body.appendChild(host); }
    host.innerHTML = html;
    // apply i18n if available
    try{
      var lang = (localStorage && localStorage.getItem('lang')) || 'en';
      if (typeof window.applyI18n === 'function') window.applyI18n(lang);
    }catch(e){}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();

