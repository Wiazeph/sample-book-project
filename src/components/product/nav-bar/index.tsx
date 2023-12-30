'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ProductLinks } from '@/utils/consts/nav-links/product'

type Props = {}

const NavBar = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="Product-Links w-full flex flex-col">
      <div className="font-medium py-2 select-none">Product</div>

      <nav className="Product-Links flex flex-col text-sm">
        {ProductLinks.map((plink, index) => (
          <Link
            key={index}
            href={plink.path}
            className={cn(
              'py-2 rounded-md hover:pl-2 hover:bg-zinc-200/50 transition-all ease-in-out',
              pathname === plink.path ? 'NavLink-Active' : 'NavLink'
            )}
          >
            {plink.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
