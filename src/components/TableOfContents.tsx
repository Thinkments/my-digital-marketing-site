import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse content to extract H2 and H3 headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const h2Elements = doc.querySelectorAll('h2');
    const h3Elements = doc.querySelectorAll('h3');
    
    const allHeadings: TOCItem[] = [];
    
    h2Elements.forEach((h2, index) => {
      const text = h2.textContent || '';
      const id = `heading-h2-${index}`;
      allHeadings.push({ id, text, level: 2 });
    });
    
    h3Elements.forEach((h3, index) => {
      const text = h3.textContent || '';
      const id = `heading-h3-${index}`;
      allHeadings.push({ id, text, level: 3 });
    });

    setHeadings(allHeadings.slice(0, 12)); // Limit to first 12 headings

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    // Observe all headings
    const headingElements = document.querySelectorAll('h2, h3');
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [content]);

  if (headings.length === 0) return null;

  const scrollToHeading = (text: string) => {
    const allHeadings = document.querySelectorAll('h2, h3');
    allHeadings.forEach((heading) => {
      if (heading.textContent === text) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="sticky top-24 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => scrollToHeading(heading.text)}
            className={`
              w-full text-left text-sm py-2 px-3 rounded-lg transition-all
              flex items-start gap-2 group
              ${heading.level === 3 ? 'pl-6' : ''}
              ${activeId === heading.id 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }
            `}
          >
            <ChevronRight className={`
              w-4 h-4 flex-shrink-0 mt-0.5 transition-transform
              ${activeId === heading.id ? 'text-primary' : 'text-muted-foreground group-hover:translate-x-1'}
            `} />
            <span className="flex-1 leading-snug">{heading.text}</span>
          </motion.button>
        ))}
      </nav>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-muted">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Quick Links</p>
        <div className="space-y-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full text-left text-sm text-primary hover:text-primary/80 transition-colors"
          >
            ↑ Back to Top
          </button>
          <button
            onClick={() => {
              const shareSection = document.querySelector('[class*="Share"]');
              if (shareSection) {
                shareSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full text-left text-sm text-primary hover:text-primary/80 transition-colors"
          >
            → Share Article
          </button>
        </div>
      </div>
    </motion.div>
  );
}
