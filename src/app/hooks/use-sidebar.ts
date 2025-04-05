import { useContext } from 'react'
import { NavbarContext } from '../contexts/sidebar-context'

export const useSidebar = () => {
  const context = useContext(NavbarContext)

  if (!context) {
    throw new Error('useTheme must be used within a NavbarProvider')
  }

  const { isOpen, toggleSidebar } = context

  return { isOpen, toggleSidebar }
}
