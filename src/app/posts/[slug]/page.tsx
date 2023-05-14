import AthorPost from '@/components/AthorPost'
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
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        src={`/images/posts/${post.path}.png`}
        className="w-full max-h-80"
        width={760}
        height={250}
        alt={post.title}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        <AthorPost post={post.prev} type="prev" />
        <AthorPost post={post.next} type="next" />
      </section>
    </article>
  )
}

export default PostPage
