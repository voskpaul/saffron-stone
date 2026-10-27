import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, HeartHandshake, Leaf, Sparkles } from "lucide-react"

const values = [
  {
    number: "01",
    icon: Leaf,
    title: "Grounded in good ingredients",
    description: "A sample menu built around fresh produce, careful preparation and flavours worth coming back for.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Generous by nature",
    description: "A welcoming room, thoughtful service and plates that make sharing feel easy.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Details that feel considered",
    description: "From the first hello to the last cup of tea, the small moments shape the whole experience.",
  },
]

export function AboutStory() {
  return (
    <>
      <section className="section section--paper about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-copy">
            <p className="eyebrow">A place at the table</p>
            <h2>Hospitality is<br /><em>how you make people feel.</em></h2>
            <p className="about-story-copy__lead">Saffron &amp; Stone is an imagined restaurant concept for people who believe a meal can be the best part of the day.</p>
            <p>Set in the heart of Nairobi in this portfolio project, the idea brings together contemporary African-inspired cooking, warm natural materials and the unhurried feeling of a long lunch. It is a fictional brand, designed to show how a clear customer journey can turn a first visit into a reason to return.</p>
            <p>Every part of the experience is designed to feel welcoming: a menu that is easy to explore, a place for a special gathering and the practical details guests need before they arrive.</p>
            <Link className="text-link" href="/menu">Take a look at the menu <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="about-story-photo">
            <Image alt="Sunlight falling across a warm restaurant dining room with woven pendant lights" fill sizes="(max-width: 760px) 100vw, 48vw" src="/images/saffron-interior.png" />
            <span className="about-story-photo__stamp">Warm light<br />Good company</span>
          </div>
        </div>
      </section>

      <section className="section section--cream values-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">The feeling behind it</p>
            <h2>Good food is only<br /><em>part of the story.</em></h2>
          </div>
          <div className="values-grid">
            {values.map(({ number, icon: Icon, title, description }) => (
              <article className="value-card" key={number}>
                <div className="value-card__top"><span>{number}</span><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Your next gathering</p>
            <h2>There is always<br /><em>room at the table.</em></h2>
          </div>
          <div className="about-cta__actions">
            <p>Plan an easy dinner, a long lunch or a gathering of your own.</p>
            <Link className="button button--light" href="/reservations">Explore reservations <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
