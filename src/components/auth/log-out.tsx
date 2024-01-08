// shadcn/ui
import { useToast } from '@/components/ui/use-toast'
// shadcn/ui
import React from 'react'
import { usePathname, useRouter, redirect } from 'next/navigation'
import { supabase } from '@/utils/supabase/client'

type Props = {}

const LogOutComponent = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const { toast } = useToast()

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (!error) {
      toast({
        title: 'Successfully Log Out',
        description:
          'You have logged out successfully and you have been directed to the home page.',
      })

      if (pathname === '/') {
        return router.refresh()
      }

      redirect('/')
    } else {
      return toast({
        variant: 'destructive',
        title: 'Log Out Failed!',
        description: (
          <>
            <div>There was a problem with your logout. Please try again.</div>
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Error: {error.message}</code>
            </pre>
          </>
        ),
      })
    }
  }

  return (
    <form action={logOut} className="Log-Out w-full h-full">
      <button className="px-2 py-1.5 w-full text-left text-red-500">
        Log Out
      </button>
    </form>
  )
}

export default LogOutComponent
