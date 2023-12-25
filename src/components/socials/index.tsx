import React from 'react'
import { SocialLinks } from '@/utils/consts/socials'

type Props = {}

const Socials = (props: Props) => {
  return (
    <ul className="Social-Links flex items-center gap-x-4 sm:gap-x-5">
      {SocialLinks.map((slink, index) => (
        <li key={index}>
          <a href={slink.path} target="_blank" rel="noopener noreferrer">
            {slink.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
