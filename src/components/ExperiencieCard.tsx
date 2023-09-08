import { Arrow } from '../icons/target'
import coding from '../assets/coding.mp4'
import { useNavigate } from 'react-router-dom'

export default function ExperiencieCard () {
  const navigate = useNavigate()
  const handleClick = () => navigate('/experience')

  return (
    <div onClick={handleClick} className="bg-bluecard md:p-5 p-2 overflow-hidden rounded-2xl relative aspect-auto col-span-2 animate-fade-down animate-delay-[1700ms]">
      <Arrow />
      <article className='z-20 relative'>
        <h3 className='text-white z-20 font-baloo400 md:mb-3 md:mt-1 font-bold text-2xl md:text-[40px] text-[20px]'>Work Experience</h3>
        <p className='text-white sm:text-xl text-[12px]'>Here you can see my work and personal experience</p>
      </article>
      <video autoPlay muted loop playsInline className='absolute top-0 left-0 opacity-30 pointer-events-none w-full h-full object-cover' width={572} height={278} src={coding} />
    </div>
  )
}
