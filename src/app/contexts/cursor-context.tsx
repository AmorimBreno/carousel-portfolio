import { createContext, ReactNode, useEffect, useState } from 'react'

type CursorContextType = {
  mousePosition: { x: number; y: number }
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
)

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <CursorContext.Provider value={{ mousePosition }}>
      {children}
    </CursorContext.Provider>
  )
}
