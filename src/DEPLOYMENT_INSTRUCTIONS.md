# 🚨 CRITICAL DEPLOYMENT INSTRUCTIONS 🚨

## Status: FRONTEND-ONLY APPLICATION

This is a **pure frontend static website** with NO backend functionality.

---

## ⛔ 403 ERROR PREVENTION

### The Problem
Figma Make attempts to deploy Supabase edge functions located in `/supabase/functions/`, which causes:
```
Error: XHR for "/api/integrations/supabase/.../edge_functions/make-server/deploy" failed with status 403
```

### The Solution
**SKIP ALL SUPABASE DEPLOYMENTS**

---

## ✅ What TO Deploy

Deploy ONLY these files:
- `/dist/` - Built static files (HTML, CSS, JS)
- `/public/` - Static assets
- Frontend React application

---

## ❌ What NOT to Deploy

**DO NOT DEPLOY:**
- `/supabase/` - Protected backend files (cause 403 errors)
- `/supabase/functions/` - Edge functions (forbidden)
- `/utils/supabase/` - Legacy Supabase utilities
- Any server-side code
- Any edge functions
- Any backend endpoints

---

## 📋 Deployment Configuration Files

Multiple configuration files have been created to prevent Supabase deployment:

1. **`.supabaseignore`** - Ignores Supabase directories
2. **`.figmamakeignore`** - Figma Make specific ignore rules
3. **`.deployignore`** - General deployment ignore patterns
4. **`.figmaignore`** - Alternative Figma ignore syntax
5. **`.figmamake.ignore`** - Comprehensive Figma Make ignore file
6. **`figma-make.config.json`** - Deployment configuration with `skipSupabase: true`
7. **`figma-make.deployment.json`** - Detailed deployment settings
8. **`deployment.config.json`** - Standard deployment config
9. **`SKIP_SUPABASE_DEPLOYMENT`** - Marker file

---

## 🔧 Build Command

```bash
npm run build
```

This command:
1. Generates robots.txt
2. Copies static files
3. Compiles TypeScript
4. Builds the Vite application

Output directory: **`/dist/`**

---

## 🆘 If 403 Error Persists

The 403 error is caused by **infrastructure-level Supabase integration** that cannot be removed by users.

### Options:

1. **Contact Figma Make Support**
   - Request disconnection of Supabase integration
   - Provide project ID: `TSI4MmHw4TcJVL6Ji2FvTs`

2. **Deploy to Alternative Platform**
   - Vercel
   - Netlify
   - GitHub Pages
   - Cloudflare Pages

3. **Manual Workaround**
   - Export the `/dist/` folder after running `npm run build`
   - Upload to any static hosting provider

---

## 📁 File Structure

```
/dist/           ← DEPLOY THIS (after build)
/src/            ← Source code (do not deploy)
/supabase/       ← NEVER DEPLOY (causes 403)
/public/         ← Static assets (included in build)
```

---

## ✨ Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Verify `/dist/` folder exists
- [ ] Deploy ONLY the `/dist/` folder
- [ ] Confirm Supabase integration is disabled
- [ ] Verify NO edge functions are deployed
- [ ] Check website loads correctly after deployment

---

## 📞 Support

If deployment continues to fail with 403 errors, this indicates the Supabase integration is still active at the infrastructure level and requires Figma Make support to disconnect.

**The website code is fully functional** - the issue is purely with the deployment configuration at the platform level.
