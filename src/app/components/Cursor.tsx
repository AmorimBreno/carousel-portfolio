import {motion } from 'framer-motion'
import { useState } from 'react'
import { useCursor } from '../hooks/use-cursor'

export function Cursor() {
  const [cursorVariant] = useState('default')

  const { mousePosition } = useCursor()

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
