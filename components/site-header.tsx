"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Leaf, Menu, X } from "lucide-react"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our story" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-note">
        <span>A considered dining concept</span>
        <span className="header-note__dot" aria-hidden="true">·</span>
        <span>Nairobi, Kenya</span>
      </div>
      <div className="header-main container">
        <Link className="brand" href="/" aria-label="Saffron & Stone home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><Leaf size={19} strokeWidth={1.7} /></span>
          <span className="brand-wordmark">Saffron <span>&amp;</span> Stone</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button--dark button--small header-reserve" href="/reservations">
            Reserve a table <span aria-hidden="true">↗</span>
          </Link>
          <button
            aria-controls="mobile-primary-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-primary-nav"
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrent(item.href) ? "page" : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link className="button button--dark mobile-nav__reserve" href="/reservations" onClick={closeMenu}>
          Reserve a table <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  )
}
