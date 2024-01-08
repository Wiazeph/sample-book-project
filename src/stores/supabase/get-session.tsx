import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Props = {
  session: any
  setSession: (props: any) => void
}

export const useGetSession = create(
  persist<Props>(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
    }),
    {
      name: 'user-session',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

// export const useGetSession = create<Props>((set) => ({
//   session: null,
//   setSession: (session) => set({ session }),
// }))

// const setGetSession = useGetSession((state) => state.setSession)
// const sessionResult = useGetSession((state) => state.session)
