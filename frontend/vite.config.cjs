// vite.config.js
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react-swc')
const prerender = require('vite-plugin-prerender')
const cheerio = require('cheerio')
const path = require('path')

module.exports = defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', 
        '/legal-easier/services',
        '/legal-easier/notary-service',
        '/legal-easier/Terms&Conditions',
        '/legal-easier/HelpAndFaq',
        '/legal-easier/Privacy-Policy',
        '/legal-easier/contact-us',
        '/legal-easier/blog-page',
        '/schedule',
        '/admin/upload-blogs',
        '/landing-page/small-claims'
      ],
      postProcess(renderedRoute) {
  console.log(`Processing route: ${renderedRoute.route}`);
  
  const $ = cheerio.load(renderedRoute.html);
  
  // Define SEO data per route
  const seoData = {
    '/': {
      title: "Legal Forms Done Right - No Lawyer Needed | LegalEasier",
      description: "Fast, affordable legal document preparation for eviction, divorce, small claims, wills, and more. Professional legal forms without the lawyer fees. Get started today.",
      keywords: "legal forms, legal documents, eviction forms, divorce papers, small claims court, wills, power of attorney, legal document preparation, affordable legal services, no lawyer needed",
      image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
      url: "https://www.legaleasier.org/"
    }
    // Add other routes here
  };
  
  const routeSEO = seoData[renderedRoute.route];
  if (routeSEO) {
    // Inject SEO tags directly
    $('head title').text(routeSEO.title);
    $('head').append(`<meta name="description" content="${routeSEO.description}">`);
    $('head').append(`<meta name="keywords" content="${routeSEO.keywords}">`);
    $('head').append(`<meta property="og:title" content="${routeSEO.title}">`);
    $('head').append(`<meta property="og:description" content="${routeSEO.description}">`);
    $('head').append(`<meta property="og:image" content="${routeSEO.image}">`);
    $('head').append(`<meta property="og:url" content="${routeSEO.url}">`);
    $('head').append(`<meta property="og:type" content="website">`);
    $('head').append(`<meta name="twitter:card" content="summary_large_image">`);
    $('head').append(`<meta name="twitter:title" content="${routeSEO.title}">`);
    $('head').append(`<meta name="twitter:description" content="${routeSEO.description}">`);
    $('head').append(`<meta name="twitter:image" content="${routeSEO.image}">`);
    $('head').append(`<link rel="canonical" href="${routeSEO.url}">`);
  }
  
  renderedRoute.html = $.html();
  return renderedRoute;
}
    })
  ],
  build: {
    outDir: 'dist'
  },
  base: '/',
})