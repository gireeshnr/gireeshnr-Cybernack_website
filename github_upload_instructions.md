# GitHub Upload Instructions for Cybernack Website

This document provides step-by-step instructions for uploading your Cybernack website files to GitHub and connecting them to Netlify for deployment.

## Step 1: Prepare Your Files

1. Download all the website files from this conversation as a zip file or copy them to your local machine.
2. Organize them in the same directory structure as created here.

## Step 2: Upload Files to GitHub

### Option A: Using GitHub Web Interface

1. Go to your GitHub repository: https://github.com/gireeshnr/gireeshnr-Cybernack_website
2. If you have existing files you want to keep, don't delete them
3. Click on "Add file" > "Upload files"
4. Drag and drop your files or use the file selector
5. For each directory, you'll need to:
   - Create the directory first (e.g., "src", "src/app", "src/components")
   - Navigate into each directory and upload the relevant files
6. Add a commit message like "Add Next.js website files"
7. Click "Commit changes"

### Option B: Using Git Command Line (Recommended)

1. Clone your repository:
   ```bash
   git clone https://github.com/gireeshnr/gireeshnr-Cybernack_website.git
   cd gireeshnr-Cybernack_website
   ```

2. Copy all the website files into this directory, maintaining the folder structure
   
3. Add, commit, and push the files:
   ```bash
   git add .
   git commit -m "Add Next.js website files"
   git push origin main
   ```

### Option C: Using GitHub Desktop

1. Download and install GitHub Desktop from https://desktop.github.com/
2. Clone your repository using GitHub Desktop
3. Copy all the website files into the repository folder
4. GitHub Desktop will show all changed files
5. Add a summary message like "Add Next.js website files"
6. Click "Commit to main"
7. Click "Push origin"

## Step 3: Verify Your Repository

After uploading, check your GitHub repository to ensure:

1. All files are in the correct directories
2. The repository structure matches what we've created:
   - Root: package.json, next.config.js, netlify.toml, tailwind.config.js
   - /src/app: layout.tsx, page.tsx, globals.css, and page directories
   - /src/components: All component files
   - All other necessary files and directories

## Important Files to Verify

Make sure these critical files are present in your repository:

1. `package.json` - Contains dependencies and build scripts
2. `next.config.js` - Next.js configuration
3. `netlify.toml` - Netlify deployment configuration
4. `src/app/layout.tsx` - Main layout component
5. `src/app/page.tsx` - Homepage component

Once all files are uploaded correctly to GitHub, you'll be ready to connect your repository to Netlify for deployment.
