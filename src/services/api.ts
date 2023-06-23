import { readFile } from 'fs/promises'
import path from 'path'
import { EmailData } from './email'
import { cache } from 'react'

export type Post = {
  title: string
  description: string
  date: Date
  category: string
  path: string
  featured: boolean
}

export type PostData = Post & {
  content: string
  next: Post | null
  prev: Post | null
}

const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
})

const getFeaturedPosts = cache(async (): Promise<Post[]> => {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured))
})

const getNoneFeaturedPosts = cache(async (): Promise<Post[]> => {
  return getAllPosts().then((posts) => posts.filter((post) => post))
})

const getPost = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), 'data/posts', `${fileName}.md`)
  const posts = await getAllPosts()
  const post = posts.find((post) => post.path === fileName)

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`)

  const index = posts.indexOf(post)
  const next = index > 0 ? posts[index - 1] : null
  const prev = posts.length > index ? posts[index + 1] : null

  const content = await readFile(filePath, 'utf-8')
  return { ...post, content, next, prev }
}

const getIntroPost = async (fileName: string) => {
  const filePath = path.join(process.cwd(), 'data/posts', `${fileName}.md`)
  const content = await readFile(filePath, 'utf-8')
  return { content }
}

const postSendContactEmail = async (email: EmailData) => {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || '서버 요청이 실패했습니다😂')
  }
  return data
}

const api = {
  getAllPosts,
  getFeaturedPosts,
  getNoneFeaturedPosts,
  getPost,
  postSendContactEmail,
  getIntroPost,
}

export default api
