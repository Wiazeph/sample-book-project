import React from 'react'
import Link from 'next/link'

type Props = {}

const AuthButtons = (props: Props) => {
  return (
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
  )
}

export default AuthButtons
