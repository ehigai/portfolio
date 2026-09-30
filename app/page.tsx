import type { Metadata } from "next"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  description:
    "Hey, I'm Ehigai Salvation — a web sorcerer and system alchemist obsessed with minimalist aesthetics and maximalist performance.",
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Ehigai Salvation
      </h1>
      <div className="prose space-y-6 text-lg opacity-80">
        <p>
          Hey! I&apos;m Ehigai Salvation, a{" "}
          <span className="border-b border-muted font-mono text-base">
            web sorcerer
          </span>{" "}
          and{" "}
          <span className="border-b border-muted font-mono text-base">
            system alchemist
          </span>
          .
        </p>
        <p>
          I spend my days architecting ethereal systems and weaving
          high-performance web structures. I&apos;m obsessed with the intersection of{" "}
          <span className="italic">minimalist aesthetics</span> and{" "}
          <span className="italic">maximalist performance</span>.
        </p>
        <p>
          Currently obsessing over memory-safe languages, zero-cost
          abstractions, and how to make the web feel like magic again.
        </p>
      </div>

      <div className="mt-16 flex space-x-6">
        <a
          href="#"
          className="flex items-center space-x-2 font-mono text-sm opacity-60 transition-opacity hover:opacity-100"
        >
          <Mail className="h-4 w-4" />
          <span>summon@sorcerer.me</span>
        </a>
      </div>
    </div>
  )
}
