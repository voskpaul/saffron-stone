import type { Metadata } from "next"
import { HomeEvents, HomeLocation } from "@/components/home-events-location"
import { HomeHero } from "@/components/home-hero"
import { HomeMenuPreview } from "@/components/home-menu-preview"
import { HomeStory } from "@/components/home-story"

export const metadata: Metadata = {
  title: "Thoughtful plates, warmly shared",
  description: "Discover the Saffron & Stone portfolio concept: a contemporary Nairobi dining room with vibrant flavours, a sample menu and hospitality-led experiences.",
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMenuPreview />
      <HomeStory />
      <HomeEvents />
      <HomeLocation />
    </>
  )
}
