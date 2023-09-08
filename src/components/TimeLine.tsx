import { Timeline } from '@material-tailwind/react'
import TimeLineItem from './TimeLineItem'
import { experience } from '../data/timeLine'

export default function DefaultTimeline () {
  return (
    <div className="w-full">
      <Timeline>
        {experience.map((item, index) => (
          <TimeLineItem key={item.title} item={item} length={experience.length} index={index} />
        ))}
      </Timeline>
    </div>
  )
}
