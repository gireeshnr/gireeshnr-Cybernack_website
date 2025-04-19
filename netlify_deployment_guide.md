# Netlify Deployment Guide for Cybernack Website

This document provides step-by-step instructions for deploying your Cybernack website to Netlify and connecting it to your cybernack.com domain.

## Step 1: Connect Your GitHub Repository to Netlify

1. Go to [Netlify.com](https://netlify.com) and sign in (or create an account if you don't have one)
2. Click "Add new site" > "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account if prompted
5. Select your repository: `gireeshnr/gireeshnr-Cybernack_website`

## Step 2: Configure Build Settings

Configure the following build settings:

- **Base directory**: Leave blank (this means the root of your repository)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Advanced build settings**: Add the following environment variables:
  - `NODE_VERSION`: `16` (or higher)
  - `NPM_VERSION`: `8` (or higher)

## Step 3: Deploy Your Site

1. Click "Deploy site" to start the initial deployment
2. Netlify will begin building and deploying your site
3. This process may take a few minutes to complete

## Step 4: Install the Next.js Plugin

After the initial deployment (even if it fails):

1. Go to "Site settings" > "Build & deploy" > "Plugins"
2. Click "Add plugin"
3. Search for "Next.js" and install the "@netlify/plugin-nextjs" plugin
4. Go back to "Deploys" and trigger a new deployment by clicking "Trigger deploy" > "Deploy site"

## Step 5: Connect Your Custom Domain

Once your site is successfully deployed:

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Enter "cybernack.com" and click "Verify"
4. Select "Yes, I am the owner of this domain"
5. Click "Add domain"

## Step 6: Configure DNS Settings in Wix

Since your domain is managed through Wix:

1. Log in to your Wix account
2. Go to your Domain dashboard
3. Select cybernack.com
4. Go to "Advanced" or "DNS Records"
5. You'll need to add these DNS records:
   - Add an A record pointing to Netlify's load balancer IP: `75.2.60.5`
   - Add a CNAME record for `www` pointing to your Netlify site URL (e.g., `your-site-name.netlify.app`)

## Step 7: Wait for DNS Propagation

1. DNS changes can take 24-48 hours to fully propagate
2. Netlify will automatically provision an SSL certificate once DNS is verified
3. You can check the status in the "Domain settings" section of your Netlify dashboard

## Step 8: Verify Your Website

After DNS propagation is complete:

1. Visit cybernack.com to ensure your website loads correctly
2. Check that HTTPS is working properly (look for the padlock icon in your browser)
3. Test all pages and functionality to ensure everything works as expected

## Troubleshooting Common Issues

If you encounter issues during deployment:

1. **Build failures**: Check the build logs for specific errors
2. **Missing Next.js plugin**: Ensure the Next.js plugin is installed
3. **DNS configuration issues**: Verify your DNS records are set correctly in Wix
4. **SSL certificate issues**: Make sure your DNS is properly configured and wait for propagation

For additional help, refer to [Netlify's documentation](https://docs.netlify.com/) or contact Netlify support.
