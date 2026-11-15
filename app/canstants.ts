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
