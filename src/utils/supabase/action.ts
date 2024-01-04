import { supabase } from '@/utils/supabase/client'
import { useUserSession } from '@/stores/supabase/user-session'

export const UserSession = async () => {
  const setUserData = useUserSession((state) => state.setUser)

  const { data } = await supabase.auth.getSession()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  setUserData({ session: data.session, user, error })
}
