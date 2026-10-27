import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-page__content">
        <p className="eyebrow">A little detour</p>
        <span className="not-found-page__number">404</span>
        <h1>This page missed<br /><em>its reservation.</em></h1>
        <p>We could not find the page you were looking for. Let&apos;s get you back to the good part.</p>
        <div className="not-found-page__actions">
          <Link className="button button--dark" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
          <Link className="text-link" href="/menu">Browse the menu <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
