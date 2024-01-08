import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

const LogoComponent = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="Logo shrink-0 uppercase">
      <Link href={pathname !== '/' ? '/' : ''}>-Logo-</Link>
    </div>
  )
}

export default LogoComponent
