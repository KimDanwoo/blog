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
      <article className="rounded-md overflow-hidden shadow-md">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          width={300}
          height={200}
          alt={title}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold truncate">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  )
}
