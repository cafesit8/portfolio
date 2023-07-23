import simpson from '../assets/giphy.gif'

export default function ProjectsCard() {
  return (
    <div className="bg-bluecard relative z-20 rounded-md aspect-auto col-span-2 md:p-5 p-2">
          <h2 className="text-white font-baloo400 md:mb-3 md:mt-1 font-bold text-2xl md:text-[40px] text-[20px]">Projects</h2>
          <p className='text-white sm:text-xl text-[12px]'>In this section you'll be able to see some of my projects</p>
          <img className='absolute opacity-20 bg-transparent object-cover w-full h-full top-0 left-0' src={simpson} alt="git de los simpson" />
    </div>
  )
}
