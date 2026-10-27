import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { formatPrice, menuItems, menuCategories } from "@/lib/restaurant-data"

const featuredItems = menuItems.filter((item) => item.featured)

export function HomeMenuPreview() {
  return (
    <section className="section section--cream" id="the-table">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">A taste of the table</p>
            <h2>Made with care.<br /><em>Served with character.</em></h2>
          </div>
          <div className="section-heading__aside">
            <p>Explore a menu inspired by bold flavours, fresh ingredients and the joy of sharing a good meal.</p>
            <Link className="text-link" href="/menu">View the full menu <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="featured-menu-grid">
          {featuredItems.map((item, index) => {
            const category = menuCategories.find((entry) => entry.id === item.category)?.label

            return (
              <article className={`featured-menu-card${index === 0 ? " featured-menu-card--lead" : ""}`} key={item.id}>
                <div className="featured-menu-card__image">
                  <Image
                    alt={item.imageAlt ?? item.name}
                    fill
                    sizes={index === 0 ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 25vw"}
                    src={item.image ?? "/images/saffron-hero.png"}
                  />
                  <span className="featured-menu-card__category">{category}</span>
                </div>
                <div className="featured-menu-card__body">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="featured-menu-card__price">{formatPrice(item.price)}</span>
                </div>
              </article>
            )
          })}
        </div>
        <p className="menu-disclaimer">Illustrative menu and prices for this portfolio concept. Availability and ingredients are not verified.</p>
      </div>
    </section>
  )
}
