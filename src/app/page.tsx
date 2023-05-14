import CaroselPosts from '@/components/main/CaroselPosts'
import FeaturedPosts from '@/components/main/FeaturedPosts'
import ProfilePage from '@/components/main/ProfilePage'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <ProfilePage />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CaroselPosts />
    </div>
  )
}
