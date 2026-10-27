import type { Metadata } from "next"
import { AboutStory } from "@/components/about-sections"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Our story",
  description: "Meet the thinking behind Saffron & Stone, a fictional Nairobi restaurant concept created as a hospitality portfolio experience.",
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="A little more care in every detail."
        description="A welcoming dining concept shaped by flavour, place and the simple pleasure of being together."
      />
      <AboutStory />
    </>
  )
}
