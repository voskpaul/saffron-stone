type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
}

export function PageIntro({ eyebrow, title, description, align = "center" }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro--${align}`}>
      <div className="container page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__description">{description}</p>
      </div>
    </section>
  )
}
