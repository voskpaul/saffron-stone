import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { openingHours, restaurant } from "@/lib/restaurant-data"

export function OpeningHoursList({ compact = false }: { compact?: boolean }) {
  const hours = compact ? openingHours.filter(({ day }) => ["Thursday", "Friday", "Saturday"].includes(day)) : openingHours

  return (
    <dl className={`opening-hours${compact ? " opening-hours--compact" : ""}`}>
      {hours.map((item) => (
        <div className="opening-hours__row" key={item.day}>
          <dt>{item.day}</dt>
          <dd>{item.hours}</dd>
        </div>
      ))}
    </dl>
  )
}

export function LocationDetails({ showDirections = true, showContactLink = true }: { showDirections?: boolean; showContactLink?: boolean }) {
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`

  return (
    <div className="location-details">
      <div className="location-details__address">
        <span className="icon-disc" aria-hidden="true"><MapPin size={18} /></span>
        <div>
          <h3>Sample address</h3>
          <p>{restaurant.address}</p>
          <span className="demo-caption">Fictional location for this portfolio demo</span>
        </div>
      </div>
      <div className="location-details__contact">
        <p><span>Demo phone</span><strong>{restaurant.phone}</strong></p>
        <p><span>Demo email</span><strong>{restaurant.email}</strong></p>
      </div>
      {showDirections && (
        <a className="text-link" href={mapsSearch} rel="noreferrer" target="_blank">
          Open sample address in Maps <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
      <p className="location-details__note">Map search may not return a real venue; the address is illustrative only.</p>
      {showContactLink && <Link className="text-link" href="/contact">Contact &amp; location <ArrowUpRight size={15} aria-hidden="true" /></Link>}
    </div>
  )
}
