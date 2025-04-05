import { createContext, ReactNode, useState } from 'react'

type NavbarContextType = {
  isOpen: boolean
  toggleSidebar: () => void
}

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
)

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <NavbarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </NavbarContext.Provider>
  )
}
