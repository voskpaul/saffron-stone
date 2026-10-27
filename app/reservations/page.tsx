import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock3, UsersRound } from "lucide-react"
import { PageIntro } from "@/components/page-intro"
import { OpeningHoursList } from "@/components/location-details"
import { ReservationForm } from "@/components/reservation-form"
import { WhatsAppCta } from "@/components/whatsapp-cta"

export const metadata: Metadata = {
  title: "Reservations",
  description: "Explore the sample reservation journey for Saffron & Stone. This portfolio demo validates form details locally and does not create a booking.",
}

export default function ReservationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Save a seat"
        title="Your table is waiting."
        description="Tell us what you have in mind and preview the reservation journey. This demo does not send or confirm a booking."
      />
      <section className="section section--paper reservation-page">
        <div className="container reservation-layout">
          <aside className="reservation-aside">
            <div className="reservation-aside__image">
              <Image alt="A warmly lit table prepared for a relaxed meal" fill loading="eager" sizes="(max-width: 760px) 100vw, 35vw" src="/images/saffron-feast.png" />
              <span>Good things happen around the table.</span>
            </div>
            <div className="reservation-aside__details">
              <div className="reservation-aside__detail-heading"><Clock3 size={18} aria-hidden="true" /><h2>Sample opening hours</h2></div>
              <OpeningHoursList compact />
            </div>
            <div className="reservation-group-note">
              <div><UsersRound size={19} aria-hidden="true" /><h2>Planning for a bigger table?</h2></div>
              <p>For groups of nine or more, private dining or catering, send a sample enquiry instead.</p>
              <Link className="text-link" href="/contact?type=Private%20dining#contact-form">Ask about group dining <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
            <WhatsAppCta />
          </aside>

          <div className="reservation-form-card">
            <div className="reservation-form-card__heading">
              <span className="eyebrow">Your visit</span>
              <h2>Let&apos;s plan a good one.</h2>
              <p>Share a few details to preview the form. No booking will be made.</p>
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  )
}
