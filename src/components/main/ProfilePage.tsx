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
      <h2 className="text-3xl font-bold mt-2">{''}</h2>
      <h3 className="text-xl font-semibold">Frontend engineer</h3>
      <p className="text-center pt-2">
        항상 배우려고 하는 개발자
        <br />
        항상 발전하며 성장하는 개발자 김단우입니다.
      </p>
    </section>
  )
}
