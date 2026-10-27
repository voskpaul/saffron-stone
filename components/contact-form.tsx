"use client"

import { type FormEvent, useState } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import { validateContact, type FormErrors } from "@/lib/form-validation"

const enquiryTypes = ["General enquiry", "Menu question", "Reservation question", "Private dining", "Catering"]

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span className="field-error" id={id}>{message}</span> : null
}

type ContactFormProps = {
  initialEnquiryType?: string
}

export function ContactForm({ initialEnquiryType = "" }: ContactFormProps) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState("")
  const selectedEnquiry = enquiryTypes.includes(initialEnquiryType) ? initialEnquiryType : ""

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      enquiryType: String(formData.get("enquiryType") ?? ""),
      message: String(formData.get("message") ?? ""),
    }
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    setStatus("")

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0]
      const fieldIds: Record<string, string> = {
        name: "contact-name",
        email: "contact-email",
        enquiryType: "contact-enquiry-type",
        message: "contact-message",
      }
      document.getElementById(fieldIds[firstInvalidField])?.focus()
      return
    }

    setStatus("Demo only: your details passed local form checks, but no message was sent or stored.")
  }

  return (
    <form className="enquiry-form contact-form" id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-demo-notice" role="note">
        <Send size={17} aria-hidden="true" />
        <p>This form demonstrates the enquiry journey only. Your details are not sent or saved.</p>
      </div>

      <div className="form-grid">
        <label className="form-field form-field--full" htmlFor="contact-name">
          <span>Name <span className="required-mark">*</span></span>
          <input autoComplete="name" id="contact-name" name="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
          <FieldError id="contact-name-error" message={errors.name} />
        </label>
        <label className="form-field form-field--full" htmlFor="contact-email">
          <span>Email address <span className="required-mark">*</span></span>
          <input autoComplete="email" id="contact-email" name="email" type="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
          <FieldError id="contact-email-error" message={errors.email} />
        </label>
        <label className="form-field form-field--full" htmlFor="contact-enquiry-type">
          <span>What can we help with? <span className="required-mark">*</span></span>
          <select defaultValue={selectedEnquiry} id="contact-enquiry-type" name="enquiryType" required aria-invalid={Boolean(errors.enquiryType)} aria-describedby={errors.enquiryType ? "contact-enquiry-type-error" : undefined}>
            <option disabled value="">Choose an enquiry type</option>
            {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          <FieldError id="contact-enquiry-type-error" message={errors.enquiryType} />
        </label>
        <label className="form-field form-field--full" htmlFor="contact-message">
          <span>Your message <span className="required-mark">*</span></span>
          <textarea id="contact-message" name="message" required placeholder="Tell us a little about what you have in mind" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
          <FieldError id="contact-message-error" message={errors.message} />
        </label>
      </div>

      <button className="button button--dark form-submit" type="submit">Review enquiry <ArrowUpRight size={16} aria-hidden="true" /></button>
      <p className="form-footnote">Required fields are marked with <span className="required-mark">*</span>. This demo has no live enquiry service.</p>
      {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
    </form>
  )
}
