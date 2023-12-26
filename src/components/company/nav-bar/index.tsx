'use client'

// shadcn/ui
import { Separator } from '@/components/ui/separator'
// shadcn/ui
import React, { useMemo } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/logo'
import { CompanyLinks } from '@/utils/consts/nav-links/company'
import Appearance from '@/components/ui/appearance'
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks'
import { cn } from '@/lib/utils'

type Props = {}

const NavBar = (props: Props) => {
  const [isActive, setIsActive] = useState(false)
  const handleOnClick = () => setIsActive(!isActive)
  const activeClass = isActive && 'active'

  const pathname = usePathname()

  const [{ y }] = useWindowScroll()
  const { width } = useWindowSize()

  const isLogoShow = useMemo(
    () => (width && width < 896 ? <Logo /> : null),
    [width]
  )

  const isScrolled = useMemo(
    () => (width && width < 896 ? y !== null && y > 50 : y !== null && y > 80),
    [width, y]
  )

  const classes = useMemo(
    () => ({
      parent: cn('bg-background', isScrolled && 'border-b'),
    }),
    [isScrolled]
  )

  return (
    <div className={classes.parent}>
      <div className="container h-16 flex items-center justify-between mdl:justify-start gap-x-10 overflow-hidden">
        <Logo />

        <svg
          className={`Hamburger-Menu Menu-Rotate Ham-Menu ${activeClass} -mr-3.5 w-14 h-14 block mdl:hidden`}
          viewBox="0 0 100 100"
          onClick={handleOnClick}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>

        <div className="Menu w-64 sm:w-72 md:w-80 h-dvh absolute top-0 flex flex-col items-center justify-center gap-10 bg-background mdl:bg-transparent -translate-x-[calc(100%+16px)] transition-transform duration-500 ease-in-out border-r mdl:w-full mdl:h-auto mdl:static mdl:top-0 mdl:-translate-x-0 mdl:flex-row mdl:justify-between mdl:border-none">
          {isLogoShow}

          <div className="flex flex-col items-center gap-4 sm:gap-5 mdl:flex-row">
            {CompanyLinks.map((clink, index) => (
              <Link
                key={index}
                href={clink.path}
                className={
                  pathname === clink.path ? 'NavLink-Active' : 'NavLink'
                }
              >
                {clink.title}
              </Link>
            ))}
            <Separator
              orientation="vertical"
              className="hidden mdl:block h-6"
            />
            <Link
              href="/libraries"
              className={
                pathname === '/libraries'
                  ? 'NavLink-Active'
                  : 'NavLink w-max lg:flex lg:gap-x-1.5'
              }
            >
              <span className="hidden lg:inline">Explore</span>
              <span>Libraries</span>
            </Link>
          </div>

          <div className="flex flex-col-reverse items-center gap-4 sm:gap-5 mdl:flex-row">
            <Appearance separator={false} title={false} />

            <Separator
              orientation="vertical"
              className="hidden mdl:block h-6"
            />

            <div className="flex flex-col items-center gap-4 sm:gap-5 mdl:flex-row">
              <Link href="/auth/login" className="NavLink w-max">
                Log In
              </Link>

              <Link
                href="/auth/signup"
                className="relative w-max h-9 px-3 flex items-center justify-center text-zinc-50 bg-zinc-800 border transition-colors rounded-md cursor-pointer overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-1/3 before:bg-zinc-50/30 before:blur before:select-none before:translate-x-[-260%] before:skew-x-[-20deg] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-[260%] hover:before:skew-x-[-20deg]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
