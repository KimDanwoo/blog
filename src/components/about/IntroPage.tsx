'use client'
import React from 'react'
import MarkdownViewer from '../posts/MarkDownViewer'

export default function IntroPage({ content }: { content: string }) {
  return (
    <section className="text-center rounded-md py-4 ">
      <MarkdownViewer content={content} />
    </section>
  )
}
