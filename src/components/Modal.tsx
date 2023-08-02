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
        <section className='w-full h-full bg-bluebg text-white p-5 rounded-xl'>
        {info.title}
        </section>
      </DialogBody>
    </Dialog>
  )
}
