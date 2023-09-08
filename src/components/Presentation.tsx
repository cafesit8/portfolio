export default function Presentation () {
  return (
    <div className="bg-bluecard animate-fade-down relative rounded-2xl col-span-3 aspect-square md:aspect-auto md:row-span-2 overflow-hidden">
      <div className='sm:p-7 p-4 w-full h-full flex'>
        <article className='self-start w-full h-full text-white'>
          <h1 className="font-baloo400 text-left text-white md:mb-5 leading-none font-bold text-[30px] md:text-[45px]">Hi, I'm Elias L. Melgarejo 👋</h1>
          <p className='text-white md:text-[20px] text-[15px]'>Frontend Developer with experience in the world of web development. My focus is on creating exceptional and functional user experiences using a diverse set of technologies and tools.</p>
          <p className="text-white md:text-[20px] text-[15px]">Self-taught, capable of putting what he has learned into practice. With the pleasure of always being aware of new technologies, very active and with good communication.</p>
        </article>
        {/* <img className='coding border-2 absolute -right-16 -bottom-28' src={gif} alt="coding" /> */}
      </div>
    </div>
  )
}
