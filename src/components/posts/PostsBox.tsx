import { Post } from '@/services/api'
import React from 'react'
import PostCard from './PostCard'
type Props = { posts: Post[] }
export default function PostsBox({ posts }: Props) {
  return (
    <ul className="flex flex-col py-4 px-2">
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </ul>
  )
}
