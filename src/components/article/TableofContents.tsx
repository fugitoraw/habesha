"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/UseIsmobile';

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
  const isMobile = useIsMobile();

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => document.getElementById(id));
      const visibleHeadings = headingElements.filter((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < (isMobile ? 100 : 150) && rect.bottom > 0;
      });
      
      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0]?.id || '');
      }
    };

    const scrollTimeout = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }, 100);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings, isMobile]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Different offsets for mobile/desktop
    const headerHeight = isMobile ? 60 : 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close sidebar after scroll on mobile
    if (isMobile && onHeadingClick) {
      setTimeout(() => onHeadingClick(id), 500);
    }
  };

  return (
    <div className="space-y-1">
      <p className="font-medium mb-2 text-sm md:text-base">On This Page</p>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => handleClick(heading.id)}
            className={cn(
              "flex items-center text-sm py-1.5 px-2 w-full text-left rounded-md transition-colors",
              heading.level === 1 ? "" : "pl-4",
              heading.level === 3 ? "pl-6" : "",
              heading.level === 4 ? "pl-8" : "",
              activeId === heading.id
                ? "font-medium text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-accent",
              isMobile ? "text-sm" : "text-sm md:text-[0.925rem]"
            )}
            aria-current={activeId === heading.id ? "location" : undefined}
          >
            {activeId === heading.id && (
              <ChevronRight className="mr-1 h-3 w-3 flex-shrink-0" />
            )}
            <span className={cn(
              "truncate",
              activeId === heading.id ? "" : "ml-4"
            )}>
              {heading.text}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};