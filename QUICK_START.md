# 🚀 Quick Start - Deploy Your SEO-Optimized Site

## ✅ Pre-Deployment Checklist

Run these commands in order:

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Build your site with pre-rendering
npm run build

# 3. Verify everything is ready
npm run deploy-check
```

If you see "🎉 All checks passed!" you're ready to deploy!

## 🌐 Deploy to GitHub Pages

### Option 1: Manual Deployment
1. Copy the contents of `build/` directory
2. Push to your GitHub Pages branch
3. Wait for GitHub to rebuild

### Option 2: Using gh-pages (Recommended)
```bash
# Install gh-pages if you haven't
npm install -g gh-pages

# Deploy build directory
gh-pages -d build
```

## 📊 After Deployment - Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)

2. Request indexing for each page:
   - Main page: `https://integralyst.com/`
   - US branch: `https://integralyst.com/us`
   - Israel branch: `https://integralyst.com/il`
   - Switzerland branch: `https://integralyst.com/ch`

3. Submit sitemap:
   - URL: `https://integralyst.com/sitemap.xml`

## ⏱️ Timeline

- **Day 1**: Deploy and submit to Google
- **Days 2-3**: Google starts crawling
- **Week 1-2**: Pages appear in index
- **Week 2-4**: Full SEO benefits

## 🔍 Verify It's Working

After deployment, check:

### Test 1: Browser Tab Titles
- Visit each URL and check browser tab shows unique title
- ✅ US: "Integralyst US - AI Integration & Consulting Services"
- ✅ IL: "Integralyst Israel - AI Integration & Consulting Services"
- ✅ CH: "Integralyst Switzerland - AI Integration & Consulting Services"

### Test 2: View Page Source
- Right-click on each page → "View Page Source"
- Look for unique meta description
- Verify `<link rel="canonical"...>` has correct URL
- Check for structured data: `<script type="application/ld+json">`

### Test 3: Google Rich Results
- Go to: https://search.google.com/test/rich-results
- Test each URL to see structured data

## 📝 Common Commands

```bash
npm run dev           # Development server
npm run build         # Production build with SEO
npm run deploy-check  # Verify build is ready
```

## 🆘 Need Help?

- **Full Guide**: [SEO_FIX_GUIDE.md](./SEO_FIX_GUIDE.md)
- **Deployment Details**: [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)
- **README**: [README.md](./README.md)

## ✨ What You Get

Each branch page now has:
- ✅ Unique page title
- ✅ Custom meta description
- ✅ Proper canonical URL
- ✅ Open Graph tags (social media)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Static HTML for Google crawlers

That's it! Deploy and watch Google index your pages. 🎉

