"use client"

import { useState } from "react"

export function ProductImage({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [active, setActive] = useState(0)

  return (
    <img
      src={images[active]}
      alt={name}
      className="w-full h-full object-cover
                 transition-all duration-500
                 hover:scale-105"
      onMouseEnter={() => images[1] && setActive(1)}
      onMouseLeave={() => setActive(0)}
    />
  )
}
