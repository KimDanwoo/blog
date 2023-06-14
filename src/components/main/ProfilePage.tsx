import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <section className="p-4 flex items-center flex-col">
      <Image
        src={'/images/profile.jpg'}
        width="150"
        height="150"
        alt="my_profile"
        className="bg-slate-200 w-40 h-40 rounded-full object-cover"
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi I'm Danwoo"}</h2>
      <h3 className="text-xl font-semibold">Frontent engineer</h3>
      <p>김단우입니다.</p>
      <Link
        href="/contact"
        className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2"
      >
        contact Me!
      </Link>
      <div></div>
    </section>
  )
}
