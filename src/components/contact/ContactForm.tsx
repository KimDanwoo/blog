'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Banner, { BannerData } from '../common/Banner'
import api from '@/services/api'

type Form = {
  from: string
  subject: string
  message: string
}

const DEFAULT_FORM = {
  from: '',
  subject: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_FORM)
  const [banner, setBanner] = useState<BannerData | null>()
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await api.postSendContactEmail(form)
      setBanner({ message: '성공했어요!', state: 'success' })
      setForm(DEFAULT_FORM)
    } catch {
      setBanner({ message: '실패했어요..', state: 'success' })
    } finally {
      setTimeout(() => {
        setBanner(null)
      }, 3000)
    }
  }

  const isDisabled = () => {
    return form.from === '' || form.subject === '' || form.message === ''
  }
  return (
    <section className="w-full max-w-md mx-auto mt-6">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 flex flex-col gap-2 bg-slate-700 rounded-xl text-white"
      >
        <label className=" font-semibold" htmlFor="from">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          className="text-black p-2 rounded-sm"
          autoFocus
          required
          value={form.from}
          onChange={handleChange}
        />
        <label className=" font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="text-black p-2 rounded-sm"
          value={form.subject}
          onChange={handleChange}
        />
        <label className=" font-semibold" htmlFor="from">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          className="text-black p-2 rounded-sm"
          value={form.message}
          onChange={handleChange}
        />
        <button
          className="bg-yellow-300 text-black font-bold p-2 rounded-sm hover:bg-yellow-400 disabled:bg-yellow-100"
          disabled={isDisabled()}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactForm
