import { motion } from 'framer-motion'

export default function Carrousel() {
  const slides = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500']

  return (
    <div className="relative ml-12 h-[400vh]">
      <motion.div className="sticky top-0 flex h-screen items-center justify-start overflow-hidden p-2">
        <div className="flex gap-2">
          {slides.map((i) => (
            <div
              key={i}
              className="h-[98vh] w-[480px] rounded-sm bg-gray-300"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
