// scripts/generate-robots.js
const fs = require('fs');
const path = require('path');

try {
  // Define paths relative to this script file
  const sourcePath = path.join(__dirname, '..', 'robots.txt.tsx'); // Goes up one level from 'scripts' to project root
  const destinationPath = path.join(__dirname, '..', 'public', 'robots.txt'); // Goes up one level, then into 'public'

  // Ensure the destination directory exists
  const destinationDir = path.dirname(destinationPath);
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
    console.log(`Created directory: ${destinationDir}`);
  }

  // Read the content from robots.txt.tsx
  const robotsContent = fs.readFileSync(sourcePath, 'utf8');

  // Write the content to public/robots.txt, overwriting it
  fs.writeFileSync(destinationPath, robotsContent);

  console.log(`Successfully updated ${destinationPath} from ${sourcePath}`);
} catch (error) {
  console.error('Error generating robots.txt:', error);
  process.exit(1); // Exit with an error code if something goes wrong
}
