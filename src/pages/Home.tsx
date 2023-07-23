import { lazy } from 'react'
import { Linkedin, Github, Whatsaap, Email } from '../icons/social-media'
import { CSS, Git, HTML, JavaScript, NextJs, NodeJs, React, ReactQuery, Redux, Sass, Tailwind, Vue } from '../icons/skills'
const AgeCard = lazy(() => import('../components/Age'))
const IcpnaCard = lazy(() => import('../components/IcpnaCard'))
const MediaCard = lazy(() => import('../components/MediaCard'))
const Presentation = lazy(() => import('../components/Presentation'))
const ProjectsCard = lazy(() => import('../components/ProjectsCard'))

export default function Home() {
  return (
    <main className="w-full bg-bluebg min-h-screen flex justify-center sm:pt-10 px-5 scroll-smooth">
      <div className='effect pointer-events-none fixed top-0 left-0 w-full h-screen'></div>
      <section className="grid animate-fade-down grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <Presentation />
        <MediaCard link='https://www.linkedin.com/in/elias-melgarejo/' color='bg-[#49a7ff56]'>
          <Linkedin />
        </MediaCard>
        <MediaCard link='https://github.com/cafesit8' color='bg-[#6b7280]' padding='sm:p-14 lg:p-24 p-8'>
          <Github />
        </MediaCard>
        <MediaCard link='https://wa.me/962661968' color='bg-[#8eb942c7]' padding='sm:p-14 lg:p-24 p-8'>
          <Whatsaap />
        </MediaCard>
        <MediaCard link='mailto:leliasgomer@gmail.com' color='bg-[#7785ff56]'>
          <Email />
        </MediaCard>
        <ProjectsCard />
        <div className="bg-bluecard rounded-md aspect-auto col-span-2"></div>
        <IcpnaCard />
        <AgeCard />
        <div className="bg-bluecard rounded-md aspect-square flex flex-wrap">
          <article className='w-full sm:p-2 p-1 items-center grid grid-cols-4 sm:gap-3 gap-1'>
          <HTML />
          <CSS />
          <JavaScript />
          <Sass />
          <React />
          <Vue />
          <NextJs />
          <ReactQuery />
          <Redux />
          <Tailwind />
          <NodeJs />
          <Git />
          </article>
        </div>  
        <div className="bg-bluecard rounded-md aspect-square"></div>
      </section>
    </main>
  )
}
