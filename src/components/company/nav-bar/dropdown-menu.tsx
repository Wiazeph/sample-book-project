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
import Link from 'next/link'
import useStore from '@/stores/supabase/useStore'
import { useGetUser } from '@/stores/supabase/get-user'
import ProductLinks from '@/utils/consts/nav-links/product'
import LogOutButton from '@/components/auth/log-out'

type Props = {}

const DropdownMenuComponent = (props: Props) => {
  const userResult = useStore(useGetUser, (state) => state.user)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={userResult?.avatar_url}
            alt={'@' + userResult?.user_metadata.full_name}
          />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          {userResult?.user_metadata.full_name}
        </DropdownMenuLabel>

        <DropdownMenuLabel className="-mt-1 text-[13px] text-zinc-600 dark:text-zinc-400">
          @{userResult?.user_metadata.username}
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
          <LogOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
