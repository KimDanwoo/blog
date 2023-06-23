import AppHeader from '@/components/main/AppHeader'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import AppFooter from '@/components/main/AppFooter'
import Providers from '@/components/providers/ThemeProvider'
import ThemeChanger from '@/components/providers/ThemeChanger'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'danwoo',
    template: '%s | danwoo',
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
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto bg-blue-50 dark:bg-slate-800 transition-colors duration-400">
        <Providers>
          <AppHeader />
          <main className="grow">{children}</main>
          <AppFooter />
          <ThemeChanger />
        </Providers>
      </body>
    </html>
  )
}
