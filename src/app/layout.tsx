

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import './globals.css'
import { Poppins, Open_Sans,Prompt} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const prompt = Prompt({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'thai'],  // รองรับทั้งภาษาอังกฤษและไทย
  display: 'swap',
  variable: '--font-prompt',
})

export const metadata: Metadata = {
  title: 'NB-Hospital Dashboard',
  description: 'Dashboard for hospital management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <div className="flex bg-gray-100">
          <Sidebar />
          <div className="flex-1">
            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}