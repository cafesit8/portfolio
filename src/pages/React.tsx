import ProjectCard from '../components/ProjectCard'
import { react } from '../data/react'

export default function React () {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {react.map(item => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
