export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/sitemap">
  <title>Redirecting to Sitemap | NSIT Patna</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; background: #f6f8fb; color: #071225;
    }
    .card {
      text-align: center; padding: 48px 40px; max-width: 400px;
      background: #fff; border-radius: 20px; box-shadow: 0 8px 28px rgba(0,0,0,0.06);
    }
    .logo { width: 80px; height: 80px; margin-bottom: 20px; }
    h1 { font-size: 22px; font-weight: 850; margin-bottom: 8px; }
    p { color: #667085; font-size: 14px; font-weight: 500; margin-bottom: 24px; line-height: 1.5; }
    a {
      display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px;
      background: #ed1c24; color: #fff; text-decoration: none; border-radius: 12px;
      font-weight: 700; font-size: 14px; transition: opacity .2s;
    }
    a:hover { opacity: .9; }
  </style>
</head>
<body>
  <div class="card">
    <img src="/images/logo-opt-v3.png" alt="NSIT" class="logo" />
    <h1>Redirecting to Sitemap</h1>
    <p>You are being redirected to the NSIT Patna sitemap page.</p>
    <a href="/sitemap">Go to Sitemap &rarr;</a>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
