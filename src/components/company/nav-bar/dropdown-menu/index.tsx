'use client'

// shadcn/ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// shadcn/ui
import React from 'react'
import { ProductLinks } from '@/utils/consts/nav-links/product'
import { useUserSession } from '@/stores/supabase/user-session'
import Link from 'next/link'

type Props = {}

const NavDropdownMenu = (props: Props) => {
  const userData = useUserSession((state) => state.user)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={userData?.user?.avatar_url}
            alt={'@' + userData?.user?.user_metadata.full_name}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {userData?.user?.user_metadata.full_name}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="-mt-1 text-[13px] text-zinc-600 dark:text-zinc-400">
          @{userData?.user?.user_metadata.username}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {ProductLinks.map((plink, index) =>
          index < ProductLinks.length - 1 ? (
            <Link href={plink.path} key={index}>
              <DropdownMenuItem>{plink.title}</DropdownMenuItem>
            </Link>
          ) : null
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <button className="px-2 py-1.5 w-full text-left text-red-500">
            Log Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavDropdownMenu
