import IntroPage from '@/components/about/IntroPage'
import ProfilePage from '@/components/main/ProfilePage'
import api from '@/services/api'
import React from 'react'

export default async function AboutPage() {
  const content = await api.getIntroPost('introduction')
  return (
    <>
      <ProfilePage />
      <IntroPage content={content.content} />
    </>
  )
}
