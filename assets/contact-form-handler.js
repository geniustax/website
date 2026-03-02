(function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }
  var urlParams = new URLSearchParams(window.location.search);
  var serviceParam = urlParams.get('service');
  var serviceSelect = document.getElementById('service-selection');
  if (serviceParam && serviceSelect) {
    var option = serviceSelect.querySelector('option[value="' + serviceParam + '"]');
    if (option) serviceSelect.value = serviceParam;
  }

  var form = document.getElementById('contact-form');
  if (!form) return;
  var successMsg = document.getElementById('form-success');
  var errorMsg = document.getElementById('form-error');
  var sendingMsg = document.getElementById('form-sending');
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';
    sendingMsg.style.display = 'block';
    if (submitBtn) submitBtn.disabled = true;

    var serviceValue = form.service.value;
    var lang = (localStorage && localStorage.getItem('lang')) || 'en';
    var t = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : window.I18N.en;
    var serviceNames = {
      basic: (t.contact && t.contact.form && t.contact.form.options.basic) || 'Basic package',
      standard: (t.contact && t.contact.form && t.contact.form.options.standard) || 'Standard package',
      premium: (t.contact && t.contact.form && t.contact.form.options.premium) || 'Premium package',
      individual: (t.contact && t.contact.form && t.contact.form.options.individual) || 'Individual services'
    };

    var payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: serviceValue ? serviceNames[serviceValue] : ((t.contact && t.contact.form && t.contact.form.options.select) || 'Not selected'),
      message: form.message.value,
      company: form.company ? form.company.value : ''
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(resp) {
      return resp.json().catch(function() { return {}; }).then(function(data) {
        sendingMsg.style.display = 'none';
        if (resp.ok && data.ok) {
          successMsg.style.display = 'block';
          form.reset();
          if (serviceParam && serviceSelect) serviceSelect.value = serviceParam;
        } else {
          errorMsg.style.display = 'block';
        }
      });
    })
    .catch(function() {
      sendingMsg.style.display = 'none';
      errorMsg.style.display = 'block';
    })
    .finally(function() {
      if (submitBtn) submitBtn.disabled = false;
    });
  });
})();
