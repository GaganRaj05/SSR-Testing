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
        
        const seoData = {
          '/': {
            title: "Legal Forms Done Right - No Lawyer Needed | LegalEasier",
            description: "Fast, affordable legal document preparation for eviction, divorce, small claims, wills, and more. Professional legal forms without the lawyer fees. Get started today.",
            keywords: "legal forms, legal documents, eviction forms, divorce papers, small claims court, wills, power of attorney, legal document preparation, affordable legal services, no lawyer needed",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/"
          },
          '/legal-easier/services': {
            title: "Legal Services | LegalEasier",
            description: "Comprehensive legal services and document preparation. Professional assistance for all your legal needs.",
            keywords: "legal services, legal assistance, document preparation, legal help",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/services"
          },
          '/legal-easier/notary-service': {
            title: "Notary Services | LegalEasier",
            description: "Professional notary services for all your document authentication needs.",
            keywords: "notary services, document notarization, notary public",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/notary-service"
          },
          '/legal-easier/Terms&Conditions': {
            title: "Terms & Conditions | LegalEasier",
            description: "Read our terms and conditions for using LegalEasier services.",
            keywords: "terms and conditions, legal terms, service agreement",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/Terms&Conditions"
          },
          '/legal-easier/HelpAndFaq': {
            title: "Help & FAQ | LegalEasier",
            description: "Frequently asked questions and help documentation for LegalEasier services.",
            keywords: "help, FAQ, frequently asked questions, support",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/HelpAndFaq"
          },
          '/legal-easier/Privacy-Policy': {
            title: "Privacy Policy | LegalEasier",
            description: "Our privacy policy explaining how we protect and handle your personal information.",
            keywords: "privacy policy, data protection, personal information",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/Privacy-Policy"
          },
          '/legal-easier/contact-us': {
            title: "Contact Us | LegalEasier",
            description: "Get in touch with LegalEasier for questions about our legal document services.",
            keywords: "contact us, customer service, legal help contact",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/contact-us"
          },
          '/legal-easier/blog-page': {
            title: "Legal Blog | LegalEasier",
            description: "Latest articles and insights about legal documents, processes, and legal advice.",
            keywords: "legal blog, legal articles, legal advice, legal insights",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/legal-easier/blog-page"
          },
          '/schedule': {
            title: "Schedule Appointment | LegalEasier",
            description: "Schedule a consultation or appointment for legal document assistance.",
            keywords: "schedule appointment, legal consultation, book appointment",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/schedule"
          },
          '/admin/upload-blogs': {
            title: "Admin Dashboard | LegalEasier",
            description: "Administrative dashboard for content management.",
            keywords: "admin, dashboard, content management",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/admin/upload-blogs"
          },
          '/landing-page/small-claims': {
            title: "Small Claims Court Forms | LegalEasier",
            description: "Professional small claims court document preparation. Get your small claims forms ready quickly and correctly.",
            keywords: "small claims court, small claims forms, court documents, legal forms",
            image: "https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8=",
            url: "https://www.legaleasier.org/landing-page/small-claims"
          }
        };
        
        const routeSEO = seoData[renderedRoute.route];
        if (routeSEO) {
          // Handle title - check if exists, if not create it
          const existingTitle = $('head title');
          if (existingTitle.length) {
            existingTitle.text(routeSEO.title);
          } else {
            $('head').append(`<title>${routeSEO.title}</title>`);
          }
          
          // Remove any existing duplicate tags before adding new ones
          $('head meta[name="description"]').remove();
          $('head meta[name="keywords"]').remove();
          $('head meta[property="og:title"]').remove();
          $('head meta[property="og:description"]').remove();
          $('head meta[property="og:image"]').remove();
          $('head meta[property="og:url"]').remove();
          $('head meta[property="og:type"]').remove();
          $('head meta[name="twitter:card"]').remove();
          $('head meta[name="twitter:title"]').remove();
          $('head meta[name="twitter:description"]').remove();
          $('head meta[name="twitter:image"]').remove();
          $('head link[rel="canonical"]').remove();
          
          // Add SEO tags
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