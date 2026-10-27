import Image from "next/image"
import { getWhatsAppHref } from "@/lib/restaurant-data"

type WhatsAppCtaProps = {
  message?: string
  label?: string
  className?: string
}

export function WhatsAppCta({
  message = "Hello Saffron & Stone, I would like to enquire about the menu and table availability.",
  label = "Chat with us on WhatsApp",
  className = "",
}: WhatsAppCtaProps) {
  const href = getWhatsAppHref(message)

  if (!href) {
    return (
      <p className={`whatsapp-demo-note ${className}`.trim()} role="note">
        <MessageCircle size={17} aria-hidden="true" />
        <span>WhatsApp is not connected in this demo. Add a business number to enable chat.</span>
      </p>
    )
  }

  return (
    <a className={`whatsapp-cta ${className}`.trim()} href={href} rel="noreferrer" target="_blank">
      <MessageCircle size={17} aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
