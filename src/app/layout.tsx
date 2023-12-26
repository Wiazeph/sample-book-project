import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/assets/css/index.css'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background text-foreground font-sans antialiased flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 xl:gap-y-28',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
