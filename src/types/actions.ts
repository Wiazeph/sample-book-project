'use server'

import createSupabaseServerClient from '@/utils/supabase/server'

interface SignUpValues {
  email: string
  password: string
  confirm: string
  options: {
    data: {
      full_name: string
      username: string
    }
  }
}

export async function signUpWithEmailAndPassword(values: SignUpValues) {
  const supabase = await createSupabaseServerClient()

  const result = await supabase.auth.signUp(values)

  return JSON.stringify(result)
}
