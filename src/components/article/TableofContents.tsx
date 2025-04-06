"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface TableOfContentsProps {
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
  onHeadingClick?: (id: string) => void;
}

export const TableOfContents = ({ headings, onHeadingClick }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => document.getElementById(id));
      const visibleHeadings = headingElements.filter((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < 150 && rect.bottom > 0;
      });
      
      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0]?.id || '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Calculate scroll position accounting for fixed header
    const headerHeight = 80; // Adjust based on your actual header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile sidebar after scroll completes
    setTimeout(() => {
      if (window.innerWidth < 768 && onHeadingClick) {
        onHeadingClick(id);
      }
    }, 800);
  };

  return (
    <div className="space-y-1">
      <p className="font-medium mb-2">On This Page</p>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => handleClick(heading.id)}
            className={cn(
              "flex items-center text-sm py-1 px-2 w-full text-left rounded-md transition-colors",
              heading.level === 1 ? "" : "pl-4",
              heading.level === 3 ? "pl-6" : "",
              activeId === heading.id
                ? "font-medium text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {activeId === heading.id && (
              <ChevronRight className="mr-1 h-3 w-3" />
            )}
            <span className={activeId === heading.id ? "" : "ml-4"}>
              {heading.text}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};