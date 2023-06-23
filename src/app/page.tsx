import IntroPage from '@/components/about/IntroPage'
import ProfilePage from '@/components/main/ProfilePage'
import api from '@/services/api'

export default async function HomePage() {
  const content = await api.getIntroPost('introduction')
  return (
    <div>
      <ProfilePage />
      <IntroPage content={content.content} />
    </div>
  )
}
