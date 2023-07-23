import { Target } from "../icons/target"

interface MediaCardProps {
    link: string,
    color?: string,
    padding?: string,
    children: React.ReactNode
}

export default function MediaCard({link, color, padding = '', children}: MediaCardProps) {
  return (
    <a aria-label="enlace a una red social" href={link} target="_blank" className={`${color} flex justify-center items-center cursor-pointer rounded-md aspect-square relative ${padding}`}>
        <Target />
        {children}
    </a>
  )
}
