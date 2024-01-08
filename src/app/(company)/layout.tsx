'use client'

import React, { useEffect } from 'react'
import NavBar from '@/components/company/nav-bar'
import Footer from '@/components/company/footer'
import { supabase } from '@/utils/supabase/client'
import { useGetSession } from '@/stores/supabase/get-session'
import { useGetUser } from '@/stores/supabase/get-user'

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const setGetSession = useGetSession((state) => state.setSession)
  const setGetUser = useGetUser((state) => state.setUser)

  const fetchData = async () => {
    const { data } = await supabase.auth.getSession()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    setGetSession(data.session)
    setGetUser(user)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <nav className="Nav-Bar sticky top-0">
        <NavBar />
      </nav>

      <main className="Main my-10 sm:my-12 md:my-16 lg:my-20 xl:my-24">
        {children}
      </main>

      <footer className="Footer">
        <Footer />
      </footer>
    </>
  )
}
