import React from 'react'
import { redirect } from 'next/navigation'
import { supabase } from '@/utils/supabase/client'

type Props = {}

const LogOutComponent = (props: Props) => {
  const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return { error }
    }

    redirect('/')
  }

  return (
    <form action={logOut} className="w-full h-full">
      <button className="px-2 py-1.5 w-full text-left text-red-500">
        Log Out
      </button>
    </form>
  )
}

export default LogOutComponent
