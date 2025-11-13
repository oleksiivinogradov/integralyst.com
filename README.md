
  # Integralyst - AI Consulting Company Website

  This is a code bundle for AI Consulting Company Website. The original project is available at https://www.figma.com/design/em6II8fEMWXeIStAdLrJFb/AI-Consulting-Company-Website.

  ## Features

  - 🌍 Multi-region support (US, Israel, Switzerland)
  - 🔍 SEO-optimized with static pre-rendering
  - 📱 Responsive design
  - ⚡ Fast and modern tech stack (React + Vite)
  - 🏷️ Structured data for better Google indexing
  - 📊 Dynamic meta tags for each branch

  ## Running the code

  ### Development
  ```bash
  npm i           # Install dependencies
  npm run dev     # Start development server
  ```

  ### Production Build
  ```bash
  npm run build        # Build and prerender all pages
  npm run deploy-check # Verify build is ready for deployment
  ```

  ## SEO Implementation

  This site includes advanced SEO features to ensure all branch pages are properly indexed by Google:

  - **Static Pre-rendering**: Each branch (/us, /il, /ch) has its own static HTML file
  - **Dynamic Meta Tags**: Using react-helmet-async for client-side meta management
  - **Structured Data**: JSON-LD schema for better Google understanding
  - **Open Graph Tags**: Optimized for social media sharing
  - **GitHub Pages Support**: Includes 404.html for SPA routing

  See [SEO_FIX_GUIDE.md](./SEO_FIX_GUIDE.md) for detailed documentation.

  ## Project Structure

  ```
  ├── src/
  │   ├── components/        # React components
  │   │   ├── BranchSelector.tsx    # Homepage with region selection
  │   │   ├── MainSite.tsx          # Branch-specific content
  │   │   └── ...                   # Other components
  │   ├── App.tsx            # Main app with routing
  │   └── main.tsx           # Entry point
  ├── scripts/
  │   ├── prerender.js       # Generates static HTML for each branch
  │   └── deploy-check.js    # Validates build before deployment
  ├── public/
  │   ├── sitemap.xml        # SEO sitemap
  │   └── robots.txt         # Crawler instructions
  └── build/                 # Production build output
      ├── us/index.html      # US branch static page
      ├── il/index.html      # Israel branch static page
      ├── ch/index.html      # Switzerland branch static page
      └── 404.html           # GitHub Pages SPA fallback
  ```

  ## Deployment

  1. Build the site:
     ```bash
     npm run build
     ```

  2. Verify the build:
     ```bash
     npm run deploy-check
     ```

  3. Deploy the `build/` directory to your hosting (GitHub Pages, Netlify, Vercel, etc.)

  4. Submit to Google Search Console for re-indexing

  ## Available Scripts

  - `npm run dev` - Start development server
  - `npm run build` - Build for production with pre-rendering
  - `npm run build:only` - Build without pre-rendering
  - `npm run deploy-check` - Validate build before deployment
  