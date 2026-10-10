"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  getLocalizedPath,
  getNavigationLinks,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";

function NavigationLinks({
  pathname,
  links,
  onNavigate,
  showHome = true,
}: {
  pathname: string;
  links: ReturnType<typeof getNavigationLinks>;
  onNavigate?: () => void;
  showHome?: boolean;
}) {
  const visibleLinks = showHome ? links : links.slice(1);

  return (
    <ul className="navigation-list">
      {visibleLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={
              href.endsWith("/contact") ? "button" : "navigation-link"
            }
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

export function SiteHeader({ locale }: Readonly<{ locale: Locale }>) {
  const pathname = usePathname();
  const navigationLinks = getNavigationLinks(locale);
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
          href={getLocalizedPath(locale, "/")}
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
          className="menu-toggle button"
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            className="menu-toggle-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {isMenuOpen ? (
              <>
                <path d="M5 5 19 19" />
                <path d="M19 5 5 19" />
              </>
            ) : (
              <>
                <path d="M4 6H20" />
                <path d="M4 12H20" />
                <path d="M4 18H20" />
              </>
            )}
          </svg>
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <NavigationLinks pathname={pathname} links={navigationLinks} />
        </nav>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Main navigation"
        hidden={!isMenuOpen}
      >
        <div className="container">
          <NavigationLinks
            pathname={pathname}
            links={navigationLinks}
            onNavigate={() => setIsMenuOpen(false)}
            showHome={false}
          />
        </div>
      </nav>
    </header>
  );
}
