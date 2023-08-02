export default function Presentation () {
  return (
    <div className="bg-bluecard animate-fade-down relative rounded-2xl col-span-3 aspect-square md:aspect-auto md:row-span-2 overflow-hidden">
      <div className='sm:p-7 p-4 w-full h-full flex'>
        <article className='self-start w-full h-full'>
          <h1 className="font-baloo400 text-left text-white md:mb-5 leading-none font-bold text-[30px] md:text-[45px]">Hi, I'm Elias L. Melgarejo 👋</h1>
          <p className='text-white md:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat, et nihil modi numquam eos ea ab temporibus facilis autem ad eveniet cupiditate quidem exercitationem quod, doloribus ex officiis eligendi? quod, doloribus ex officiis eligendi? quod, doloribus ex officiis</p>
        </article>
        {/* <img className='coding border-2 absolute -right-16 -bottom-28' src={gif} alt="coding" /> */}
      </div>
    </div>
  )
}
