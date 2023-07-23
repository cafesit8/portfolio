import { Target } from "../icons/target"

interface MediaCardProps {
    link: string,
    color?: string,
    padding?: string,
    children: React.ReactNode
    animate?: string
}

export default function MediaCard({link, color, animate, padding = '', children}: MediaCardProps) {
  return (
    <a aria-label="enlace a una red social" href={link} target="_blank" className={`${color} ${animate} flex justify-center items-center cursor-pointer rounded-2xl aspect-square relative ${padding}`}>
        <Target />
        {children}
    </a>
  )
}
