import PostsBox from '../posts/PostsBox'
import api from '@/services/api'

export default async function FeaturedPosts() {
  const posts = await api.getFeaturedPosts()
  return (
    <section>
      <h2 className="text-2xl font-bold mx-4">Featured Posts</h2>
      <PostsBox posts={posts} />
    </section>
  )
}
