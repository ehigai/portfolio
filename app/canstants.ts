import { Technology } from "@/components/TechnologyCard"
import tsIcon from "@/assets/technologies/typescript.svg"
import nodeIcon from "@/assets/technologies/nodejs.svg"
import prismaIcon from "@/assets/technologies/prisma.svg"
import goIcon from "@/assets/technologies/go.svg"
import postgresqlIcon from "@/assets/technologies/postgresql.svg"
import dockerIcon from "@/assets/technologies/docker.svg"
import reactIcon from "@/assets/technologies/react.svg"

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
