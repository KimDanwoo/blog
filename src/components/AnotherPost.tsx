'use client'
import { Post } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

type Props = {
  post: Post | null
  type: string
}

const ICON_CLASS = 'text-yellow-300 m-4 transition-all group-hover:text-6xl'

const AnotherPost = ({ post, type }: Props) => {
  return (
    post && (
      <Link
        href={`/posts/${post.path}`}
        className="cursor-pointer relative w-full max-h-56"
      >
        <div className="w-full bg-slate-800 h-[150px]"></div>
        <div className="group absolute text-white flex items-center justify-around z-10 w-full h-full left-0 top-0 px-8">
          {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
          <div className="w-full text-center">
            <h2 className="">{post.title}</h2>
          </div>
          {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
        </div>
      </Link>
    )
  )
}
export default AnotherPost
