import React, { useState, useEffect } from "react"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Update the smooth position with a slight delay
  useEffect(() => {
    const smoothMove = () => {
      setSmoothPosition({
        x: smoothPosition.x + (position.x - smoothPosition.x) * 0.2,
        y: smoothPosition.y + (position.y - smoothPosition.y) * 0.2,
      })
    }
    const animationFrame = requestAnimationFrame(smoothMove)

    return () => cancelAnimationFrame(animationFrame)
  }, [position, smoothPosition])

  return (
    <div
      className="cursor"
      style={{ left: smoothPosition.x, top: smoothPosition.y }}
    />
  )
}

export default Cursor
