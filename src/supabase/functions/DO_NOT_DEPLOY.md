# DO NOT DEPLOY THESE FUNCTIONS

⚠️ **IMPORTANT**: This directory should NOT be deployed.

## Why This Directory Exists

This directory contains legacy Supabase edge function files that are no longer used. 
ThinkMents website is a **frontend-only application** with no backend functionality.

## What To Do

- **DO NOT** deploy these edge functions
- **DO NOT** try to connect to Supabase
- **IGNORE** this entire directory during deployment

## For Figma Make

If you're seeing deployment errors related to these files, the Supabase integration 
needs to be disconnected at the infrastructure level. These are protected files that 
cannot be deleted by the user.

## Solution

The proper fix is to:
1. Disconnect the Supabase integration in Figma Make settings
2. Or deploy to an alternative platform (Vercel, Netlify, etc.)
3. Or contact Figma Make support to remove the Supabase connection

## Files In This Directory

All files in `supabase/functions/` are deprecated and non-functional:
- `server/index.tsx` - Empty export
- `server/kv_store.tsx` - Empty export

These files exist only because they are protected by Figma Make infrastructure 
and cannot be deleted by users.
