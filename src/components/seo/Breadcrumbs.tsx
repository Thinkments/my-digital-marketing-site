import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb Navigation with Schema Markup
 * Automatically generates breadcrumbs based on current URL path
 * Includes BreadcrumbList structured data for SEO
 */
export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  // Helper function to convert URL slug to readable title
  const formatTitle = (slug: string): string => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Build breadcrumb items
  const breadcrumbItems = [
    {
      position: 1,
      name: 'Home',
      path: '/'
    },
    ...pathnames.map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        position: index + 2,
        name: formatTitle(value),
        path
      };
    })
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": `https://thinkments.com${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="bg-accent/5 py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                )}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-foreground" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};
