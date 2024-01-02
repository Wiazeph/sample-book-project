import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {}

const Logo = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="Logo shrink-0 uppercase">
      <Link href={pathname !== '/' ? '/' : ''}>-Logo-</Link>
    </div>
  )
}

export default Logo
