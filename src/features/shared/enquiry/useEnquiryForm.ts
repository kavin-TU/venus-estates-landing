import type { FormEvent } from 'react'
import { useState } from 'react'

export const EMPTY_ENQUIRY_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  desiredDate: '',
  additional: '',
} as const

export type EnquiryFormValues = {
  -readonly [K in keyof typeof EMPTY_ENQUIRY_VALUES]: string
}

export function useEnquiryForm() {
  const [values, setValues] = useState<EnquiryFormValues>({ ...EMPTY_ENQUIRY_VALUES })

  const update =
    (name: keyof EnquiryFormValues) =>
    (event: { target: { value: string } }) => {
      setValues((current) => ({ ...current, [name]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: no enquiry endpoint exists yet — wire this up when the backend lands.
  }

  return { values, update, handleSubmit }
}
