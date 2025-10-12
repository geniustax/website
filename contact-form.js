// Contact form handler
console.log('contact-form.js loaded!');
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing contact form...');
  const form = document.getElementById('contact-form');
  console.log('Form found:', form);
  const submitButton = form.querySelector('button[type="submit"]');
  console.log('Submit button found:', submitButton);
  const originalButtonText = submitButton.textContent;

  // Debug: add click listener to submit button
  submitButton.addEventListener('click', function(e) {
    console.log('Submit button clicked!', e);
    console.log('Form action:', form.action);
    console.log('Form method:', form.method);
    
    // Prevent default button behavior and manually trigger form submission
    e.preventDefault();
    e.stopPropagation();
    
    // Manually trigger our form handler
    handleFormSubmission();
  });

  // Validation function
  function validateForm() {
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const agree = form.querySelector('[name="agree"]').checked;
    
    // Check required fields
    if (!name) {
      showMessage('Пожалуйста, укажите ваше имя', 'error');
      return false;
    }
    
    if (!email) {
      showMessage('Пожалуйста, укажите ваш email', 'error');
      return false;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Пожалуйста, укажите корректный email адрес', 'error');
      return false;
    }
    
    if (!phone) {
      showMessage('Пожалуйста, укажите ваш телефон', 'error');
      return false;
    }
    
    if (!message) {
      showMessage('Пожалуйста, напишите ваше сообщение', 'error');
      return false;
    }
    
    if (!agree) {
      showMessage('Пожалуйста, подтвердите согласие на обработку персональных данных', 'error');
      return false;
    }
    
    return true;
  }

  // Extract form submission logic into a function
  async function handleFormSubmission() {
    console.log('handleFormSubmission called!');
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляем...';

    try {
      const formData = new FormData(form);
      const data = {};
      
      // Convert FormData to object
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }
      
      console.log('Sending data:', data);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (result.ok) {
        // Success
        showMessage('Сообщение успешно отправлено! Мы ответим в течение 24 часов.', 'success');
        form.reset();
        
        // Reset intlTelInput if it exists
        if (window.intlTelInput && window.intlTelInputInstance) {
          window.intlTelInputInstance.setNumber('');
        }
      } else {
        // Error from server
        showMessage(result.error || 'Произошла ошибка при отправке сообщения', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('Произошла ошибка при отправке сообщения. Попробуйте позже.', 'error');
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  }

  form.addEventListener('submit', async function(e) {
    console.log('Form submit event triggered!');
    e.preventDefault();
    await handleFormSubmission();
  });

  function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = message;
    
    // Style the message
    messageDiv.style.cssText = `
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      font-weight: 500;
      ${type === 'success' 
        ? 'background-color: #d4edda; border: 1px solid #c3e6cb; color: #155724;' 
        : 'background-color: #f8d7da; border: 1px solid #f5c6cb; color: #721c24;'
      }
    `;

    // Insert message after the form
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
});