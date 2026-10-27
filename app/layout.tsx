import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: "Saffron & Stone | A Dining Concept",
    template: "%s | Saffron & Stone",
  },
  description:
    "Explore Saffron & Stone, a fictional Nairobi restaurant portfolio concept featuring a sample menu, reservations journey, story and contact experience.",
  applicationName: "Saffron & Stone",
  keywords: ["restaurant portfolio", "hospitality design", "Nairobi dining concept", "restaurant website"],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Saffron & Stone",
    title: "Saffron & Stone | A Dining Concept",
    description: "Thoughtful plates, warm hospitality and a fictional restaurant experience for a portfolio showcase.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffron & Stone | A Dining Concept",
    description: "A contemporary Nairobi dining concept built for a hospitality portfolio showcase.",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F8F4EC",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
