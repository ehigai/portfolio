import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import { Coffee } from "lucide-react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "ehigai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
            <div className="dot-background fixed inset-0 z-0" />
            <Nav />
            <main className="relative z-10 pb-32">{children}</main>
            <footer className="relative z-10 mx-auto flex max-w-2xl items-center justify-between border-t border-black/5 px-6 py-16 font-mono text-xs opacity-40 dark:border-white/5">
              <span>{new Date().getFullYear().toString()} © ehigai</span>
              <div className="flex items-center space-x-1">
                <span>Built with</span>
                <Coffee className="h-3 w-3" />
                <span>and intention</span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
