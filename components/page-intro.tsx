type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  note?: string
  variant?: "menu" | "about" | "reservations" | "contact"
  align?: "left" | "center"
}

export function PageIntro({
  eyebrow,
  title,
  description,
  note,
  variant = "menu",
  align = "left",
}: PageIntroProps) {
  return (
    <section className={`page-intro page-intro--${variant} page-intro--${align}`}>
      <div className="container page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <div className="page-intro__content">
          <h1>{title}</h1>
          <div className="page-intro__support">
            <p className="page-intro__description">{description}</p>
            {note && <p className="page-intro__note">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
