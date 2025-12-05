import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';
import { generateBreadcrumbSchema, injectSchema, getCanonicalUrl } from '../utils/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include Home as first item
  const allItems = [
    { name: 'Home', url: '/' },
    ...items
  ];
  
  useEffect(() => {
    // Inject breadcrumb schema
    const breadcrumbsWithFullUrls = allItems.map(item => ({
      name: item.name,
      url: getCanonicalUrl(item.url)
    }));
    
    const schema = generateBreadcrumbSchema(breadcrumbsWithFullUrls);
    const cleanup = injectSchema(schema);
    
    return cleanup;
  }, [items]);
  
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0;
          
          return (
            <li 
              key={item.url} 
              className="flex items-center space-x-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              )}
              
              {isLast ? (
                <span 
                  className="text-foreground" 
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.url} 
                  className="hover:text-foreground transition-colors"
                  itemProp="item"
                >
                  {isHome ? (
                    <Home className="w-4 h-4" aria-label={item.name} />
                  ) : (
                    <span itemProp="name">{item.name}</span>
                  )}
                </Link>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
