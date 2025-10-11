// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

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

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

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