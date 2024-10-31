const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://odyssey.trade'; // Replace with your actual domain
const PAGES = [
  '',  // Home page
  'about',
  'contact',
  'partnership',
  'services',
  'solutions',
  'guide/getting-started',
  'guide/integration',
  'guide/revenue-models',
  'guide/why-partner'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(page => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

// Ensure the dist directory exists
const distPath = path.resolve('docs/.vitepress/dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write the sitemap.xml file
fs.writeFileSync(path.resolve(distPath, 'sitemap.xml'), sitemap);
console.log('Sitemap generated at:', path.resolve(distPath, 'sitemap.xml'));