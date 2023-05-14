import FilterablePosts from '@/components/posts/FilterablePosts'
import api from '@/services/api'
import React from 'react'

export default async function PostsPage() {
  const posts = await api.getAllPosts()
  const categories = [...new Set(posts.map((post) => post.category))]

  return (
    <FilterablePosts posts={posts} categories={categories}></FilterablePosts>
  )
}
FilterablePosts