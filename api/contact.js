export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const contentType = req.headers['content-type'] || '';
  let payload = {};

  try {
    if (contentType.includes('application/json')) {
      payload = req.body || {};
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const raw = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', (chunk) => (data += chunk));
        req.on('end', () => resolve(data));
        req.on('error', reject);
      });
      const params = new URLSearchParams(raw);
      payload = Object.fromEntries(params.entries());
    } else {
      return res.status(400).json({ ok: false, error: 'Unsupported content type' });
    }
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'Invalid request body' });
  }

  const { name, email, phone, service, message, company } = payload;

  if (typeof company === 'string' && company.trim() !== '') {
    return res.status(200).json({ ok: true, blocked: true });
  }

  const isEmailValid = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val || '').toLowerCase());
  if (!name || !email || !message || !isEmailValid(email)) {
    return res.status(422).json({ ok: false, error: 'Validation failed' });
  }

  const to = 'info@geniustax.nl';
  const from = 'GeniusTax Website <noreply@geniustax.nl>';
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Email provider not configured' });
  }

  const subject = `Новое обращение от ${name} - GeniusTax.nl`;
  const svc = service && service !== '' ? service : 'Не выбрано';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0097a7; margin: 0 0 20px;">Новое сообщение с сайта GeniusTax</h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333; font-size: 16px;">Контактные данные:</h3>
        <p style="margin: 8px 0;"><strong>Имя:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #0097a7;">${escapeHtml(email)}</a></p>
        ${phone ? `<p style="margin: 8px 0;"><strong>Телефон:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p style="margin: 8px 0;"><strong>Интересующие услуги:</strong> ${escapeHtml(svc)}</p>
      </div>
      
      <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0097a7; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <h3 style="margin-top: 0; color: #333; font-size: 16px;">Сообщение:</h3>
        <p style="line-height: 1.6; color: #555; margin: 0;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
        <p style="margin: 4px 0;">Отправлено через контактную форму на сайте <strong>GeniusTax.nl</strong></p>
        <p style="margin: 4px 0;">Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Amsterdam' })}</p>
      </div>
    </div>
  `;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        reply_to: email,
        html
      })
    });

    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return res.status(502).json({ ok: false, error: 'Email send failed', provider: data });
    }

    return res.status(200).json({ ok: true, id: data.id || null });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Unexpected error' });
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

