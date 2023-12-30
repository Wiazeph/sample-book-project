import React from 'react'

type Props = {}

const ProfileSection = (props: Props) => {
  return (
    <section className="Profile-Section p-6 w-full flex items-center justify-center gap-x-4 border rounded-md">
      <div className="Avatar w-32 h-32 rounded-full border hover:scale-110 transition-all ease-in-out"></div>

      <div className="flex flex-col gap-y-1">
        <div className="Full-Name text-xl">Full Name</div>

        <div className="Username flex items-center gap-x-3 text-zinc-600 dark:text-zinc-400">
          <div>
            <span>@</span>
            <span>username</span>
          </div>

          <div className="h-1 w-1 bg-red-500"></div>

          <div className="Since">Member Since ...</div>
        </div>

        <div className="About">Lorem ipsum, dolor sit amet</div>

        <div className="Socials flex gap-x-2">
          <div className="">ICON Twitter</div>
          <div className="">ICON Instagram</div>
          <div className="">ICON Snapchat</div>
          <div className="">ICON Reddit</div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
