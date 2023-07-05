import { Providers } from '@/app/(user)/providers'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-gray-100'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
