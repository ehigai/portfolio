import type { Metadata } from "next"
import { Geist_Mono, Inter, Parisienne } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import { Coffee } from "lucide-react"
import { TooltipProvider } from "radix-ui/tooltip"

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
  metadataBase: new URL("https://ehigai.dev"),
  title: {
    default: "ehigai",
    template: "%s · ehigai",
  },
  description:
    "Ehigai Salvation — web sorcerer and system alchemist. Building performant, minimal, and intentional software.",
  keywords: [
    "ehigai",
    "web developer",
    "software engineer",
    "portfolio",
    "frontend",
    "full-stack",
  ],
  authors: [{ name: "Ehigai Salvation" }],
  creator: "Ehigai Salvation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stoicdev.cc",
    siteName: "ehigai",
    title: "ehigai — web sorcerer & system alchemist",
    description:
      "Building performant, minimal, and intentional software. Obsessed with minimalist aesthetics and maximalist performance.",
  },
  twitter: {
    card: "summary",
    title: "ehigai — web sorcerer & system alchemist",
    description: "Building performant, minimal, and intentional software.",
    creator: "@ehigai",
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
