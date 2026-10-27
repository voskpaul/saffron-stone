import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { OpeningHoursList } from "@/components/location-details"
import { WhatsAppCta } from "@/components/whatsapp-cta"
import { restaurant } from "@/lib/restaurant-data"

export function HomeEvents() {
  return (
    <section className="events-section">
      <div className="container events-grid">
        <div className="events-copy">
          <p className="eyebrow eyebrow--light"><CalendarDays size={15} aria-hidden="true" /> A little room for more</p>
          <h2>Make room for<br /><em>something special.</em></h2>
          <p>Birthdays, long-table dinners, family gatherings and small catering moments deserve a setting that feels like yours.</p>
          <Link className="button button--light" href="/contact?type=Private%20dining#contact-form">Discuss your event <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <span className="events-copy__note">A demo enquiry form — no event booking is made online.</span>
        </div>
        <div className="events-image-wrap">
          <Image
            alt="An intimate shared table with African-inspired dishes, candlelight and linen"
            className="events-image"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
            src="/images/saffron-feast.png"
          />
          <div className="events-image-caption"><span>For the tables that bring everyone together</span><span>02 / 04</span></div>
        </div>
      </div>
    </section>
  )
}

export function HomeLocation() {
  return (
    <section className="section section--paper location-preview">
      <div className="container location-preview__grid">
        <div className="location-preview__intro">
          <p className="eyebrow">Drop by, stay awhile</p>
          <h2>Find your way<br /><em>to the table.</em></h2>
          <p>A fictional sample address in Westlands, Nairobi. Use the details below as a guide to how a restaurant site can make the essentials easy to find.</p>
          <div className="sample-address"><span className="sample-address__label">Sample address</span><strong>{restaurant.address}</strong><span>Illustrative location only</span></div>
          <Link className="text-link" href="/contact">Location &amp; contact details <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="hours-panel">
          <div className="hours-panel__top"><span className="eyebrow">The doors are open</span><span className="hours-panel__badge">Sample hours</span></div>
          <OpeningHoursList />
          <div className="hours-panel__footer">
            <span>Planning ahead?</span>
            <Link className="text-link" href="/reservations">Find a table <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <WhatsAppCta className="whatsapp-demo-note--inline" />
        </div>
      </div>
    </section>
  )
}
