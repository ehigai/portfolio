export type Technology = {
  name: string
  image: string
  type?: string
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  technologies: Technology[]
  githubUrl?: string
  liveUrl?: string
}
