const fs = require('fs');
const path = require('path');

console.log('🔍 Deployment Pre-flight Check\n');

const buildDir = path.join(__dirname, '../build');
const requiredFiles = [
  'index.html',
  'us/index.html',
  'il/index.html',
  'ch/index.html',
  '404.html'
];

let allGood = true;

// Check if build directory exists
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('✅ Build directory exists\n');

// Check for required files
console.log('📄 Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(buildDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING!`);
    allGood = false;
  }
});

console.log('');

// Verify meta tags in branch pages
console.log('🏷️  Verifying meta tags:\n');

const branches = [
  { path: 'us', name: 'United States' },
  { path: 'il', name: 'Israel' },
  { path: 'ch', name: 'Switzerland' }
];

branches.forEach(branch => {
  const filePath = path.join(buildDir, branch.path, 'index.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for required elements
    const hasTitle = content.includes(`Integralyst ${branch.name}`);
    const hasCanonical = content.includes(`https://integralyst.com/${branch.path}`);
    const hasOG = content.includes('og:title');
    const hasStructuredData = content.includes('application/ld+json');
    
    console.log(`  ${branch.path.toUpperCase()} Branch:`);
    console.log(`    ${hasTitle ? '✅' : '❌'} Title tag`);
    console.log(`    ${hasCanonical ? '✅' : '❌'} Canonical URL`);
    console.log(`    ${hasOG ? '✅' : '❌'} Open Graph tags`);
    console.log(`    ${hasStructuredData ? '✅' : '❌'} Structured data`);
    
    if (!hasTitle || !hasCanonical || !hasOG || !hasStructuredData) {
      allGood = false;
    }
  }
});

console.log('');

// Check sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const hasBranches = sitemap.includes('/us') && sitemap.includes('/il') && sitemap.includes('/ch');
  console.log(`${hasBranches ? '✅' : '❌'} Sitemap includes all branch pages`);
  if (!hasBranches) allGood = false;
} else {
  console.log('❌ Sitemap not found');
  allGood = false;
}

console.log('');

if (allGood) {
  console.log('🎉 All checks passed! Your site is ready for deployment.\n');
  console.log('Next steps:');
  console.log('  1. Deploy the build/ directory to your hosting');
  console.log('  2. Submit URLs to Google Search Console');
  console.log('  3. Monitor indexing status in Search Console\n');
} else {
  console.log('⚠️  Some checks failed. Please review the issues above.\n');
  process.exit(1);
}

