import Providers from '@/utils/provider'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Workout Buddy',
  description: 'Workout Buddy for Gym Rat made using MERN stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <Providers>
            <Navbar />
            <div className="pages">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  )
}
