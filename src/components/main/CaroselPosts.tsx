import api from '@/services/api'
import PostCard from '../posts/PostCard'
import MultiCarosel from './MultiCarosel'

export default async function CaroselPosts() {
  const posts = await api.getNoneFeaturedPosts()
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mx-4"> You May Like</h2>
      <MultiCarosel>
        {posts && posts.map((post) => <PostCard key={post.path} post={post} />)}
      </MultiCarosel>
    </section>
  )
}
