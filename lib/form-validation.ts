import { getTodayInNairobi } from "@/lib/restaurant-data"

export type FormErrors = Record<string, string>

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

export function validateReservation(values: {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
}) {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) errors.name = "Please enter your name."
  if (!isValidEmail(values.email)) errors.email = "Enter a valid email address."
  if (!isValidPhone(values.phone)) errors.phone = "Enter a phone number with at least 7 digits."
  if (!values.date) errors.date = "Choose a preferred date."
  else if (values.date < getTodayInNairobi()) {
    errors.date = "Choose today or a future date."
  }
  if (!values.time) errors.time = "Choose a preferred time."
  if (!values.guests) errors.guests = "Choose the number of guests."

  return errors
}

export function validateContact(values: {
  name: string
  email: string
  enquiryType: string
  message: string
}) {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) errors.name = "Please enter your name."
  if (!isValidEmail(values.email)) errors.email = "Enter a valid email address."
  if (!values.enquiryType) errors.enquiryType = "Choose an enquiry type."
  if (values.message.trim().length < 10) errors.message = "Add a little more detail (at least 10 characters)."

  return errors
}
