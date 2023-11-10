import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ini adalah afi',
  description: 'mencoba react, js, dan next',
}

export default function Buttonhere({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
      }} className={inter.className}>{children}</body>
    </html>
  )
}