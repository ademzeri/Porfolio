import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Adem's Portfolio",
  description: 'Adem Zeri is a Frontend Developer based in Tunisia, Sousse.',}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <main className='bg-background'>
          <Navbar />
          {children}
        </main>
        </body>
        <Analytics/>
    </html>
  )
}
