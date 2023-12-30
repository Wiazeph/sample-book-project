import React from 'react'
import ProfileSection from './profile-section'
import DetailsSection from './details-section'

type Props = {}

const ProfileComponent = (props: Props) => {
  return (
    <div className="Profile Page items-center gap-y-16">
      <ProfileSection />

      <DetailsSection />
    </div>
  )
}

export default ProfileComponent
