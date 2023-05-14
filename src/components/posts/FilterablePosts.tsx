'use client'
import { Post } from '@/services/api'
import React, { useState } from 'react'
import PostsBox from './PostsBox'
import Categories from './Categories'

type Props = {
  posts: Post[]
  categories: string[]
}

const ALL_POSTS = 'All Posts'

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS)
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected)

  return (
    <section className="flex flex-col-reverse md:flex-row m-4">
      <PostsBox posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  )
}

export default FilterablePosts
