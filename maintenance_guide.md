# Cybernack Website Maintenance Guide

This document provides instructions for maintaining and updating your Cybernack website after it has been successfully deployed.

## Regular Maintenance Tasks

### 1. Content Updates

To update website content:

1. Make changes to the relevant files in your GitHub repository:
   - Edit page content in `/src/app/[page-name]/page.tsx` files
   - Update component content in `/src/components/` files
   - Modify styles in `/src/app/globals.css`

2. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

3. Netlify will automatically detect the changes and deploy the updated website

### 2. Dependency Updates

Periodically update your project dependencies:

1. Clone the repository locally if you haven't already
2. Update dependencies:
   ```bash
   npm update
   # or for specific packages
   npm update next react react-dom
   ```
3. Test the website locally:
   ```bash
   npm run dev
   ```
4. If everything works correctly, commit and push the changes

### 3. Security Monitoring

Regularly check for security issues:

1. Review Netlify security notifications in your dashboard
2. Run security audits on your dependencies:
   ```bash
   npm audit
   ```
3. Fix any identified vulnerabilities:
   ```bash
   npm audit fix
   ```

### 4. Performance Monitoring

Monitor your website's performance:

1. Use Netlify Analytics if available
2. Set up Google Analytics for more detailed insights
3. Periodically run performance tests using tools like:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

## Making Significant Updates

### Adding New Pages

To add a new page to your website:

1. Create a new directory in `/src/app/` with the page name
2. Add a `page.tsx` file in this directory
3. Follow the pattern of existing pages
4. Update navigation in the navbar component if needed

Example for adding a blog post page:
```tsx
// src/app/blog/[slug]/page.tsx
"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function BlogPostPage({ params }) {
  const { slug } = params;
  
  return (
    <main>
      <Navbar />
      <section className="section bg-background">
        <div className="container-custom">
          <h1>Blog Post: {slug}</h1>
          {/* Content here */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
```

### Adding New Components

To create a new reusable component:

1. Add a new file in `/src/components/`
2. Follow the pattern of existing components
3. Import and use the component in your pages

### Updating Styles

To update the website styling:

1. Modify the color variables in `/src/app/globals.css`
2. Add new utility classes as needed
3. Update component-specific styles

## Backup Procedures

Regularly back up your website:

1. Your code is already backed up in GitHub
2. Consider enabling GitHub repository backups
3. Periodically download a local copy of your repository:
   ```bash
   git clone https://github.com/gireeshnr/gireeshnr-Cybernack_website.git cybernack-backup-[date]
   ```

## Domain and SSL Management

### Domain Renewal

Ensure your domain doesn't expire:

1. Wix will send renewal notifications for cybernack.com
2. Renew your domain before the expiration date
3. After renewal, no additional configuration should be needed

### SSL Certificate Renewal

Netlify handles SSL certificate renewal automatically:

1. Let's Encrypt certificates are valid for 90 days
2. Netlify automatically renews them about 30 days before expiration
3. If you encounter SSL issues, you can manually renew in Netlify:
   - Go to Domain settings > HTTPS
   - Click "Renew certificate"

## Troubleshooting Common Issues

### Build Failures

If your site fails to build after updates:

1. Check the build logs in Netlify
2. Look for syntax errors or missing dependencies
3. Test the build locally:
   ```bash
   npm run build
   ```
4. Fix the issues and push the changes

### Domain Connection Issues

If your domain stops working:

1. Verify your DNS settings in Wix haven't changed
2. Check the domain status in Netlify
3. Ensure your Netlify account and billing are up to date

## Getting Help

If you need additional assistance:

1. Netlify Documentation: [docs.netlify.com](https://docs.netlify.com/)
2. Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Netlify Support: Available through your Netlify dashboard
4. Wix Support: Available through your Wix account

By following these maintenance procedures, you'll ensure your Cybernack website remains secure, up-to-date, and performs optimally.
