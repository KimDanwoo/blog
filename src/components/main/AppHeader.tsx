import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
  return (
    <header className="flex flex-col sm:flex-row justify-between p-4 item-center">
      <Link href="/" className=" text-sm font-bold sm:text-xl md:text-3xl">
        {"Danwoo's Blog"}
      </Link>
      <nav className="flex justify-between p-4 sm:p-0 gap-4 text-sm sm:text-base align-middle">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        {/* <Link href="/contact">Contact</Link> */}
      </nav>
    </header>
  )
}
