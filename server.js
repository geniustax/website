const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Simple local development server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle API routes
  if (pathname === '/api/contact') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          console.log('📧 Contact form submission received:');
          console.log('Name:', data.name);
          console.log('Email:', data.email);
          console.log('Phone:', data.phone);
          console.log('Service:', data.service);
          console.log('Message:', data.message);
          
          // Simulate email sending
          console.log('🚀 Would send email to: anna.chemic@gmail.com');
          console.log('📨 From: GeniusTax Website <onboarding@resend.dev>');
          console.log('📨 Reply-to:', data.email);
          
          res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          });
          
          res.end(JSON.stringify({ 
            ok: true, 
            message: 'Email sent successfully (simulated in local dev)',
            id: 'local-test-' + Date.now()
          }));
          
        } catch (error) {
          console.error('❌ Error processing request:', error);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }));
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
    }
    return;
  }

  // Handle OPTIONS requests for CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // Serve static files
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(__dirname, filePath);

  try {
    const data = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    
    let contentType = 'text/html';
    switch (ext) {
      case '.js': contentType = 'text/javascript'; break;
      case '.css': contentType = 'text/css'; break;
      case '.png': contentType = 'image/png'; break;
      case '.jpg': case '.jpeg': contentType = 'image/jpeg'; break;
      case '.svg': contentType = 'image/svg+xml'; break;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('🚀 Local development server running at:');
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://localhost:${PORT}/Contact.html`);
  console.log('');
  console.log('💡 The contact form will work here (simulated)');
  console.log('   On Vercel, it will use real Resend API');
});