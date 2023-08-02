import { ReactElement, useState } from 'react'
import { useGlobalStore } from '../state/state'
import { Modal } from './Modal'

interface Card {
  title: string,
  img: string,
  description: string,
  skills: (() => ReactElement)[]
  bg: string
}

interface ProjectCardProps {
  item: Card
}

export default function ProjectCard ({ item }: ProjectCardProps) {
  const { getInfo } = useGlobalStore()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const handleClick = () => {
    getInfo(item)
    handleOpen()
  }
  return (
    <>
      <article onClick={handleClick} className="card w-full cursor-pointer md:h-[350px] bg-bluecard h-[250px] rounded-xl overflow-hidden relative">
        <picture className='img w-full h-full block duration-200'>
          <img className='w-full h-full object-cover' src={item.img} alt={`image of ${item.title}`} />
        </picture>
        <div className={`text w-full flex flex-col justify-center p-3 truncate duration-200 text-ellipsis h-0 ${item.bg}`}>
          <h6 className='font-bold font-baloo400 outline-none text-xl'>{item.title}</h6>
          <p className='outline-none text-white/80'>{item.description}</p>
        </div>
      </article>
      <Modal open={open} handleOpen={handleOpen} />
    </>
  )
}
