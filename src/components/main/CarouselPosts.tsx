import api from '@/services/api'
import PostCard from '../posts/PostCard'
import MultiCarousel from './MultiCarousel'

export default async function CarouselPosts() {
  const posts = await api.getNoneFeaturedPosts()
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mx-4"> You May Like</h2>
      <MultiCarousel>
        {posts && posts.map((post) => <PostCard key={post.path} post={post} />)}
      </MultiCarousel>
    </section>
  )
}
