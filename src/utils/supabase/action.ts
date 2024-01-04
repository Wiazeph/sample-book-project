import { supabase } from '@/utils/supabase/client'
import { useUserSession } from '@/stores/supabase/user-session'

const UserSession = async () => {
  const setUserData = useUserSession((state) => state.setUser)

  try {
    const { data } = await supabase.auth.getSession()

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    setUserData({ session: data.session, user, error })
  } catch (error) {
    console.error('Error fetching user session:', error)
  }
}

export default UserSession
