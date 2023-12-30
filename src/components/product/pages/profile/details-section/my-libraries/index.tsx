import React from 'react'

type Props = {}

const MyLibraries = (props: Props) => {
  return (
    <div className="My-Libraries flex flex-col gap-y-4">
      <div className="font-medium text-lg">My Libraries</div>

      <div className="My-Libraries-List relative p-6 w-full max-h-60 sm:max-h-62 md:max-h-64 mdl:max-h-66 lg:max-h-68 lgx:max-h-72 xl:max-h-80 xl2:max-h-96 flex flex-col gap-y-6 border rounded-md overflow-auto no-scrollbar">
        <div className="h-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloremque modi aperiam voluptas, quae corporis nihil tenetur
          quibusdam, dolorem quia laboriosam aliquam sint velit cum magnam alias
          architecto quo impedit.
        </div>
      </div>
    </div>
  )
}

export default MyLibraries
