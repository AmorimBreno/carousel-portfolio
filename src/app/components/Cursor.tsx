import { easeInOut, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8
    }
  }

  const transition = {
    duration: 0.2,
    type: 'spring',
    bounce: 0.5
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-20 h-6 w-6 rounded-full bg-black text-white"
      variants={variants}
      transition={transition}
      animate={cursorVariant}
    ></motion.div>
  )
}
