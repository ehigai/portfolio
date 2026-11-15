import "./globals.css"

import type { Metadata } from "next"
import { Geist_Mono, Inter, Parisienne } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import { Coffee } from "lucide-react"
import { TooltipProvider } from "radix-ui/tooltip"
import { domainUrl, metadataDescription } from "@/lib/data"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
})

export const metadata: Metadata = {
  metadataBase: new URL(domainUrl),
  title: {
    default: "Ehigai Salvation",
    template: "%s · Ehigai Salvation",
  },
  description: metadataDescription,
  keywords: [
    "ehigai",
    "ehigai salvation",
    "web developer",
    "software engineer",
    "software developer",
    "portfolio",
    "frontend",
    "full-stack",
    "stoicdev",
    "stoic dev",
  ],
  authors: [{ name: "Ehigai Salvation" }],
  creator: "Ehigai Salvation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: domainUrl,
    siteName: "Ehigai Salvation",
    title: "Ehigai Salvation — Software Developer",
    description: metadataDescription,
  },
  twitter: {
    card: "summary",
    title: "Ehigai Salvation — Software Developer",
    description: metadataDescription,
    creator: "@ehigaisalvation",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        inter.variable,
        parisienne.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative flex w-full flex-col items-center justify-between overflow-x-hidden transition-colors duration-500 md:flex">
              {/* <div className="dot-background fixed inset-0 z-0" /> */}
              <Nav />
              <main className="w-full flex-1 border">{children}</main>
              <footer className="mx-auto flex max-w-2xl justify-between px-6 py-16 font-mono text-xs opacity-40 lg:items-center dark:border-white/5">
                <span>{new Date().getFullYear().toString()} © ehigai</span>
                <div className="flex items-center space-x-1">
                  <span>Built with</span>
                  <Coffee className="h-3 w-3" />
                  <span>and intention</span>
                </div>
              </footer>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
