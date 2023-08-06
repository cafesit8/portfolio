import movie from '../assets/next/movieapp.webp'
import guest from '../assets/next/rickmortygame.webp'
import chatgpt from '../assets/next/chat-gpt.webp'
import { NextJs, Tailwind, TypeScript, Zustand } from '../icons/skills'

export const nextjs = [{
  title: 'Movie App',
  img: movie,
  description: 'This is a popular movie app, I made this app using NextJs technologies for the frontend taking advantage of the good optimization it gives to images, TailwindCSS for styling, Zustand to handle global state and TypeScript for better code and error avoidance clean. I reinforced my knowledge in REST API requests, asynchronous and synchronous code. Using the public MovieTMDB api to display all data and images in the app.',
  skills: [NextJs, TypeScript, Zustand, Tailwind],
  bg: 'bg-[#2070bb]',
  url: 'app-movies-ecru.vercel.app',
  github: 'https://github.com/cafesit8/disney'
}, {
  title: 'Guest the Character',
  img: guest,
  description: 'One of my favorite apps made to practice and improve my programming logic using the free Rick and Morty api to play with the data thus creating this guessing game. For its creation I used NextJs technologies for the creation of components, Zustand for a more optimal handling of the global state, TailwindCSS for the styles and TypeScript for a safer code and to handle asynchronous and synchronous data types.',
  skills: [NextJs, TypeScript, Zustand, Tailwind],
  bg: 'bg-[#b94e21]',
  url: 'https://rick-morty-game-eight.vercel.app',
  github: 'https://github.com/cafesit8/Rick-Morty-game'
}, {
  title: 'ChatGPT Clone',
  img: chatgpt,
  description: 'One of my last projects made to use the ChatGPT api, a clone of this page to use code in the frontend as well as in the backend using the NextJs framework, handle asynchronous code for requests via axios. The technologies I used were NextJs, TailwindCSS for styling, TypeScript for safer code and Zustand for global state.',
  skills: [NextJs, TypeScript, Zustand, Tailwind],
  bg: 'bg-[#449b84]',
  url: 'chatgpt-clone-cafesit8.vercel.app',
  github: 'https://github.com/cafesit8/chat-gpt-clone'
}]
