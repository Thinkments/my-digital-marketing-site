#!/usr/bin/env node

/**
 * SEO Health Check Script
 * Validates SEO implementation and checks for common issues
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkFile(filePath, fileName) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    log(colors.green, `✅ ${fileName} exists`);
    return true;
  } else {
    log(colors.red, `❌ ${fileName} missing`);
    return false;
  }
}

function checkFileContent(filePath, fileName, requiredContent) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    let allFound = true;
    requiredContent.forEach(required => {
      if (content.includes(required)) {
        log(colors.green, `  ✅ Contains: ${required}`);
      } else {
        log(colors.red, `  ❌ Missing: ${required}`);
        allFound = false;
      }
    });
    
    return allFound;
  } else {
    log(colors.red, `❌ ${fileName} not found`);
    return false;
  }
}

function analyzeIndexHtml() {
  log(colors.blue, '\n📄 Analyzing index.html...');
  
  const requiredMeta = [
    '<meta name="description"',
    '<meta name="robots" content="index, follow"',
    '<link rel="canonical"',
    '<meta property="og:title"',
    '<meta property="og:description"',
    '<meta property="og:image"',
    '<meta name="twitter:card"',
    'application/ld+json'
  ];
  
  return checkFileContent('public/index.html', 'index.html', requiredMeta);
}

function analyzeRobotsTxt() {
  log(colors.blue, '\n🤖 Analyzing robots.txt...');
  
  const requiredDirectives = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    'Sitemap: https://thinkments.com/sitemap.xml',
    'User-agent: Googlebot'
  ];
  
  return checkFileContent('public/robots.txt', 'robots.txt', requiredDirectives);
}

function analyzeSitemap() {
  log(colors.blue, '\n🗺️ Analyzing sitemap.xml...');
  
  const requiredElements = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '<loc>https://thinkments.com/</loc>',
    '<lastmod>',
    '<changefreq>',
    '<priority>'
  ];
  
  return checkFileContent('public/sitemap.xml', 'sitemap.xml', requiredElements);
}

function checkSEOComponents() {
  log(colors.blue, '\n⚛️ Checking SEO React Components...');
  
  let allGood = true;
  
  // Check SEO component
  if (checkFile('components/SEO.tsx', 'SEO Component')) {
    const seoRequirements = [
      'interface SEOProps',
      'react-helmet-async',
      'meta name="description"',
      'meta name="robots"',
      'link rel="canonical"',
      'property="og:',
      'application/ld+json'
    ];
    
    if (!checkFileContent('components/SEO.tsx', 'SEO Component', seoRequirements)) {
      allGood = false;
    }
  } else {
    allGood = false;
  }
  
  // Check SEOPreloader component
  if (checkFile('components/SEOPreloader.tsx', 'SEOPreloader Component')) {
    const preloaderRequirements = [
      'useLocation',
      'meta name="description"',
      'meta name="robots"',
      'link rel="canonical"',
      'application/ld+json'
    ];
    
    if (!checkFileContent('components/SEOPreloader.tsx', 'SEOPreloader Component', preloaderRequirements)) {
      allGood = false;
    }
  } else {
    allGood = false;
  }
  
  return allGood;
}

function generateSEOScore(results) {
  const totalChecks = Object.keys(results).length;
  const passedChecks = Object.values(results).filter(Boolean).length;
  const score = Math.round((passedChecks / totalChecks) * 100);
  
  log(colors.bold, `\n📊 SEO SCORE: ${score}%`);
  
  if (score >= 90) {
    log(colors.green, '🎉 Excellent! Your SEO setup is ready for Google indexing.');
  } else if (score >= 70) {
    log(colors.yellow, '⚠️ Good, but there are some improvements needed.');
  } else {
    log(colors.red, '🚨 Critical issues found. SEO setup needs attention.');
  }
  
  return score;
}

function generateRecommendations(results) {
  log(colors.blue, '\n💡 RECOMMENDATIONS:');
  
  if (!results.staticFiles) {
    log(colors.yellow, '• Run "npm run seo:generate" to create missing static files');
  }
  
  if (!results.indexHtml) {
    log(colors.yellow, '• Update index.html with proper meta tags and structured data');
  }
  
  if (!results.robotsTxt) {
    log(colors.yellow, '• Fix robots.txt directives and sitemap references');
  }
  
  if (!results.sitemap) {
    log(colors.yellow, '• Generate proper XML sitemap with all pages');
  }
  
  if (!results.seoComponents) {
    log(colors.yellow, '• Ensure SEO components are properly implemented');
  }
  
  log(colors.blue, '\nFOR GOOGLE SEARCH CONSOLE:');
  log(colors.reset, '1. Submit sitemap: https://thinkments.com/sitemap.xml');
  log(colors.reset, '2. Test robots.txt: https://thinkments.com/robots.txt');
  log(colors.reset, '3. Use URL Inspection tool to test individual pages');
  log(colors.reset, '4. Monitor indexing status and crawl errors');
}

function main() {
  log(colors.bold, '🔍 ThinkMents SEO Health Check\n');
  
  const results = {
    staticFiles: true,
    indexHtml: false,
    robotsTxt: false,
    sitemap: false,
    seoComponents: false
  };
  
  // Check static files
  log(colors.blue, '📁 Checking Static SEO Files...');
  results.staticFiles = checkFile('public/robots.txt', 'robots.txt') && 
                        checkFile('public/sitemap.xml', 'sitemap.xml') && 
                        checkFile('public/index.html', 'index.html');
  
  // Analyze file contents
  results.indexHtml = analyzeIndexHtml();
  results.robotsTxt = analyzeRobotsTxt();
  results.sitemap = analyzeSitemap();
  results.seoComponents = checkSEOComponents();
  
  // Generate score and recommendations
  const score = generateSEOScore(results);
  generateRecommendations(results);
  
  // Exit with appropriate code
  process.exit(score >= 70 ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = { main };