import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
  description: string
}

export default function HeaderSections ({ title, description }: HeaderProps) {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')
  return (
    <header className="bg-bluecard w-full h-auto p-6 relative rounded-xl flex justify-center flex-col">
      <h1 className="md:text-6xl text-2xl font-bold text-left font-baloo400 leading-none">{title}</h1>
      <p className="md:text-[17px] font-[Montserrat] text-[15px] text-white/80">{description}</p>
      <svg onClick={handleClick} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={'rotate-180 cursor-pointer absolute right-2 top-1 md:right-4 md:top-4 text-white dark:text-[#ffffffaa] z-10 text-4xl'} height="1em" width="1em"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
    </header>
  )
}
