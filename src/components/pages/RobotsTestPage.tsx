// Simple diagnostic page to test if React Router is working
export default function RobotsTestPage() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'monospace',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1>🔍 Robots.txt Diagnostic Page</h1>
      <p><strong>Status:</strong> ✅ React Router is working!</p>
      <p>If you can see this page, React Router successfully matched the /robots.txt route.</p>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h2>Robots.txt Content:</h2>
      <pre style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        border: '1px solid #ccc',
        overflow: 'auto',
        fontSize: '12px',
        lineHeight: '1.5'
      }}>
{`# Robots.txt for ThinkMents - Digital Marketing & Web Design Agency
# Website: https://thinkments.com

# Allow all web crawlers to access the site
User-agent: *
Allow: /

# Block admin interface and sensitive areas
Disallow: /admin
Disallow: /admin/

# Block any potential API endpoints
Disallow: /api/
Disallow: /utils/

# Allow access to important files and directories
Allow: /sitemap.xml
Allow: /sitemap
Allow: /llm.txt
Allow: /.well-known/
Allow: /components/
Allow: /styles/

# Allow all service pages
Allow: /services
Allow: /services/
Allow: /web-design
Allow: /virtual-tours
Allow: /digital-marketing
Allow: /videography
Allow: /strategic-seo
Allow: /artificial-intelligence-optimization
Allow: /digital-marketing-areas

# Allow location-specific marketing pages
Allow: /digital-marketing-*

# Allow content and engagement pages
Allow: /about
Allow: /our-story
Allow: /case-studies
Allow: /blog
Allow: /blog/
Allow: /store
Allow: /store/

# Allow contact and conversion pages
Allow: /contact
Allow: /get-a-quote

# Allow legal pages
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /design-transfer-agreement

# Sitemap locations
Sitemap: https://thinkments.com/sitemap.xml
Sitemap: https://thinkments.com/sitemap

# Crawl delay (set to 1 second to be respectful)
Crawl-delay: 1

# Specific instructions for major search engines
User-agent: Googlebot
Allow: /
Disallow: /admin
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Disallow: /admin
Crawl-delay: 1

# Allow social media bots for better sharing
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Manage SEO tool crawlers
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MozBot
Crawl-delay: 5

# Allow image indexing for portfolio content
User-agent: Googlebot-Image
Allow: /

# Allow video indexing for videography services
User-agent: Googlebot-Video
Allow: /`}
      </pre>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h2>Diagnostic Information:</h2>
      <ul>
        <li><strong>Current URL:</strong> {window.location.href}</li>
        <li><strong>Pathname:</strong> {window.location.pathname}</li>
        <li><strong>Component:</strong> RobotsTestPage</li>
        <li><strong>Time:</strong> {new Date().toLocaleString()}</li>
      </ul>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h2>Next Steps:</h2>
      <ol>
        <li>If you see this page, the issue is with the RobotsTxtPlain component rendering</li>
        <li>If you see a 404, the issue is with React Router or the app not loading</li>
        <li>Check browser console for any JavaScript errors</li>
        <li>Try accessing <a href="/robots">/robots</a> (the fancy UI version)</li>
      </ol>
    </div>
  );
}
