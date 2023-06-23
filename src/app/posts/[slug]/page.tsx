import AnotherPost from '@/components/AnotherPost'
import PostContent from '@/components/posts/PostContent'
import api from '@/services/api'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await api.getPost(slug)
  return {
    title,
    description,
  }
}
const PostPage = async ({ params: { slug } }: Props) => {
  const post = await api.getPost(slug)
  return (
    <article className=" max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 mt-12">
      <PostContent post={post} />
      <section className="flex shadow-md">
        <AnotherPost post={post.prev} type="prev" />
        <AnotherPost post={post.next} type="next" />
      </section>
    </article>
  )
}

export default PostPage
