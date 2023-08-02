import { lazy } from 'react'
import { Linkedin, Github, Whatsaap, Email } from '../icons/social-media'
import { CSS, Git, HTML, JavaScript, NextJs, React, ReactQuery, Redux, Sass, Tailwind, TypeScript, Vue } from '../icons/skills'
const ExperienceCard = lazy(() => import('../components/ExperiencieCard'))
const AgeCard = lazy(() => import('../components/Age'))
const IcpnaCard = lazy(() => import('../components/IcpnaCard'))
const MediaCard = lazy(() => import('../components/MediaCard'))
const Presentation = lazy(() => import('../components/Presentation'))
const ProjectsCard = lazy(() => import('../components/ProjectsCard'))

export default function Home () {
  return (
    <main className="w-full bg-bluebg min-h-screen flex justify-center sm:pt-10 px-5 scroll-smooth">
      <div className='effect pointer-events-none fixed top-0 left-0 w-full h-screen'></div>
      <section className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <Presentation />
        <MediaCard link='https://www.linkedin.com/in/elias-melgarejo/' animate='animate-fade-down animate-delay-300' color='bg-[#49A7FF]'>
          <Linkedin />
        </MediaCard>
        <MediaCard link='https://github.com/cafesit8' color='bg-[#D0D1D3]' animate='animate-fade-down animate-delay-[900ms]' padding='sm:p-14 lg:p-24 p-8'>
          <Github />
        </MediaCard>
        <MediaCard link='https://wa.me/962661968' color='bg-[#8EB942]' animate='animate-fade-down animate-delay-[600ms]' padding='sm:p-14 lg:p-24 p-8'>
          <Whatsaap />
        </MediaCard>
        <MediaCard link='mailto:leliasgomer@gmail.com' color='bg-[#5A69EF]' animate='animate-fade-down animate-delay-[1500ms]'>
          <Email />
        </MediaCard>
        <ProjectsCard />
        <ExperienceCard />
        <AgeCard />
        <IcpnaCard />
        <div className="bg-bluecard rounded-2xl aspect-square flex flex-wrap animate-fade-down animate-delay-[2300ms]">
          <article className='w-full sm:p-2 p-1 items-center grid grid-cols-4 sm:gap-3 gap-1'>
            <HTML />
            <CSS />
            <JavaScript />
            <TypeScript />
            <Sass />
            <React />
            <Vue />
            <NextJs />
            <ReactQuery />
            <Redux />
            <Tailwind />
            <Git />
          </article>
        </div>
        <div className="bg-bluecard rounded-2xl aspect-auto md:col-span-2 animate-fade-down animate-delay-[2900ms]"></div>
        <div className="bg-bluecard rounded-2xl aspect-square md:block hidden animate-fade-down animate-delay-[2600ms]"></div>
      </section>
    </main>
  )
}
