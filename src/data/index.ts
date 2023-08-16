import { ReactElement } from 'react'
import { Js } from './js'
import { nextjs } from './nextjs'
import { react } from './react'

type Content = {
  title: string;
    img: string;
    description: string;
    skills: (() => ReactElement)[]
    bg: string;
    url: string;
    github: string;
}

interface Data{
  label: string
  value: string
  content: Content[]
}

export const data: Data[] = [
  {
    label: 'React',
    value: 'react',
    content: react
  },
  {
    label: 'NextJs',
    value: 'nextjs',
    content: nextjs
  },
  {
    label: 'Js',
    value: 'js',
    content: Js
  }
]
