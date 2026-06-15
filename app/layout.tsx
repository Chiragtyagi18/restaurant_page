import { Analytics } from '@vercel/analytics/next'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const geistSans = Geist({ 
  variable: '--font-geist-sans', 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Flavors & Fire - Premium Fine Dining',
  description: 'Experience culinary excellence at Flavors & Fire. Award-winning fine dining restaurant offering innovative cuisine in an elegant atmosphere.',
  
  icons: {
    icon: '/apple-icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0F' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable} ${geistSans.variable}`}>
        <body className="font-sans antialiased text-foreground bg-background">
          <ThemeProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
