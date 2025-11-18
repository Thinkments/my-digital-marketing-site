# Robots.txt Troubleshooting Guide

## Problem
After publishing to Figma Make, `https://www.thinkments.com/robots.txt` returns a 404 Not Found error.

## Root Cause Analysis
Figma Make's Single Page Application (SPA) deployment architecture routes ALL requests through `index.html` and React Router. This means:
1. Static files in `/public` may not be served at root-level paths
2. Traditional hosting config files (`_headers`, `_redirects`) don't work in Figma Make
3. React Router must handle the `/robots.txt` route

## Solutions Implemented

### 1. **Vite Build Configuration** (`/vite.config.ts`)
- Created a custom Vite plugin to copy static files to `dist/` during build
- Ensures `robots.txt`, `sitemap.xml`, and `llm.txt` are copied to the root of the build output
- These files should be served as static assets by the hosting platform

### 2. **React Router Fallback** (`/components/pages/RobotsTxtPlain.tsx`)
- Created a plain text React component that serves robots.txt content
- Added aggressive body styling to remove all HTML wrapper elements
- Uses Helmet to set content-type meta tag
- Route: `/robots.txt` → `RobotsTxtPlain` component

### 3. **Layout Exclusion** (`/App.tsx`)
- Added `/robots.txt` to `noLayoutRoutes` array
- Prevents Header/Footer from wrapping the robots.txt content

### 4. **Multiple Hosting Platform Configs**
Created config files for various platforms (in case Figma Make supports them):
- `/public/.htaccess` - Apache servers
- `/public/netlify.toml` - Netlify
- `/public/vercel.json` - Vercel

### 5. **Build Validation** (`/scripts/copy-static-files.js`)
- Enhanced validation script that checks:
  - Static files exist and are FILES (not directories)
  - robots.txt has valid content
  - Required directives are present

## How It Works

### Build Process
```bash
npm run build
```
1. `generate-robots` - Syncs robots.txt.tsx → public/robots.txt
2. `copy-static` - Validates all static files exist
3. `tsc` - TypeScript compilation
4. `vite build` - Builds app + copies static files to dist/

### Deployment Scenarios

**Scenario A: Static File Serving Works**
- Hosting platform serves `dist/robots.txt` as a static file
- Content-Type: `text/plain`
- No React Router involved

**Scenario B: SPA Routing Only (Figma Make)**
- Request to `/robots.txt` hits `index.html`
- React loads and Router matches `/robots.txt` route
- `RobotsTxtPlain` component renders
- Content-Type: `text/html` (with plain text inside)

## Testing

### After Publishing
1. **Test the route**: Visit `https://www.thinkments.com/robots.txt`
2. **Check content-type**: 
   - In browser DevTools, go to Network tab
   - Reload the page
   - Check the Response Headers for `Content-Type`
3. **Verify content**: Should see plain text robots.txt directives

### Expected Outcomes
- ✅ **Best**: Static file served with `Content-Type: text/plain`
- ✅ **Acceptable**: React component renders with plain text (even if Content-Type is text/html)
- ❌ **Bad**: 404 error or blank page

## Troubleshooting Steps

### If Still Getting 404
1. Check if `dist/robots.txt` exists after build
2. Verify React Router route is registered in App.tsx
3. Check browser console for JavaScript errors
4. Try accessing `/robots` (the human-readable UI version)

### If Getting HTML Instead of Plain Text
1. This is acceptable for crawlers (they parse content, not just headers)
2. The `RobotsTxtPlain` component should render clean text
3. Verify the component is removing all styling

### If Content is Wrong
1. Check `/robots.txt.tsx` source file
2. Run `npm run generate-robots` to sync
3. Verify `/public/robots.txt` matches
4. Rebuild and redeploy

## Alternative: Subdomain Approach
If all else fails, consider:
1. Host a separate static site on `static.thinkments.com`
2. Serve robots.txt from there
3. Use meta robots tags on main site instead

## Key Files Reference
- `/robots.txt.tsx` - Source of truth
- `/public/robots.txt` - Static file (synced by script)
- `/components/pages/RobotsTxtPlain.tsx` - React fallback
- `/App.tsx` - Route definition (line 145)
- `/vite.config.ts` - Build configuration
- `/scripts/generate-robots.js` - Sync script

## Success Criteria
✅ Crawlers can access robots.txt content
✅ Content matches the directives we want
✅ No build errors
✅ Both static and dynamic routes work

---

**Last Updated**: October 20, 2025
**Status**: Awaiting deployment testing
