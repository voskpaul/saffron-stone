"use client"

import { type FormEvent, useState } from "react"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { getTodayInNairobi } from "@/lib/restaurant-data"
import { validateReservation, type FormErrors } from "@/lib/form-validation"

const timeSlots = [
  "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm",
  "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm",
]

const occasions = ["Birthday", "Date night", "Family gathering", "Business meal", "Other"]

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span className="field-error" id={id}>{message}</span> : null
}

export function ReservationForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      guests: String(formData.get("guests") ?? ""),
    }
    const nextErrors = validateReservation(values)
    setErrors(nextErrors)
    setStatus("")

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0]
      const fieldIds: Record<string, string> = {
        name: "reservation-name",
        email: "reservation-email",
        phone: "reservation-phone",
        date: "reservation-date",
        time: "reservation-time",
        guests: "reservation-guests",
      }
      document.getElementById(fieldIds[firstInvalidField])?.focus()
      return
    }

    setStatus("Demo only: your details passed local form checks, but no request was sent and no table has been reserved.")
  }

  return (
    <form className="enquiry-form" noValidate onSubmit={handleSubmit}>
      <div className="form-demo-notice" role="note">
        <CalendarDays size={17} aria-hidden="true" />
        <p>This is a portfolio demo. Your details stay in this page and are not sent or saved.</p>
      </div>

      <div className="form-grid">
        <label className="form-field" htmlFor="reservation-name">
          <span>Full name <span className="required-mark">*</span></span>
          <input autoComplete="name" id="reservation-name" name="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "reservation-name-error" : undefined} />
          <FieldError id="reservation-name-error" message={errors.name} />
        </label>
        <label className="form-field" htmlFor="reservation-email">
          <span>Email address <span className="required-mark">*</span></span>
          <input autoComplete="email" id="reservation-email" name="email" type="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "reservation-email-error" : undefined} />
          <FieldError id="reservation-email-error" message={errors.email} />
        </label>
        <label className="form-field" htmlFor="reservation-phone">
          <span>Phone number <span className="required-mark">*</span></span>
          <input autoComplete="tel" id="reservation-phone" name="phone" type="tel" required placeholder="e.g. +254 700 000 000" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "reservation-phone-error" : undefined} />
          <FieldError id="reservation-phone-error" message={errors.phone} />
        </label>
        <label className="form-field" htmlFor="reservation-date">
          <span>Preferred date <span className="required-mark">*</span></span>
          <input id="reservation-date" name="date" type="date" required min={getTodayInNairobi()} aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "reservation-date-error" : undefined} />
          <FieldError id="reservation-date-error" message={errors.date} />
        </label>
        <label className="form-field" htmlFor="reservation-time">
          <span>Preferred time <span className="required-mark">*</span></span>
          <select defaultValue="" id="reservation-time" name="time" required aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "reservation-time-error" : undefined}>
            <option disabled value="">Choose a time</option>
            {timeSlots.map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
          <FieldError id="reservation-time-error" message={errors.time} />
        </label>
        <label className="form-field" htmlFor="reservation-guests">
          <span>Number of guests <span className="required-mark">*</span></span>
          <select defaultValue="" id="reservation-guests" name="guests" required aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "reservation-guests-error" : undefined}>
            <option disabled value="">Choose guests</option>
            {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}
          </select>
          <FieldError id="reservation-guests-error" message={errors.guests} />
        </label>
        <label className="form-field form-field--full" htmlFor="reservation-occasion">
          <span>Occasion <span className="optional-mark">Optional</span></span>
          <select defaultValue="" id="reservation-occasion" name="occasion">
            <option value="">Choose an occasion</option>
            {occasions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
          </select>
        </label>
        <label className="form-field form-field--full" htmlFor="reservation-requests">
          <span>Special requests <span className="optional-mark">Optional</span></span>
          <textarea id="reservation-requests" name="requests" placeholder="A note for the team, if you have one" rows={4} />
        </label>
      </div>

      <button className="button button--dark form-submit" type="submit">Check your details <ArrowUpRight size={16} aria-hidden="true" /></button>
      <p className="form-footnote">Required fields are marked with <span className="required-mark">*</span>. For groups of 9 or more, use the private dining enquiry form.</p>
      {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
    </form>
  )
}
