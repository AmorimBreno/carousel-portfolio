import { useState } from 'react'
import { FaGithub, FaLinkedin, FaFlask } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import PageLink from './PageLink.js'
import SideBarToggleButton from './SideBarToggleButton.js'
import { useSidebar } from '@/app/hooks/use-sidebar.js'

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar()
  const [showContent, setShowContent] = useState(false)

  const openSidebar = () => {
    toggleSidebar()
    setTimeout(() => setShowContent(true), 50)
  }

  const closeSidebar = () => {
    setShowContent(false)
    setTimeout(() => toggleSidebar(), 50)
  }

  const handleSideBar = () => {
    if (!isOpen) {
      openSidebar()
    } else {
      closeSidebar()
    }
  }

  return (
    <div
      className={`${isOpen ? 'm:w-[60%] w-[80%] sm:w-[50%]' : 'w-12'} fixed left-0 top-0 z-10 flex h-screen cursor-none flex-row items-center justify-start bg-white p-3 duration-300 ease-in-out`}
    >
      <div className="flex h-full flex-col justify-between">
        <FaFlask size={20} />
        <SideBarToggleButton isOpen={isOpen} toggleSidebar={handleSideBar} />
        <div className="h-full" />
        <div className="flex h-1/6 flex-col justify-end gap-4">
          <a href="#" className="cursor-none">
            <FaGithub size={20} />
          </a>
          <a href="#" className="cursor-none">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-row gap-16"
          >
            <div className="h-10 w-1/3"></div>
            <div className="flex flex-col gap-16 font-mont text-4xl text-black sm:text-6xl">
              <PageLink
                link="/"
                title="Home"
                delay={0.1}
                closeSidebar={closeSidebar}
              />
              <PageLink
                link="/about"
                title="Sobre"
                delay={0.15}
                closeSidebar={closeSidebar}
              />
              <PageLink
                link="/contact"
                title="Contato"
                delay={0.2}
                closeSidebar={closeSidebar}
              />
              <PageLink
                link="/csv"
                title="CSV"
                delay={0.25}
                closeSidebar={closeSidebar}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
