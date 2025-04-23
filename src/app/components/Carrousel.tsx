import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SmileBanner from '../assets/smile-banner.jpg'
import MauaFoodBanner from '../assets/mauafood-banner.png'
import { useNavigate } from 'react-router-dom'

export default function Carrousel() {
  const slides = [SmileBanner, MauaFoodBanner, SmileBanner, SmileBanner]
  const titles = ['Smile', 'MauaFood', 'SmartFarm', 'Portfolios']
  const routes = ['smile', 'mauaFood', 'smartFarm', 'portfolios']

  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-1%', '-25.2%'])

  return (
    <section ref={targetRef} className="relative ml-12 h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-start overflow-hidden p-2">
        <motion.div
          className="flex gap-2"
          style={{ x }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.2 }}
        >
          {slides.map((url, mult) => (
            <CarrouselCard
              link={routes[mult]}
              key={url}
              image={url}
              title={titles[mult]}
              duration={0.1 * mult}
            />
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
  duration: number
  link: string
}) {
  const navigate = useNavigate()
  return (
    <motion.div
      key={props.key}
      className="relative h-[98vh] w-[31.3vw] cursor-none overflow-hidden rounded-sm transition-all duration-700 hover:cursor-pointer hover:text-black"
      initial={{ y: '100%' }}
      animate={{ y: '0' }}
      transition={{ type: 'spring', duration: props.duration }}
    >
      <a onClick={() => navigate(props.link)}>
        <img
          src={props.image}
          className="peer size-full cursor-none justify-center object-cover transition-all duration-700 ease-in-out hover:origin-center hover:scale-[1.02] hover:transform hover:opacity-40"
        />
        <h1 className="pointer-events-none absolute right-0 top-1/2 h-full w-full text-center font-mono text-2xl text-transparent transition-all duration-700 ease-in-out peer-hover:text-black">
          {props.title}
        </h1>
      </a>
    </motion.div>
  )
}
