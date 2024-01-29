import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mad Cloud Games',
  description: `Welcome to MadCloud Games, where innovation meets imagination. As the CEO, I am proud to lead a team of passionate developers, designers, and artists dedicated to crafting cutting-edge games that redefine interactive entertainment.
   Join us on a journey of limitless creativity and unparalleled gaming experiences.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
