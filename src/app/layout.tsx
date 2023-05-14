import AppHeader from '@/components/main/AppHeader'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import AppFooter from '@/components/main/AppFooter'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: '단우의 블로그',
    template: '단우의 블로그 | %s',
  },
  description: '프론트앤드 개발자 단우의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <AppHeader />
        <main className="grow">{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}
