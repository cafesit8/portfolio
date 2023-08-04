import { NavLink } from 'react-router-dom'

export default function HeaderProjects () {
  return (
    <>
      <header className="bg-bluecard w-full h-auto p-6 rounded-xl flex justify-center flex-col">
        <h1 className="md:text-6xl text-2xl font-bold text-left font-baloo400 leading-none">Projects</h1>
        <p className="md:text-[20px] text-[16px] text-white/80">In this section you will see my projects made with various technologies in order to practice what I have learned.</p>
      </header>
      <section className="h-auto bg-bluecard rounded-xl flex-row py-4 px-6 flex sm:justify-evenly justify-start md:gap-0 gap-7 md:overflow-auto overflow-y-scroll">
        <NavLink to={'React'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>React</NavLink>
        <NavLink to={'NextJs'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>Next.js</NavLink>
        <NavLink to={'Vue'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>Vue</NavLink>
        <NavLink to={'Js'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>HTML,CSS,JS</NavLink>
      </section>
    </>
  )
}
