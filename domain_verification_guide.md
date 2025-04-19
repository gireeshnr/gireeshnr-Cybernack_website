# Domain Connection Verification Guide

This document provides instructions for verifying your domain connection and SSL setup after configuring your DNS settings.

## Step 1: Check Domain Connection Status in Netlify

1. Log in to your [Netlify dashboard](https://app.netlify.com/)
2. Select your Cybernack website project
3. Go to "Domain settings" or "Domain management"
4. Look for cybernack.com in your domains list
5. Check the status indicator:
   - "DNS verification in progress" - DNS changes are still propagating
   - "Netlify DNS" - Domain is successfully connected to Netlify
   - "External DNS" - Domain is using Wix DNS but is properly connected

## Step 2: Verify DNS Propagation

DNS changes can take 24-48 hours to fully propagate worldwide. To check the current status:

1. Visit [DNSChecker](https://dnschecker.org/) and enter cybernack.com
2. Check if the A record is resolving to Netlify's IP address (75.2.60.5) across different locations
3. Also check www.cybernack.com to ensure the CNAME record is properly configured

## Step 3: Verify SSL Certificate

Netlify automatically provisions SSL certificates through Let's Encrypt once your domain is properly connected:

1. In your Netlify dashboard, go to "Domain settings" > "HTTPS"
2. Check the SSL certificate status:
   - "Provisioning" - Certificate is being generated
   - "Active" - Certificate is successfully installed
3. If you see any errors, click "Renew certificate" to attempt provisioning again

## Step 4: Test Your Website

Once DNS propagation is complete and SSL is active:

1. Visit https://cybernack.com in your browser
2. Verify that:
   - The website loads correctly
   - The browser shows a secure connection (padlock icon)
   - All pages and functionality work as expected
3. Also test https://www.cybernack.com to ensure the www subdomain works

## Step 5: Test Redirects

Ensure proper redirects are working:

1. Try accessing http://cybernack.com (non-HTTPS)
   - It should automatically redirect to https://cybernack.com
2. If you've set up www as your primary domain, test that non-www redirects to www (or vice versa)

## Troubleshooting Common Issues

### SSL Certificate Issues

If your SSL certificate isn't provisioning correctly:

1. Verify your DNS settings are correct in Wix
2. Ensure there are no conflicting DNS records
3. Check if Wix has any proxy or security features that might interfere with Netlify's certificate validation
4. Try the "Renew certificate" option in Netlify

### Website Not Loading

If your website isn't loading after DNS propagation:

1. Clear your browser cache or try in an incognito/private window
2. Check Netlify's deploy logs for any build errors
3. Verify your domain is pointing to the correct Netlify site
4. Check if Wix is still serving a website on your domain (you may need to disable this in Wix)

### Mixed Content Warnings

If you see mixed content warnings (padlock with warning):

1. Check for any hardcoded http:// URLs in your website code
2. Look for resources loaded from non-HTTPS sources
3. Update these references to use https:// or relative URLs

## Next Steps After Verification

Once your domain is successfully connected and verified:

1. Set up domain monitoring to be alerted of any issues
2. Consider configuring additional security headers in Netlify
3. Implement regular backups of your website code
4. Document your domain and hosting configuration for future reference

If you continue to experience issues after following these steps, contact Netlify support or Wix support depending on where the issue appears to be occurring.
