import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  linkList: { title: string; path: string }[]
  linkType: string
}

const LinkLists = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className={`${props.linkType}-Links`}>
      <div className="font-bold">{props.linkType}</div>
      <ul className="mt-5 flex flex-col gap-y-4 sm:gap-y-5">
        {props.linkList.map((link, index) => (
          <li key={index} className="w-fit">
            <Link
              href={link.path}
              className={pathname === link.path ? 'NavLink-Active' : 'NavLink'}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkLists
