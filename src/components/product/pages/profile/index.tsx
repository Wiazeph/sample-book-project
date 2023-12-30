import React from 'react'

type Props = {}

const ProfileComponent = (props: Props) => {
  return (
    <div className="Profile Page items-center gap-y-16">
      <section className="Profile-Section p-6 w-full flex flex-col items-center gap-y-4 border rounded-md">
        <div className="Avatar w-32 h-32 rounded-full border hover:scale-110 transition-all ease-in-out"></div>

        <div className="Username text-zinc-600">
          <span>@</span>
          <span>username</span>
        </div>

        <div className="About max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consequuntur quia cupiditate iure voluptatibus impedit laborum.
        </div>
      </section>

      <section className="Details-Section w-full flex flex-col xl:flex-row gap-y-10 gap-x-6">
        <div className="flex flex-col gap-y-4">
          <div className="font-medium text-lg">My Libraries</div>

          <div className="My-Libraries-List relative p-6 w-full max-h-60 sm:max-h-62 md:max-h-64 mdl:max-h-66 lg:max-h-68 lgx:max-h-72 xl:max-h-80 xl2:max-h-96 flex flex-col gap-y-6 border rounded-md overflow-auto no-scrollbar">
            <div className="h-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              doloremque modi aperiam voluptas, quae corporis nihil tenetur
              quibusdam, dolorem quia laboriosam aliquam sint velit cum magnam
              alias architecto quo impedit.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-medium text-lg">Favorites</div>

          <div className="Favorite-List relative p-6 w-full max-h-60 sm:max-h-62 md:max-h-64 mdl:max-h-66 lg:max-h-68 lgx:max-h-72 xl:max-h-80 xl2:max-h-96 flex flex-col gap-y-6 border rounded-md overflow-auto no-scrollbar">
            <div className="h-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              doloremque modi aperiam voluptas, quae corporis nihil tenetur
              quibusdam, dolorem quia laboriosam aliquam sint velit cum magnam
              alias architecto quo impedit.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileComponent
