import { create } from 'zustand'

type Props = {
  theme: string | null
  setTheme: (theme: string) => void
}

export const useThemeStore = create<Props>((set) => ({
  theme: localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'System',
  setTheme: (theme) => set({ theme }),
}))
