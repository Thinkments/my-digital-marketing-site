import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const robotsContent = `# Robots.txt for ThinkMents - Digital Marketing & Web Design Agency
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
Sitemap: https://thinkments.com/sitemap-xml
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
Allow: /

# Note: This file is served at https://thinkments.com/robots-txt
# Search engines can discover it via the robots meta tag or direct linking`;

export default function RobotsTxtPlain() {
  useEffect(() => {
    // Remove all body styling and replace with plain text
    const originalBodyClass = document.body.className;
    const originalBodyStyle = document.body.getAttribute('style') || '';
    
    document.body.className = '';
    document.body.style.cssText = 'margin: 0; padding: 0; background: white; color: black; font-family: monospace; font-size: 12px; line-height: 1.5;';
    
    // Try to replace entire body content with plain text
    const root = document.getElementById('root');
    if (root) {
      root.style.cssText = 'margin: 0; padding: 0;';
    }
    
    return () => {
      // Restore on unmount
      document.body.className = originalBodyClass;
      document.body.style.cssText = originalBodyStyle;
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/plain; charset=utf-8" />
        <title>robots.txt</title>
      </Helmet>
      <pre style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'monospace',
        whiteSpace: 'pre',
        wordWrap: 'normal',
        fontSize: '12px',
        lineHeight: '1.5',
        color: 'black',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}>
        {robotsContent}
      </pre>
    </>
  );
}
