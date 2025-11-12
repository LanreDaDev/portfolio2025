import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lanreadebayo.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Lanre Adebayo — Applied AI & Full-Stack Engineer',
    template: '%s | Lanre Adebayo',
  },
  description:
    'Lanre Adebayo is an Applied AI and Full-Stack Engineer building intelligent, intuitive, and high-performance web experiences. Passionate about bridging design, engineering, and AI to create meaningful digital products.',
  openGraph: {
    title: 'Lanre Adebayo — Applied AI & Full-Stack Engineer',
    description:
      'Building intelligent, intuitive, and high-performance web experiences. Portfolio, blog, and projects by Lanre Adebayo.',
    url: 'https://lanreadebayo.com/',
    siteName: 'Lanre Adebayo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lanre Adebayo — Applied AI & Full-Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lanre Adebayo — Applied AI & Full-Stack Engineer',
    description:
      'Applied AI & Full-Stack Engineer focused on building intelligent, human-centered web experiences.',
    creator: '@lanreadebayo', // change to your actual handle if you have one
    images: ['/og-image.png'],
  },
};



const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
              <Analytics />
      </body>
    </html>
  )
}
