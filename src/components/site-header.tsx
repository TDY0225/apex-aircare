"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { BrandMark, Icon } from "@/components/icon";

export function SiteHeader({ whatsappHref }: { whatsappHref: string | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleMobileNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMenu();

    if (event.detail !== 0 || !href.startsWith("#")) return;

    const targetId = href.slice(1);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const section = document.getElementById(targetId);
        const heading = section?.querySelector<HTMLElement>("h1, h2, h3");
        heading?.focus({ preventScroll: true });
      });
    });
  };

  return (
    <>
      <div className="demo-ribbon">
        <span>PORTFOLIO CONCEPT</span>
        <span>A fictional service brand — no real enquiries are received</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-lockup" href="#home" onClick={closeMenu} aria-label="Apex AirCare home">
            <BrandMark className="brand-mark" />
            <span>Apex AirCare</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            {whatsappHref ? (
              <a className="button button-whatsapp button-header-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                <Icon name="message" /> <span>WhatsApp</span>
              </a>
            ) : null}
            <Link className="button button-primary header-quote" href="#quote">
              Request a Quote <Icon name="arrow" />
            </Link>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="mobile-menu-trigger"
              onClick={() => setMenuOpen((open) => !open)}
              ref={triggerRef}
              type="button"
            >
              <Icon name={menuOpen ? "x" : "menu"} />
            </button>
          </div>
        </div>
        <nav
          aria-label="Mobile navigation"
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => handleMobileNavigation(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
          {whatsappHref ? (
            <a className="mobile-whatsapp" href={whatsappHref} onClick={closeMenu} target="_blank" rel="noreferrer">
              WhatsApp <Icon name="arrow" />
            </a>
          ) : null}
          <Link
            className="mobile-nav-cta"
            href="#quote"
            onClick={(event) => handleMobileNavigation(event, "#quote")}
          >
            Request a Quote <Icon name="arrow" />
          </Link>
        </nav>
      </header>
    </>
  );
}
