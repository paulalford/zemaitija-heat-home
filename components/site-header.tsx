"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";
import { navigationLinks, site } from "@/lib/site";

function NavigationLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="navigation-list">
      {navigationLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={href === "/contact" ? "button" : "navigation-link"}
            aria-current={pathname === href ? "page" : undefined}
            onClick={onNavigate}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function closeOnEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isMenuOpen) {
      event.preventDefault();
      setIsMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label={`${site.name} — home`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="wordmark-name">Žemaitija</span>
          <span className="wordmark-description">Heat &amp; Home</span>
        </Link>

        <button
          ref={menuButton}
          type="button"
          className="menu-toggle button button-secondary"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Close menu" : "Menu"}
        </button>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <NavigationLinks pathname={pathname} />
        </nav>

        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Main navigation"
          hidden={!isMenuOpen}
        >
          <NavigationLinks
            pathname={pathname}
            onNavigate={() => setIsMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
}
