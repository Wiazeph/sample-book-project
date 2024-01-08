import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Props = {
  user: any
  setUser: (props: any) => void
}

export const useGetUser = create(
  persist<Props>(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user }),
    }),
    {
      name: 'user-data',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

// export const useGetUser = create<Props>((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
// }))

// const setGetUser = useGetUser((state) => state.setUser)
// const userResult = useGetUser((state) => state.user)
