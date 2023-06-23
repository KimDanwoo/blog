'use client'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import MarkdownViewer from './MarkDownViewer'
import { PostData } from '@/services/api'

const PostContent = ({ post }: { post: PostData }) => {
  const { title, content, date, description } = post
  return (
    <section className="flex flex-col p-4  bg-slate-50 dark:bg-slate-900">
      <time className="flex items-center self-end text-sky-600">
        <AiOutlineCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </time>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  )
}

export default PostContent
