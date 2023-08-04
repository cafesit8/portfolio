import { Outlet, NavLink } from 'react-router-dom'

export default function Projects () {
  return (
    <main className="w-full bg-bluebg min-h-screen flex justify-center sm:py-10 px-5 scroll-smooth text-white">
      <div className='effect pointer-events-none fixed top-0 left-0 w-full h-screen'></div>
      <section className="gap-4 my-5 md:max-w-[1200px] w-full mx-auto flex flex-col">
        <header className="bg-bluecard w-full h-auto p-6 rounded-xl flex justify-center flex-col">
          <h1 className="md:text-6xl text-2xl font-bold text-left font-baloo400 leading-none">Projects</h1>
          <p className="md:text-[20px] text-[16px] text-white/80">In this section you will see my projects made with various technologies in order to practice what I have learned.</p>
        </header>
        <section className="h-auto bg-bluecard rounded-xl flex-row py-4 px-6 flex sm:justify-evenly justify-start md:gap-0 gap-7 md:overflow-auto overflow-y-scroll">
          <NavLink to={'/projects/React'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>React</NavLink>
          <NavLink to={'/projects/NextJs'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>Next.js</NavLink>
          <NavLink to={'Vue'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>Vue</NavLink>
          <NavLink to={'Js'} className={({ isActive }) => (isActive ? 'bg-[#436AB8] py-3 flex items-center justify-center px-5 rounded-md' : 'py-3 flex items-center justify-center px-5 rounded-md')}>HTML,CSS,JS</NavLink>
        </section>
        <Outlet />
      </section>
    </main>
  )
}
