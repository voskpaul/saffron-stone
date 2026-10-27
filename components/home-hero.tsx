import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container home-hero__grid">
        <div className="home-hero__copy">
          <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> Contemporary dining in Nairobi</p>
          <h1>Good food.<br />Great company.<br /><em>Unforgettable moments.</em></h1>
          <p className="home-hero__description">
            Discover thoughtfully prepared dishes, vibrant flavours and a warm dining experience made for sharing.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--dark" href="/menu">Explore our menu <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <Link className="button button--outline" href="/reservations">Reserve a table</Link>
          </div>
          <div className="home-hero__location"><MapPin size={15} aria-hidden="true" /><span>Nairobi, Kenya</span><span className="location-divider" aria-hidden="true">/</span><span>A fictional dining concept</span></div>
        </div>
        <figure className="home-hero__photo">
          <Image
            alt="A warmly lit table with grilled chicken, pilau rice, fresh vegetables and sauce"
            className="home-hero__image"
            fill
                preload

            sizes="(max-width: 760px) 100vw, 58vw"
            src="/images/saffron-hero.png"
          />
          <figcaption className="hero-photo-caption">
            <span>Food for the middle of the table</span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </figcaption>
          <div className="hero-photo-index" aria-hidden="true"><span>01</span><span className="hero-photo-index__line" /><span>04</span></div>
        </figure>
      </div>
      <div className="home-hero__bottom container">
        <span>Good things take a little time.</span>
        <Link href="#the-table">Scroll to discover <ArrowDownRight size={14} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
