import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SmileBanner from '../assets/smile-banner.jpg'

export default function Carrousel() {
  const slides = [SmileBanner, SmileBanner, SmileBanner, SmileBanner]

  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25.2%'])

  return (
    <section ref={targetRef} className="relative ml-12 h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-start overflow-hidden p-2">
        <motion.div
          className="flex gap-2"
          style={{ x }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {slides.map((url) => (
            <CarrouselCard key={url} image={url} title={'teste'} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function CarrouselCard(props: {
  key: string
  image: string
  title: string
}) {
  return (
    <div
      key={props.key}
      className="relative h-[98vh] w-[31.3vw] overflow-hidden rounded-sm transition-all duration-700 hover:text-black"
    >
      <img
        src={props.image}
        className="peer size-full justify-center object-cover transition-all duration-700 ease-in-out hover:origin-center hover:scale-[1.02] hover:transform hover:opacity-40"
      />
      <h1 className="f pointer-events-none invisible absolute right-[47%] top-1/2 font-mono text-lg text-black peer-hover:visible">
        {props.title}
      </h1>
    </div>
  )
}
