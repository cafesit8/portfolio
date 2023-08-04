import { NavLink, useNavigate } from 'react-router-dom'

export default function HeaderProjects () {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')
  return (
    <>
      <header className="bg-bluecard w-full h-auto p-6 relative rounded-xl flex justify-center flex-col">
        <h1 className="md:text-6xl text-2xl font-bold text-left font-baloo400 leading-none">Projects</h1>
        <p className="md:text-[20px] text-[16px] text-white/80">In this section you will see my projects made with various technologies in order to practice what I have learned.</p>
        <svg onClick={handleClick} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={'rotate-180 cursor-pointer absolute right-2 top-1 md:right-4 md:top-4 text-white dark:text-[#ffffffaa] z-10 text-4xl'} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
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
