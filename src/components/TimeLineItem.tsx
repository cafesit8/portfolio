import { TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem } from '@material-tailwind/react'

type Item = {
  title: string,
  description: string
}

interface TimeLineItemProps {
  item: Item
  index: number
  length: number
}

export default function TimeLineItem ({ item, index, length }: TimeLineItemProps) {
  return (
    <TimelineItem>
      {!(length - 1 === index) && <TimelineConnector />}
      <TimelineHeader className="h-3">
        <TimelineIcon />
        <h5 className='text-white font-baloo400 lg:text-xl text-lg leading-5'>
          {item.title}
        </h5>
      </TimelineHeader>
      <TimelineBody className="pb-8 mt-2 lg:mt-0">
        <p className='text-white/80 lg:text-base text-sm font-[Montserrat]'>
          {item.description}
        </p>
      </TimelineBody>
    </TimelineItem>
  )
}
