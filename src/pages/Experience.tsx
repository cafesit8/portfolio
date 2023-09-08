import HeaderSections from '../components/HeaderSection'
import TimeLine from '../components/TimeLine'

export default function Experience () {
  return (
    <main className="w-full min-h-screen bg-bluebg lg:py-10 py-5 px-3">
      <section className="lg:max-w-[1000px] flex flex-col gap-10 m-auto text-white animate-fade-down animate-duration-500">
        <HeaderSections title='Experience' description='In this section, you will see my experience as a Front End Developer, the role I had in companies and evolution in my professional career.' />
        <TimeLine />
      </section>
    </main>
  )
}
