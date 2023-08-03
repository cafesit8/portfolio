import ProjectCard from '../components/ProjectCard'
import { Js as HTMLCSSJS } from '../data/js'

export default function Js () {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
        {HTMLCSSJS.map(item => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
