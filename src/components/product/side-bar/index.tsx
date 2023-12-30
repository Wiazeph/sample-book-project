import React from 'react'
// shadcn/ui
import { Separator } from '@/components/ui/separator'
// shadcn/ui
import Logo from '@/components/logo'
import Socials from '@/components/socials'
import NavBar from '@/components/product/nav-bar'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="Side-Bar p-4 sm:p-5 md:p-6 h-dvh w-16 sm:w-18 md:w-58 mdl:w-60 lg:w-62 lgx:w-64 xl:w-66 xl2:w-68 flex flex-col items-center gap-y-4 sm:gap-y-5 md:gap-y-6 shrink-0 bg-zinc-50">
      <Logo />

      <Socials />

      <Separator />

      <NavBar />
    </div>
  )
}

export default SideBar
