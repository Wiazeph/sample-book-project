import { create } from 'zustand'

type Props = {
  user: any
  setUser: (props: any) => void
}

export const useUserSession = create<Props>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
