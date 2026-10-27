import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Clock3 } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { LocationDetails, OpeningHoursList } from "@/components/location-details"
import { PageIntro } from "@/components/page-intro"
import { WhatsAppCta } from "@/components/whatsapp-cta"

export const metadata: Metadata = {
  title: "Contact & location",
  description: "Find sample contact details, illustrative opening hours and a demo enquiry form for the fictional Saffron & Stone restaurant concept.",
}

const enquiryTypes = ["General enquiry", "Menu question", "Reservation question", "Private dining", "Catering"]

type ContactPageProps = {
  searchParams: Promise<{ type?: string | string[] }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const requestedType = Array.isArray(params.type) ? params.type[0] : params.type
  const initialEnquiryType = requestedType && enquiryTypes.includes(requestedType) ? requestedType : ""

  return (
    <>
      <PageIntro
        eyebrow="We are listening"
        title="Talk to us about the table."
        description="Questions about the menu, a special occasion or a sample visit? Choose a topic and explore the enquiry flow."
      />
      <section className="section section--paper contact-page">
        <div className="container contact-layout">
          <div className="contact-form-card">
            <div className="contact-form-card__heading">
              <span className="eyebrow">Send an enquiry</span>
              <h2>What can we help with?</h2>
              <p>Use the demo form to preview a customer enquiry. Nothing is delivered or stored.</p>
            </div>
            <ContactForm initialEnquiryType={initialEnquiryType} />
          </div>

          <aside className="contact-aside">
            <div className="contact-aside__block">
              <p className="eyebrow">Visit us</p>
              <h2>Find your way<br /><em>to the table.</em></h2>
              <LocationDetails showContactLink={false} />
            </div>
            <div className="contact-aside__block contact-hours-block">
              <div className="contact-hours-heading"><Clock3 size={18} aria-hidden="true" /><h2>Sample opening hours</h2></div>
              <OpeningHoursList />
            </div>
            <div className="contact-aside__whatsapp">
              <WhatsAppCta />
              <span>WhatsApp can be enabled by adding a real business number in the restaurant data configuration.</span>
            </div>
          </aside>
        </div>
      </section>
      <section className="contact-bottom-note">
        <div className="container contact-bottom-note__inner">
          <span>This is a portfolio concept.</span>
          <p>The address, contact details, menu and hours are sample content and do not represent a real business.</p>
          <Link className="text-link" href="/menu">Browse the sample menu <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
