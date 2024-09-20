import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <section className="p-4 flex items-center flex-col">
      <Image
        src={'/images/profile1.jpeg'}
        width="150"
        height="150"
        alt="my_profile"
        className="bg-slate-200 w-40 h-40 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">Frontend engineer</h3>
      <p className="text-center pt-2">김단우</p>
    </section>
  )
}
