import Link from 'next/link'
import React from 'react'
import ThemeChanger from '../providers/ThemeChanger'

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-99 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 bg-blue-50 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95   flex flex-col sm:flex-row justify-between p-4 item-center dark:bg-slate-800 transition-colors duration-400">
      <Link href="/" className=" text-sm font-bold sm:text-xl md:text-3xl">
        {'Danwoolog'}
      </Link>
      <nav className="flex justify-between p-4 sm:p-0 gap-4 text-sm sm:text-base align-middle">
        <Link href="/" className="text-lg flex items-center">
          Home
        </Link>
        <a
          href="https://danwoo-dev.netlify.app/"
          className="text-lg flex items-center"
        >
          Posts
        </a>
      </nav>
    </header>
  )
}
