import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HomeStory() {
  return (
    <section className="section section--paper">
      <div className="container story-grid">
        <div className="story-grid__photo-wrap">
          <div className="story-photo-frame">
            <Image
              alt="Warm, softly lit restaurant interior with timber tables and woven pendant lights"
              className="story-photo"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/saffron-interior.png"
            />
          </div>
          <span className="photo-note">A room made for lingering</span>
          <span className="story-index" aria-hidden="true">S&amp;S / 01</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">More than a meal</p>
          <h2>Rooted in flavour.<br /><em>Made for connection.</em></h2>
          <p className="story-copy__lead">A good table has a way of bringing people closer.</p>
          <p>Saffron &amp; Stone is an imagined Nairobi dining room shaped around generous plates, thoughtful details and an easy welcome. Our point of view is simple: make room for another story, another serving and a little more time together.</p>
          <Link className="button button--outline" href="/about">Get to know us <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <div className="story-signoff"><span className="story-signoff__rule" /><span>Good food, shared slowly.</span></div>
        </div>
      </div>
    </section>
  )
}
