import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Carrousel() {
  const slides = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500']

  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section ref={targetRef} className="relative ml-12 h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-start overflow-hidden p-2">
        <motion.div className="flex gap-2" style={{ x }}>
          {slides.map((i) => (
            <div
              key={i}
              className="h-[98vh] w-[31.6vw] rounded-sm bg-gray-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
