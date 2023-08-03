import {
  Dialog,
  DialogBody
} from '@material-tailwind/react'
import { useGlobalStore } from '../state/state'

interface ModalProps {
  open: boolean
  handleOpen: () => void
}

export function Modal ({ open, handleOpen }: ModalProps) {
  const { info } = useGlobalStore()
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 }
      }}
      className='rounded-xl'
    >
      <DialogBody className={`${info.bg} rounded-xl p-3`}>
        <section className='w-full h-full flex flex-col relative bg-bluebg text-white p-5 rounded-xl'>
          <button onClick={handleOpen} className='absolute right-6 top-6 w-[12px] h-[12px]'>
            <svg version="1.1" className='text-white w-full h-full object-contain'>
              <line x1="1" y1="11"
                x2="11" y2="1"
                stroke="white"
                stroke-width="2" />
              <line x1="1" y1="1"
                x2="11" y2="11"
                stroke="white"
                stroke-width="2" />
            </svg>
          </button>
          <h2 className='md:text-3xl text-lg font-bold font-baloo400'>{info.title}</h2>
          <article className='flex flex-col gap-4'>
            <div className='md:overflow-auto overflow-y-scroll md:max-h-full max-h-[130px]'>
              <p className='text-white/90 md:text-[16px] text-[14px]'>{info.description}</p>
            </div>
            <div className='flex gap-3'>
              {info.skills?.map(skill => (
                <div className='w-[40px]'>{skill()}</div>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
              <article className=''>
                <h6 className='relative md:text-[18px] text-[15px] font-baloo400 flex items-center leading-none text-lg gap-3'>Website <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white/90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></h6>
                <a className='underline text-white/80 md:text-[16px] text-[14px]' target='_blank' href={info.url}>{info.url}</a>
              </article>
              <article>
                <h6 className='relative md:text-[18px] text-[15px] font-baloo400 flex items-center leading-none text-lg gap-3'>Github <svg className='text-white/90' stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></h6>
                <a className='underline text-white/80 md:text-[16px] text-[14px]' target='_blank' href={info.github}>{info.github}</a>
              </article>
            </div>
          </article>
        </section>
      </DialogBody>
    </Dialog>
  )
}
