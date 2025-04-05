import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function PageLink(props: {
  title: string
  link: string
  delay: number
  closeSidebar: () => void
}) {
  const navigate = useNavigate()

  const followLink = () => {
    props.closeSidebar()

    setTimeout(() => navigate(props.link), 100)
  }

  return (
    <motion.a
      onClick={followLink}
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
