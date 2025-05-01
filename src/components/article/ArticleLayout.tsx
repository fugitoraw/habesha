"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TableOfContents } from './TableofContents';
import { useIsMobile } from '@/hooks/UseIsmobile';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface ArticleLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const ArticleLayout = ({ title, children }: ArticleLayoutProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const extractHeadings = (): Heading[] => {
      const articleElement = document.getElementById('article-content');
      if (!articleElement) return [];

      const headingElements = Array.from(articleElement.querySelectorAll('h1, h2, h3, h4'));
      const extractedHeadings: Heading[] = [];

      headingElements.forEach((el, index) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) el.id = id;

        extractedHeadings.push({
          id,
          text: el.textContent || '',
          level: parseInt(el.tagName.charAt(1), 10),
        });
      });

      return extractedHeadings;
    };

    // Initial extraction
    setHeadings(extractHeadings());

    const observer = new MutationObserver(() => {
      setHeadings(extractHeadings());
    });

    const articleElement = document.getElementById('article-content');
    if (articleElement) {
      observer.observe(articleElement, {
        childList: true,
        subtree: true
      });
    }

    return () => observer.disconnect();
  }, [children]);

  // Auto-close sidebar when switching to desktop
  useEffect(() => {
    if (isMobile === false && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Header - Only shows on mobile */}
      {isMobile && (
        <div className="py-3 px-4 flex items-center border-b sticky top-0 z-30 bg-background">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-lg font-semibold ml-3 truncate">{title}</h1>
        </div>
      )}

      {/* Sidebar - Responsive behavior */}
      <aside
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          fixed md:sticky top-0 left-0 z-40 md:z-0 h-screen w-3/4 md:w-72
          bg-background border-r shadow-lg md:shadow-none
          ${isMobile === undefined ? 'invisible' : ''} // Prevent flash on initial load
        `}
      >
        <div className="h-full overflow-auto p-6 pt-8">
          {!isMobile && (
            <div className="mb-8">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
          )}

          {headings.length > 0 && (
            <TableOfContents
              headings={headings}
              onHeadingClick={() => isMobile && setIsSidebarOpen(false)}
            />
          )}
        </div>
      </aside>

      {/* Backdrop - Only for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl py-12 md:py-16 transition-all duration-200">
        <article
          id="article-content"
          className="prose prose-slate max-w-none scroll-mt-16 md:scroll-mt-20"
        >
          {children}
        </article>
      </main>
    </div>
  );
};