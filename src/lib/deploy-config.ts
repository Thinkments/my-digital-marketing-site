// Deployment configuration for ThinkMents
// THIS IS A PURE FRONTEND APPLICATION - NO BACKEND SERVICES
export const deployConfig = {
  // Skip edge function deployment - this is a frontend-only app
  skipEdgeFunctions: true,
  useSupabase: false,
  frontendOnly: true,
  
  // Main application deployment settings
  buildCommand: "npm run build",
  publishDirectory: "dist",
  
  // No required environment variables (fully frontend)
  requiredEnvVars: [],
  
  // Redirect rules
  redirects: [
    { from: "/home", to: "/", status: 301 },
    { from: "/preview_page.html", to: "/", status: 301 },
    { from: "/contact-us", to: "/contact", status: 301 },
    { from: "/generative-ai-image-testing", to: "/", status: 301 }
  ]
};

export default deployConfig;