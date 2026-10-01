import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"
import { TooltipContent, TooltipTrigger } from "radix-ui/tooltip"
import { Button } from "@/components/ui/button"
import { technologies } from "./canstants"
import TechnologyCard from "@/components/TechnologyCard"

export const metadata: Metadata = {
  description:
    "Hey, I'm Ehigai Salvation — a web sorcerer and system alchemist obsessed with minimalist aesthetics and maximalist performance.",
}

export default function Home() {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-fit max-w-2xl flex-col justify-center px-6 lg:text-center">
        <span className="border-muted font-mono text-base">
          Hello there, I&apos;m
        </span>
        <h1 className="mt-2 mb-4 text-4xl font-bold tracking-tight lg:text-7xl">
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
          <div className="flex w-full gap-4 lg:justify-center">
            <Button>View Projects</Button>
            <Button variant="secondary">Download Resume</Button>
          </div>
          <a
            href="#"
            className="mt-2 flex w-full items-center space-x-2 font-mono text-sm opacity-60 transition-opacity hover:opacity-100 lg:justify-center"
          >
            <Mail className="h-4 w-4" />
            <span>ehigaisalvation@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mx-auto w-full px-4 md:w-fit md:px-0">
        <h2 className="my-6 font-mono text-2xl font-bold md:my-8 md:text-3xl">
          Current Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.name + technology.type}
              {...technology}
            />
          ))}
        </div>
      </div>
    </>
  )
}
