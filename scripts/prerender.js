const fs = require('fs');
const path = require('path');

// The branches that need to be prerendered
const branches = [
  { 
    path: 'us', 
    name: 'United States',
    description: 'Integralyst US - Expert AI integration and consulting services in the United States. Transform your business with our AI solutions.',
    title: 'Integralyst US - AI Integration & Consulting Services'
  },
  { 
    path: 'il', 
    name: 'Israel',
    description: 'Integralyst Israel - Expert AI integration and consulting services in Israel. Transform your business with our AI solutions.',
    title: 'Integralyst Israel - AI Integration & Consulting Services'
  },
  { 
    path: 'ch', 
    name: 'Switzerland',
    description: 'Integralyst Switzerland - Expert AI integration and consulting services in Switzerland. Transform your business with our AI solutions.',
    title: 'Integralyst Switzerland - AI Integration & Consulting Services'
  }
];

const buildDir = path.join(__dirname, '../build');

// Read the main index.html
const indexPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Build directory not found. Please run "npm run build" first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Create HTML for each branch
branches.forEach(branch => {
  // Update meta tags for this branch
  let branchHtml = indexHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${branch.title}</title>`
    )
    .replace(
      /<meta[\s\n]+name="description"[\s\n]+content="[^"]*"[\s\n]*\/>/,
      `<meta name="description" content="${branch.description}"/>`
    )
    .replace(
      /<link[\s\n]+rel="canonical"[\s\n]+href="[^"]*"[\s\n]*\/>/,
      `<link rel="canonical" href="https://integralyst.com/${branch.path}"/>`
    );
  
  // Add Open Graph tags and structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Integralyst ${branch.name}`,
    "description": branch.description,
    "url": `https://integralyst.com/${branch.path}`,
    "areaServed": {
      "@type": "Country",
      "name": branch.name
    },
    "serviceType": ["AI Consulting", "AI Integration", "Business Transformation"],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "alex@integralyst.com",
      "contactType": "Customer Service"
    }
  };
  
  const ogTags = `
  <meta property="og:title" content="${branch.title}"/>
  <meta property="og:description" content="${branch.description}"/>
  <meta property="og:url" content="https://integralyst.com/${branch.path}"/>
  <meta property="og:type" content="website"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${branch.title}"/>
  <meta name="twitter:description" content="${branch.description}"/>
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
  
  branchHtml = branchHtml.replace('</head>', `${ogTags}\n  </head>`);
  
  // Create directory for the branch
  const branchDir = path.join(buildDir, branch.path);
  if (!fs.existsSync(branchDir)) {
    fs.mkdirSync(branchDir, { recursive: true });
  }
  
  // Write the HTML file
  fs.writeFileSync(path.join(branchDir, 'index.html'), branchHtml);
  console.log(`✓ Created ${branch.path}/index.html`);
});

// Create 404.html for GitHub Pages SPA fallback
const notFoundHtml = indexHtml.replace(
  '</head>',
  `
  <script>
    // GitHub Pages SPA redirect hack
    (function(){
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
  </head>`
);

fs.writeFileSync(path.join(buildDir, '404.html'), notFoundHtml);
console.log('✓ Created 404.html for GitHub Pages routing');

console.log('\n✓ Prerendering complete!');
console.log(`Generated ${branches.length} branch pages + 404.html`);

