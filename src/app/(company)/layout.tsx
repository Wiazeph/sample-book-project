import React from 'react'
import NavBar from '@/components/company/nav-bar'
import Footer from '@/components/company/footer'

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
