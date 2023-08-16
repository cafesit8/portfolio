import simpson from '../assets/giphy.mp4'
import { Arrow } from '../icons/target'
import { useNavigate } from 'react-router-dom'

export default function ProjectsCard () {
  const navigate = useNavigate()
  const handleClick = () => navigate('/projects')
  return (
    <div onClick={handleClick} className="bg-bluecard animate-fade-down animate-delay-[1200ms] cursor-pointer relative z-20 overflow-hidden rounded-2xl aspect-auto col-span-2 md:p-5 p-2">
      <Arrow />
      <h2 className="text-white font-baloo400 md:mb-3 md:mt-1 font-bold text-2xl md:text-[40px] text-[20px]">Projects</h2>
      <p className='text-white sm:text-xl text-[12px]'>In this section you'll be able to see some of my projects</p>
      <video autoPlay muted loop playsInline className='absolute pointer-events-none opacity-20 bg-transparent object-cover w-full h-full top-0 left-0' width={572} height={278} src={simpson} />
    </div>
  )
}
