# ThinkMents Website - Deployment Guide

## ⚠️ CRITICAL: This is a FRONTEND-ONLY Application

This website is **100% frontend** - no backend, no Supabase, no edge functions.

## Deployment Configuration

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite + React
- **Type:** Static Site

### ⛔ DO NOT Deploy These:
- ❌ Supabase edge functions
- ❌ Server functions
- ❌ API endpoints
- ❌ Backend services

## Figma Make Deployment Issue (403 Error)

### The Problem
Figma Make is attempting to deploy Supabase edge functions that:
1. Were created during initial setup
2. Are now protected system files
3. Cannot be deleted through normal means
4. Are NOT used by the application

### Configuration Files Created
To prevent edge function deployment:
- `figma-make.config.json` - Disables Supabase integration
- `deployment.config.json` - Specifies static deployment
- `.figmamakeignore` - Ignores Supabase directories
- `.supabaseignore` - Skips all Supabase deployments
- `supabase/config.toml` - Disables edge functions
- `.deployment` - Environment-level configuration

### The Solution
If the 403 error persists after these configurations:

1. **Deploy to Vercel (Recommended - 5 minutes):**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `dist` folder after running `npm run build`
   - Or connect via GitHub/GitLab

3. **Contact Figma Make Support:**
   - Request manual disconnection of Supabase integration
   - Provide project ID: TSI4MmHw4TcJVL6Ji2FvTs

## Build Instructions

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview locally
npm run preview
```

## What Gets Built
- ✅ React app compiled to static HTML/CSS/JS
- ✅ All pages pre-rendered
- ✅ SEO files (robots.txt, sitemap.xml)
- ✅ Static assets and images
- ✅ Optimized and minified code

## No Backend Required
- All forms use Google Forms embeds
- Google Maps is client-side
- Analytics runs client-side
- No database needed
- No API calls to backend

## Deployment Platforms That Work
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Cloudflare Pages
- ✅ AWS S3 + CloudFront
- ✅ Any static hosting

## Support
For Figma Make deployment issues, contact their support team.
