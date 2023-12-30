import React from 'react'
import MyLibraries from './my-libraries'
import Favorites from './favorites'

type Props = {}

const DetailsSection = (props: Props) => {
  return (
    <section className="Details-Section w-full flex flex-col xl:flex-row gap-y-10 gap-x-6">
      <MyLibraries />

      <Favorites />
    </section>
  )
}

export default DetailsSection
