import React, { useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle, Lightbulb, AlertTriangle, BookOpen, Target, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;

    // Add icons to H2 headings
    const h2Elements = container.querySelectorAll('h2');
    h2Elements.forEach((h2, index) => {
      const text = h2.textContent?.toLowerCase() || '';
      let icon = '';
      
      // Match icons to content
      if (text.includes('what is') || text.includes('definition')) {
        icon = '📖';
      } else if (text.includes('why') || text.includes('matters')) {
        icon = '💡';
      } else if (text.includes('prevent') || text.includes('strategy')) {
        icon = '🛡️';
      } else if (text.includes('identify') || text.includes('recognize')) {
        icon = '🔍';
      } else if (text.includes('response') || text.includes('plan')) {
        icon = '⚡';
      } else if (text.includes('communication') || text.includes('best practice')) {
        icon = '💬';
      } else if (text.includes('example') || text.includes('case study')) {
        icon = '📊';
      } else if (text.includes('recovery') || text.includes('rebuild')) {
        icon = '🔧';
      } else if (text.includes('faq') || text.includes('question')) {
        icon = '❓';
      } else if (text.includes('tool') || text.includes('resource')) {
        icon = '🛠️';
      } else {
        icon = '🎯';
      }

      // Wrap h2 in a container with gradient background
      const wrapper = document.createElement('div');
      wrapper.className = 'my-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border-l-4 border-primary';
      
      const iconSpan = document.createElement('span');
      iconSpan.className = 'text-3xl mr-3 inline-block';
      iconSpan.textContent = icon;
      
      const newH2 = document.createElement('h2');
      newH2.className = 'text-2xl md:text-3xl inline-block m-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent';
      newH2.textContent = h2.textContent;
      
      h2.parentNode?.replaceChild(wrapper, h2);
      wrapper.appendChild(iconSpan);
      wrapper.appendChild(newH2);
    });

    // Style H3 headings
    const h3Elements = container.querySelectorAll('h3');
    h3Elements.forEach((h3) => {
      h3.className = 'text-xl md:text-2xl mt-6 mb-4 flex items-center gap-2';
      
      const bullet = document.createElement('span');
      bullet.className = 'w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full';
      h3.insertBefore(bullet, h3.firstChild);
    });

    // Enhance paragraphs
    const paragraphs = container.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.className = 'text-lg leading-relaxed text-muted-foreground my-4';
      
      // Check if paragraph contains strong emphasis - make it a callout
      if (p.querySelector('strong') && p.textContent && p.textContent.length < 200) {
        p.className = 'text-lg leading-relaxed my-4 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg';
      }
    });

    // Style lists with better spacing and icons
    const ulElements = container.querySelectorAll('ul');
    ulElements.forEach((ul) => {
      ul.className = 'space-y-3 my-6';
      
      const listItems = ul.querySelectorAll('li');
      listItems.forEach((li) => {
        li.className = 'flex items-start gap-3 text-muted-foreground';
        
        // Add checkmark icon
        const icon = document.createElement('span');
        icon.className = 'mt-1 text-primary flex-shrink-0';
        icon.innerHTML = '✓';
        
        // Wrap text content
        const textContent = li.innerHTML;
        li.innerHTML = '';
        li.appendChild(icon);
        
        const textSpan = document.createElement('span');
        textSpan.innerHTML = textContent;
        textSpan.className = 'flex-1';
        li.appendChild(textSpan);
      });
    });

    // Style ordered lists
    const olElements = container.querySelectorAll('ol');
    olElements.forEach((ol) => {
      ol.className = 'space-y-3 my-6 list-none counter-reset-list';
      
      const listItems = ol.querySelectorAll('li');
      listItems.forEach((li, index) => {
        li.className = 'flex items-start gap-3 text-muted-foreground';
        
        // Add number badge
        const badge = document.createElement('span');
        badge.className = 'mt-0.5 w-6 h-6 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center text-sm flex-shrink-0';
        badge.textContent = (index + 1).toString();
        
        const textContent = li.innerHTML;
        li.innerHTML = '';
        li.appendChild(badge);
        
        const textSpan = document.createElement('span');
        textSpan.innerHTML = textContent;
        textSpan.className = 'flex-1';
        li.appendChild(textSpan);
      });
    });

    // Style links
    const links = container.querySelectorAll('a');
    links.forEach((link) => {
      link.className = 'text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-colors';
    });

    // Add visual boxes for framework sections (ACE, 3R, etc.)
    const strongElements = container.querySelectorAll('p strong');
    strongElements.forEach((strong) => {
      const text = strong.textContent || '';
      
      // Check if it's a framework indicator (starts with a letter followed by " - ")
      if (/^[A-Z]\s*-\s/.test(text)) {
        const p = strong.closest('p');
        if (p) {
          p.className = 'text-lg my-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-l-4 border-blue-500 rounded-r-lg shadow-sm';
        }
      }
      
      // Check if it's a severity level
      if (text.includes('Level') && text.includes('-')) {
        const p = strong.closest('p');
        if (p) {
          if (text.includes('Level 1')) {
            p.className = 'text-lg my-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm';
          } else if (text.includes('Level 2')) {
            p.className = 'text-lg my-4 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-l-4 border-yellow-500 rounded-r-lg shadow-sm';
          } else if (text.includes('Level 3')) {
            p.className = 'text-lg my-4 p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-l-4 border-red-500 rounded-r-lg shadow-sm';
          }
        }
      }
      
      // Style "What Happened", "Success", "Mistake", "Lesson" as colored labels
      if (['What Happened:', 'Success:', 'Mistake:', 'Lesson:'].some(label => text.includes(label))) {
        strong.className = 'inline-block px-3 py-1 rounded-full text-sm mr-2';
        
        if (text.includes('What Happened:')) {
          strong.className += ' bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
        } else if (text.includes('Success:')) {
          strong.className += ' bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
        } else if (text.includes('Mistake:')) {
          strong.className += ' bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-300';
        } else if (text.includes('Lesson:')) {
          strong.className += ' bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
        }
      }
    });

    // Style FAQ sections specially
    const allH3s = container.querySelectorAll('h3');
    allH3s.forEach((h3) => {
      const text = h3.textContent || '';
      
      // If it's a question (ends with ?)
      if (text.endsWith('?')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'my-6 p-5 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30 shadow-sm';
        
        h3.parentNode?.replaceChild(wrapper, h3);
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'flex items-start gap-3 mb-3';
        
        const qIcon = document.createElement('span');
        qIcon.className = 'text-2xl text-indigo-500';
        qIcon.textContent = 'Q';
        
        const qText = document.createElement('h3');
        qText.className = 'text-xl text-foreground m-0';
        qText.textContent = text;
        
        questionDiv.appendChild(qIcon);
        questionDiv.appendChild(qText);
        wrapper.appendChild(questionDiv);
        
        // Find the next paragraph (the answer) and style it
        let nextElement = wrapper.nextElementSibling;
        if (nextElement && nextElement.tagName === 'P') {
          const answerDiv = document.createElement('div');
          answerDiv.className = 'flex items-start gap-3 pl-2';
          
          const aIcon = document.createElement('span');
          aIcon.className = 'text-xl text-purple-500 font-bold';
          aIcon.textContent = 'A';
          
          const aText = document.createElement('div');
          aText.className = 'flex-1 text-muted-foreground';
          aText.innerHTML = nextElement.innerHTML;
          
          answerDiv.appendChild(aIcon);
          answerDiv.appendChild(aText);
          
          wrapper.appendChild(answerDiv);
          nextElement.remove();
        }
      }
    });

    // Add visual separator before "Related Resources"
    const allParagraphs = container.querySelectorAll('p');
    allParagraphs.forEach((p) => {
      if (p.querySelector('strong') && p.textContent?.includes('Related Resources:')) {
        const separator = document.createElement('div');
        separator.className = 'my-12 border-t-2 border-dashed border-muted';
        p.parentNode?.insertBefore(separator, p);
        
        p.className = 'text-xl my-6 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl';
      }
    });

    // Style final CTA sections
    const h2Wrappers = container.querySelectorAll('div');
    h2Wrappers.forEach((wrapper) => {
      const h2 = wrapper.querySelector('h2');
      if (h2 && h2.textContent?.includes('Need Expert')) {
        wrapper.className = 'my-12 p-8 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl border-2 border-primary/30 shadow-xl';
      }
    });

  }, [content]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}