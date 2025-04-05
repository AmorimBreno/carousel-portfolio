import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function SideBarToggleButton(props: {
  toggleSidebar: () => void
  isOpen: boolean
}) {
  return (
    <button
      onClick={props.toggleSidebar}
      className="r-0 absolute top-1/2 cursor-none"
    >
      <AnimatePresence mode="wait">
        {props.isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <FaXmark size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <FaBars size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
