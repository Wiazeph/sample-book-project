'use client'

// shadcn/ui
import { Separator } from '@/components/ui/separator'
// shadcn/ui
import React from 'react'
import { CompanyLinks } from '@/utils/consts/nav-links/company'
import { ProductLinks } from '@/utils/consts/nav-links/product'
import { LegalLinks } from '@/utils/consts/nav-links/legal'
import LinkLists from './link-lists'
import Logo from '@/components/logo'
import Socials from '@/components/socials'
import Appearance from '@/components/ui/appearance'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="container mx-auto">
      <Separator />

      <div className="py-6 sm:py-7 md:py-8 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 flex flex-wrap gap-x-16 gap-y-10 justify-between text-sm sm:text-base">
        <div className="flex flex-col gap-y-4 sm:gap-y-5">
          <Logo />

          <div className="">Description</div>

          <Socials />
        </div>

        <div className="flex flex-wrap gap-x-10 sm:gap-x-14 md:gap-x-20 lg:gap-x-28 gap-y-10">
          <LinkLists linkList={CompanyLinks} linkType="Company" />
          <LinkLists linkList={ProductLinks} linkType="Product" />
          <LinkLists linkList={LegalLinks} linkType="Legal" />
        </div>
      </div>

      <Separator />

      <div className="py-6 sm:py-7 md:py-8 flex flex-wrap-reverse items-center gap-y-4 sm:gap-y-5 gap-x-[94.5px] justify-between">
        <div className="text-xs sm:text-sm">
          © Copyright 2024. [name] Technologies.
        </div>

        <Appearance separator={true} title={true} />
      </div>
    </div>
  )
}

export default Footer
