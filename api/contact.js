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

  const to = process.env.CONTACT_TO || 'info@geniustax.nl';
  const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Email provider not configured' });
  }

  const subject = `Новая заявка с сайта — ${name}`;
  const svc = service && service !== '' ? service : 'Не выбрано';

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 12px">Новая заявка с формы контакта</h2>
      <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Телефон:</strong> ${escapeHtml(phone || '')}</p>
      <p><strong>Услуги:</strong> ${escapeHtml(svc)}</p>
      <p><strong>Сообщение:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
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

