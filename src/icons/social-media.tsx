import github from '../assets/github.svg'
import whatsapp from '../assets/whatsapp.svg'
import icpna from '../assets/icpna.webp'

export function Linkedin () {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-4xl md:text-7xl lg:text-9xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  )
}
export const Github = () => <img width={150} height={100} src={github} alt='logo de github' />

export const Whatsaap = () => <img width={150} height={150} src={whatsapp} alt='logo de whatsapp' />

export function Email () {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
  )
}

export const Icpna = () => <img width={466} height={108} src={icpna} alt="logo de icpna" />
