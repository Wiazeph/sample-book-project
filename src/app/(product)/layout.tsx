import React from 'react'
import SideBar from '@/components/product/side-bar'

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="Product-Layout flex">
      <SideBar />

      <main className="Main w-full h-dvh">{children}</main>
    </div>
  )
}
