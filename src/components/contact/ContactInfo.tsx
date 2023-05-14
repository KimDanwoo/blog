import { Metadata } from 'next'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Danwoo 에게 메일 보내기',
}

const LINKS = [{ icon: <AiFillGithub />, url: 'https://github.com/' }]

export default function ContactInfo() {
  return (
    <section className="text-center">
      <h2 className="font-bold text-3xl mb-2">Contact Me</h2>
      <p>dudgn9198@gmail.com</p>
      <div className="flex justify-center my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            className=" text-3xl"
            href={link.url}
            target="_blank"
            rel="noreferr"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <h2 className="mt-6 text-2xl font-bold">Or Send Me an email</h2>
    </section>
  )
}
