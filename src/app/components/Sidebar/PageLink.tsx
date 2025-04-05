import { motion } from 'framer-motion'

export default function PageLink(props: {
  title: string
  link: string
  delay: number
}) {
  return (
    <motion.a
      href={props.link}
      className="cursor-none hover:underline"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3, delay: props.delay }}
    >
      {props.title}
    </motion.a>
  )
}
