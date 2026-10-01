"use client"

import { useState } from "react"
import TechnologyCard from "@/components/TechnologyCard"
import { Technology } from "@/app/types"

export default function TechnologyList({
  technologies,
  defaultIndex,
}: {
  technologies: Technology[]
  defaultIndex: number
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const activeIndex = hoveredIndex ?? defaultIndex

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center">
      {technologies.map((technology, i) => (
        <TechnologyCard
          key={technology.name + technology.type}
          {...technology}
          active={activeIndex === i}
          onActivate={() => setHoveredIndex(i)}
        />
      ))}
    </div>
  )
}
