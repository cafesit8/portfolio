import { ReactElement } from 'react'
import { create } from 'zustand'

type infoType = {
  title: string
    img: string
    description: string
    skills: (() => ReactElement)[]
    bg: string
}

interface GlobalStore {
  info: Partial<infoType>
  getInfo: (info: infoType) => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  info: {},
  getInfo: (info: infoType) => set({ info })
}))
