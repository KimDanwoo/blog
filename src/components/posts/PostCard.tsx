import { Post } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = { post: Post }

export default function PostCard({
  post: { title, description, path, date, category },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden hover:shadow-md hover:bg-slate-50 hover:dark:bg-slate-900 my-4">
        <div className="flex flex-col items-start p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="w-full text-lg font-bold  text-center">{title}</h3>
          <p className="w-full text-center">{description}</p>
        </div>
      </article>
    </Link>
  )
}
