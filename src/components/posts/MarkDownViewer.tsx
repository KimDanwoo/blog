'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const MarkdownViewer = ({ content }: { content: string }) => {
  const { theme, setTheme } = useTheme()
  return (
    <ReactMarkdown
      className="prose max-w-none dark:text-white p-12"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        img: (image) => (
          <Image
            className="w-full max-h-60 object-cover"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
        h1: ({ node, ...props }) => (
          <h1 className="text-black dark:text-white" {...props}></h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-black dark:text-white" {...props}></h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-black dark:text-white" {...props}></h3>
        ),
        code: ({ node, ...props }) => (
          <code className="text-black dark:text-white" {...props}></code>
        ),
        a: ({ node, ...props }) => (
          <a className="text-black dark:text-white" {...props}></a>
        ),
        strong: ({ node, ...props }) => (
          <strong className="text-black dark:text-white" {...props}></strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownViewer
