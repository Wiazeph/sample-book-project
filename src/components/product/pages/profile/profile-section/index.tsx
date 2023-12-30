import React from 'react'

type Props = {}

const ProfileSection = (props: Props) => {
  return (
    <section className="Profile-Section p-6 w-full flex flex-col items-center gap-y-4 border rounded-md">
      <div className="Avatar w-32 h-32 rounded-full border hover:scale-110 transition-all ease-in-out"></div>

      <div className="Username text-zinc-600 dark:text-zinc-400">
        <span>@</span>
        <span>username</span>
      </div>

      <div className="About max-w-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur quia cupiditate iure voluptatibus impedit laborum.
      </div>
    </section>
  )
}

export default ProfileSection
