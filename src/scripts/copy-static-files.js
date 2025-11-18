// scripts/copy-static-files.js
// This script ensures static SEO files are properly copied during build
const fs = require('fs');
const path = require('path');

function copyStaticFiles() {
  try {
    // Define paths
    const publicDir = path.join(__dirname, '..', 'public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log(`Created directory: ${publicDir}`);
    }

    // Files to ensure exist in public directory
    const staticFiles = [
      { name: 'robots.txt', required: true },
      { name: 'sitemap.xml', required: false },
      { name: 'llm.txt', required: false },
      { name: '.htaccess', required: false },
      { name: 'netlify.toml', required: false },
      { name: 'vercel.json', required: false }
    ];

    console.log('\n🔍 Checking static files in public directory...\n');

    // Check each file
    let hasErrors = false;
    staticFiles.forEach(file => {
      const filePath = path.join(publicDir, file.name);
      
      // Check if it's a file (not a directory)
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          console.log(`✅ ${file.name} exists (${stats.size} bytes)`);
        } else if (stats.isDirectory()) {
          console.error(`❌ ERROR: ${file.name} is a directory, should be a file!`);
          hasErrors = true;
        }
      } else if (file.required) {
        console.warn(`⚠️  WARNING: Required file ${file.name} not found in public/`);
        hasErrors = true;
      } else {
        console.log(`ℹ️  Optional file ${file.name} not found in public/`);
      }
    });

    // Check for robots.txt content
    const robotsPath = path.join(publicDir, 'robots.txt');
    if (fs.existsSync(robotsPath) && fs.statSync(robotsPath).isFile()) {
      const content = fs.readFileSync(robotsPath, 'utf-8');
      const lines = content.split('\n').filter(line => line.trim()).length;
      console.log(`\n📄 robots.txt has ${lines} non-empty lines`);
      
      // Validate robots.txt format
      if (!content.includes('User-agent:')) {
        console.error('❌ ERROR: robots.txt missing User-agent directive');
        hasErrors = true;
      }
      if (!content.includes('Sitemap:')) {
        console.warn('⚠️  WARNING: robots.txt missing Sitemap directive');
      }
    }

    if (hasErrors) {
      console.log('\n❌ Static files check completed with errors');
      process.exit(1);
    } else {
      console.log('\n✅ Static files check complete - all good!');
    }
  } catch (error) {
    console.error('Error checking static files:', error);
    process.exit(1);
  }
}

// Run the script
copyStaticFiles();
