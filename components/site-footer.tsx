import Link from "next/link"
import { ArrowUpRight, Leaf } from "lucide-react"
import { openingHours, restaurant } from "@/lib/restaurant-data"

const footerLinks = [
  { href: "/menu", label: "Explore the menu" },
  { href: "/about", label: "Our story" },
  { href: "/reservations", label: "Reserve a table" },
  { href: "/contact", label: "Contact & location" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand--footer" href="/" aria-label="Saffron & Stone home">
            <span className="brand-mark" aria-hidden="true"><Leaf size={19} strokeWidth={1.7} /></span>
            <span className="brand-wordmark">Saffron <span>&amp;</span> Stone</span>
          </Link>
          <p>Thoughtful plates, warm light and a little more time around the table.</p>
          <span className="footer-location">A fictional dining concept · {restaurant.location}</span>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>Find us</h2>
          <p>{restaurant.address}<br /><span>Fictional sample address</span></p>
          <p>{restaurant.email}<br /><span>Demo email only</span></p>
          <Link className="footer-text-link" href="/contact">More contact details <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>

        <div className="footer-column footer-hours">
          <h2>Hours</h2>
          <ul>
            {openingHours.map((item) => (
              <li key={item.day}><span>{item.day.slice(0, 3)}</span><span>{item.hours}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Saffron &amp; Stone. Portfolio concept — not a real restaurant.</p>
        <Link href="/menu">Illustrative menu &amp; pricing</Link>
      </div>
    </footer>
  )
}
