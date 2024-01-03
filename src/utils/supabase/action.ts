'use server'

import createSupabaseServerClient from './server'

const userSession = async () => {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase.auth.getSession()

  if (data.session) {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(data.session?.access_token)

    if (error) {
      return { error }
    } else {
      return {
        data: { session: data.session, user },
      }
    }
  } else return { error: { message: 'No session' } }
}

export default userSession
