import { create } from 'zustand'

type Props = {
  theme: string | null
  setTheme: (theme: string) => void
}
const initialTheme =
  typeof window !== 'undefined' ? localStorage.getItem('theme') : 'System'

export const useThemeStore = create<Props>((set) => ({
  theme: initialTheme,
  setTheme: (theme) => set({ theme }),
}))
