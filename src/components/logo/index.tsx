import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="Logo shrink-0 uppercase">
      <Link href="/">-Logo-</Link>
    </div>
  )
}

export default Logo
