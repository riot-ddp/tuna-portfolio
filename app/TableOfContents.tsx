"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  label: string;
  level: number;
};

export function TableOfContents({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -80% 0px" },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="toc-sidebar" aria-label="目次">
      <p className="toc-title">Contents</p>
      <ol className="toc-list">
        {items.map((item) => (
          <li data-level={item.level} key={item.id}>
            <a className={activeId === item.id ? "active" : ""} href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
