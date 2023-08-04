import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'
import { data } from '../data'
import { useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Tabss () {
  const [activeTab, setActiveTab] = useState('react')
  return (
    <Tabs value={activeTab} id="custom-animation">
      <TabsHeader className='bg-bluecard' indicatorProps={{
        className: 'bg-[#3B517D]'
      }}>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className='text-white'
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 }
        }}>
        {data.map(({ value, content, label }) => (
          <TabPanel className='text-white mt-4 w-full p-0' key={label} value={value}>
            <div className="w-full h-full grid lg:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
              {content.map(item => (
                <ProjectCard key={item.title} item={item} />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
