'use server'

import createSupabaseServerClient from './server'

const readUserSession = async () => {
  const supabase = await createSupabaseServerClient()

  return supabase.auth.getSession()
}

export default readUserSession
