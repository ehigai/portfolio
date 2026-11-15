import { Terminal, Wand2, Coffee } from "lucide-react"

export const PROJECTS = [
  {
    category: "Systems Sorcery",
    items: [
      {
        name: "AetherDB",
        description:
          "A distributed, distributed-only KV store written in pure memory.",
        icon: <Terminal className="h-4 w-4" />,
        link: "#",
      },
      {
        name: "WarpVite",
        description: "HMR so fast it predicts your next line of code.",
        icon: <Wand2 className="h-4 w-4" />,
        link: "#",
      },
    ],
  },
  {
    category: "Web Alchemy",
    items: [
      {
        name: "Philosophical CSS",
        description:
          "A framework where classes are defined by their existential dread.",
        icon: <Coffee className="h-4 w-4" />,
        link: "#",
      },
      {
        name: "CrystalReact",
        description:
          "Zero-runtime React components that compile to pure light.",
        icon: <Wand2 className="h-4 w-4" />,
        link: "#",
      },
    ],
  },
]

export const POSTS = [
  {
    id: "1",
    date: "2024-04-25",
    title: "The Ethics of Recursive Sorcery",
    excerpt:
      "When your code starts writing code that writes code, who is the real sorcerer?",
  },
  {
    id: "2",
    date: "2024-04-10",
    title: "Why I Use 1TB of RAM for My Linter",
    excerpt:
      "System performance is a matter of perspective and fanatical devotion.",
  },
  {
    id: "3",
    date: "2024-03-20",
    title: "Optimizing the Void",
    excerpt: "Deep dive into zero-allocation garbage collectors.",
  },
]

import tsIcon from "@/assets/technologies/typescript.svg"
import nodeIcon from "@/assets/technologies/nodejs.svg"
import prismaIcon from "@/assets/technologies/prisma.svg"
import goIcon from "@/assets/technologies/go.svg"
import postgresqlIcon from "@/assets/technologies/postgresql.svg"
import reactIcon from "@/assets/technologies/react.svg"
import { Project, Technology } from "./types"

export const domainUrl = "https://stoicdev.cc"
export const metadataDescription =
  "Hi there, I'm Ehigai Salvation. I build robust TypeScript backends and high-performance CLI applications."

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    image: tsIcon,
    type: "Language",
  },
  {
    name: "Go",
    image: goIcon,
    type: "Language",
  },

  {
    name: "React.js",
    image: reactIcon,
    type: "Framework",
  },

  {
    name: "Node.js",
    image: nodeIcon,
    type: "Runtime",
  },
  {
    name: "Prisma",
    image: prismaIcon,
    type: "ORM",
  },

  {
    name: "PostgreSQL",
    image: postgresqlIcon,
    type: "Database",
  },
]

export const projects: Project[] = [
  {
    id: "counter",
    name: "Counter",
    description: "A stateless and scalable counting API written in Go",
    technologies: [{ name: "Go" }, { name: "Redis" }],
    githubUrl: "https://github.com/ehigai/counter",
    liveUrl: "https://github.com/ehigai/counter",
  },
  {
    id: "galleric",
    name: "Galleric",
    description:
      "A fast, lightweight gallery designed to effortlessly organize, showcase, and manage your media assets.",
    technologies: [{ name: "Typescript" }],
    githubUrl: "https://github.com/ehigai/galleric",
    liveUrl: "https://galleric.vercel.app",
  },
]
