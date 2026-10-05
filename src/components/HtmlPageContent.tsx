import { useEffect, useRef } from 'react';

type HtmlPageContentProps = {
  html: string;
  setup?: (root: HTMLElement) => void | (() => void);
};

export function HtmlPageContent({ html, setup }: HtmlPageContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || !setup) return;
    return setup(root);
  }, [html, setup]);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
