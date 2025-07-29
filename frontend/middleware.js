import entry from './entry-file.json'; // this works because it's a static JSON file

export const config = {
  matcher: ['/', '/about', '/services'],
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const seoMap = {
    '/': {
      title: 'Home - My Vite App',
      description: 'Welcome to the home page.',
    },
    '/about': {
      title: 'About Us - My Vite App',
      description: 'Learn about the team and mission.',
    },
    '/services': {
      title: 'Services - My Vite App',
      description: 'What we offer.',
    },
  };

  const seo = seoMap[pathname] || {
    title: 'My Vite App',
    description: 'Default description',
  };

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${seo.description}" />
        <title>${seo.title}</title>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/${entry}"></script>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
