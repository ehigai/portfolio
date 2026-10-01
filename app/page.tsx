import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"
import { TooltipContent, TooltipTrigger } from "radix-ui/tooltip"

export const metadata: Metadata = {
  description:
    "Hey, I'm Ehigai Salvation — a web sorcerer and system alchemist obsessed with minimalist aesthetics and maximalist performance.",
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40">
      <span className="border-muted font-mono text-base">
        Hello there, I&apos;m
      </span>
      <h1 className="mt-2 mb-4 text-4xl font-bold tracking-tight">
        Ehigai Salvation
      </h1>
      <div className="prose space-y-6 text-lg opacity-80">
        <p>
          <span className="font-mono text-base">Software Developer</span> in{" "}
          <span className="font-mono text-base">Nigeria</span>.
        </p>
        <p>
          I build robust TypeScript backends and high-performance{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help border-b border-dotted border-primary">
                CLI
              </span>
            </TooltipTrigger>
            <TooltipContent>Command Line Interface</TooltipContent>
          </Tooltip>{" "}
          applications with Go. Passionate about open-source communities,
          modular architecture, and shipping tools that work.
        </p>
      </div>
      {/* <div className="mt-16 flex space-x-6">
        <a
          href="#"
          className="flex items-center space-x-2 font-mono text-sm opacity-60 transition-opacity hover:opacity-100"
        >
          <Mail className="h-4 w-4" />
          <span>summon@sorcerer.me</span>
        </a>
      </div> */}
    </div>
  )
}
