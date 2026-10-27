import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { formatPrice, menuItems, menuCategories } from "@/lib/restaurant-data"

const featuredItems = menuItems.filter((item) => item.featured)
const leadItem = featuredItems[0]
const supportingItems = featuredItems.slice(1)

export function HomeMenuPreview() {
  const leadCategory = menuCategories.find((category) => category.id === leadItem?.category)?.label

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

        {leadItem && (
          <div className="signature-menu-layout">
            <figure className="signature-menu-feature">
              <Image
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
                src={leadItem.image ?? "/images/saffron-breakfast.png"}
              />
              <figcaption className="signature-menu-feature__caption">
                <div className="signature-menu-feature__topline">
                  <span>01 / A house favorite</span>
                  <span>{leadCategory}</span>
                </div>
                <div className="signature-menu-feature__details">
                  <div>
                    <h3>{leadItem.name}</h3>
                    <p>{leadItem.description}</p>
                  </div>
                  <span className="signature-menu-feature__price">{formatPrice(leadItem.price)}</span>
                </div>
              </figcaption>
            </figure>

            <div className="signature-menu-list">
              <div className="signature-menu-list__intro">
                <p className="eyebrow">From first light to last pour</p>
                <p>Five more notes from the sample menu.</p>
              </div>
              <ol className="signature-menu-list__items">
                {supportingItems.map((item, index) => {
                  const category = menuCategories.find((entry) => entry.id === item.category)?.label

                  return (
                    <li className="signature-menu-item" key={item.id}>
                      <span className="signature-menu-item__number">{String(index + 2).padStart(2, "0")}</span>
                      <div className="signature-menu-item__copy">
                        <span className="signature-menu-item__category">{category}</span>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                      <span className="signature-menu-item__price">{formatPrice(item.price)}</span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        )}
        <p className="menu-disclaimer">Illustrative menu and prices for this portfolio concept. Availability and ingredients are not verified.</p>
      </div>
    </section>
  )
}
