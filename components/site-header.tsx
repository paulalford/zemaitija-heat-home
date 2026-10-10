"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";

type HeaderContent = Readonly<{
  brand: Readonly<{
    primary: string;
    secondary: string;
  }>;
  mobileNavigation: Readonly<{
    open: string;
    close: string;
  }>;
  accessibility: Readonly<{
    homeLinkLabel: string;
    openMainMenu: string;
    closeMainMenu: string;
    mainNavigation: string;
  }>;
}>;

type NavigationLink = Readonly<{
  href: string;
  label: string;
}>;

function NavigationLinks({
  pathname,
  links,
  onNavigate,
  showHome = true,
}: {
  pathname: string;
  links: readonly NavigationLink[];
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

export function SiteHeader({
  content,
  homeHref,
  navigationLinks,
}: Readonly<{
  content: HeaderContent;
  homeHref: string;
  navigationLinks: readonly NavigationLink[];
}>) {
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
          href={homeHref}
          className="wordmark"
          aria-label={content.accessibility.homeLinkLabel}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="wordmark-name">{content.brand.primary}</span>
          <span className="wordmark-description">
            {content.brand.secondary}
          </span>
        </Link>

        <button
          ref={menuButton}
          type="button"
          className="menu-toggle button"
          aria-label={
            isMenuOpen
              ? content.accessibility.closeMainMenu
              : content.accessibility.openMainMenu
          }
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
          <span>
            {isMenuOpen
              ? content.mobileNavigation.close
              : content.mobileNavigation.open}
          </span>
        </button>

        <nav
          className="desktop-navigation"
          aria-label={content.accessibility.mainNavigation}
        >
          <NavigationLinks pathname={pathname} links={navigationLinks} />
        </nav>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label={content.accessibility.mainNavigation}
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
