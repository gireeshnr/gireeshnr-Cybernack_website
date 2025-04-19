# Wix DNS Configuration Guide for Netlify

This document provides detailed instructions for configuring your Wix-managed cybernack.com domain to work with your Netlify-hosted website.

## Step 1: Access Your Wix Domain Settings

1. Log in to your Wix account at [www.wix.com](https://www.wix.com)
2. Click on your profile icon in the top-right corner
3. Select "Domains" from the dropdown menu
4. Find and select "cybernack.com" from your list of domains

## Step 2: Navigate to DNS Settings

1. In your domain dashboard, look for "Advanced" or "Advanced DNS Settings"
2. Click on this option to access your DNS management panel
3. You should see a list of your current DNS records

## Step 3: Add Required DNS Records for Netlify

You'll need to add the following DNS records to point your domain to Netlify:

### A Records

1. Click "Add Record" or "+" button
2. Select "A" as the record type
3. For the Host field:
   - Enter `@` (represents the root domain)
4. For the Value/Points to field:
   - Enter `75.2.60.5` (Netlify's load balancer IP)
5. Leave TTL as default (usually 3600 or 1 hour)
6. Save the record

### CNAME Records

1. Click "Add Record" or "+" button
2. Select "CNAME" as the record type
3. For the Host field:
   - Enter `www` (for www.cybernack.com)
4. For the Value/Points to field:
   - Enter your Netlify site URL (e.g., `your-site-name.netlify.app`)
5. Leave TTL as default
6. Save the record

## Step 4: Preserve Email Records

Important: If you're using email services with your domain (you mentioned support@cybernack.com):

1. Do NOT delete or modify any existing MX records
2. Do NOT delete or modify any existing TXT records related to email verification
3. If you have any email-related SRV records, keep those intact as well

## Step 5: Verify Your DNS Configuration

After adding the required records:

1. In your Netlify dashboard, go to "Domain settings"
2. Your domain should show "DNS verification in progress"
3. This verification can take 24-48 hours to complete

## Step 6: Test DNS Propagation

You can check if your DNS changes are propagating correctly using these tools:

1. [DNSChecker](https://dnschecker.org/) - Enter cybernack.com to check A record propagation
2. [WhatsMyDNS](https://whatsmydns.net/) - Check both A and CNAME record propagation
3. [DNS Propagation Checker](https://www.whatsmydns.net/) - Another tool to verify DNS changes

## Troubleshooting Common DNS Issues

If you encounter issues with your DNS configuration:

1. **DNS not propagating**: DNS changes can take up to 48 hours to fully propagate worldwide
2. **Netlify not verifying domain**: Double-check that your A record points to the correct Netlify IP
3. **Email not working**: Ensure you've preserved all email-related DNS records
4. **www subdomain not working**: Verify your CNAME record is correctly pointing to your Netlify site

## Important Notes About Wix Domain Management

1. Wix may have specific limitations or requirements for external DNS configuration
2. Some Wix plans may restrict certain DNS modifications
3. If you encounter any restrictions, you may need to contact Wix support for assistance
4. Consider taking screenshots of your current DNS configuration before making changes

If you need additional help with Wix DNS configuration, refer to [Wix's DNS documentation](https://support.wix.com/en/article/about-your-domains-dns-settings) or contact Wix support.
