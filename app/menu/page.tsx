import type { Metadata } from "next"
import Image from "next/image"
import { PageIntro } from "@/components/page-intro"
import { MenuExplorer } from "@/components/menu-explorer"

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse the illustrative Saffron & Stone menu, search dishes and explore sample categories and pricing.",
}

export default function MenuPage() {
  return (
    <>
      <PageIntro
        variant="menu"
        eyebrow="A MENU FOR EVERY KIND OF GATHERING"
        title="Come hungry. Leave with a story."
        description="Fresh ingredients, familiar comforts and a few new favourites. Take a look around the sample menu."
        note="21 sample dishes / 7 menu chapters"
      />
      <section className="menu-page section section--paper">
        <div className="container">
          <div className="menu-page-banner">
            <div className="menu-page-banner__copy">
              <span className="eyebrow">On the table</span>
              <h2>A little something<br /><em>for everyone.</em></h2>
              <p>From slow mornings to long dinners, find a dish that feels right for the moment.</p>
            </div>
            <div className="menu-page-banner__image">
              <Image alt="Grilled tilapia with coconut rice, lime and greens" fill preload sizes="(max-width: 760px) 100vw, 45vw" src="/images/saffron-fish.png" />
            </div>
          </div>
          <MenuExplorer />
        </div>
      </section>
    </>
  )
}
