import Header from '../components/HeaderSection'
import Tabss from '../components/Tabs'

export default function Projects () {
  return (
    <main className="w-full bg-bluebg min-h-screen flex justify-center sm:py-10 px-5 scroll-smooth text-white">
      <div className='effect pointer-events-none fixed top-0 left-0 w-full h-screen'></div>
      <section className="gap-4 my-5 md:max-w-[1200px] w-full mx-auto flex flex-col animate-fade-down animate-duration-1000">
        <Header title={'Projects'} description={'In this section you will see my projects made with various technologies in order to practice what I have learned.'} />
        <Tabss />
      </section>
    </main>
  )
}
