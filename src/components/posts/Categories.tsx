import React from 'react'

type Props = {
  categories: string[]
  selected: string
  onClick: (category: string) => void
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 p-4">
        Category
      </h2>
      <ul className="flex justify-center">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer hover:text-sky-500 m-2 ${
              selected === category && 'font-bold text-sky-600'
            }  `}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  )
}
