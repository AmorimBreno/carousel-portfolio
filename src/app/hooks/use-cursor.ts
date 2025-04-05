import { useContext } from 'react'
import { CursorContext } from '../contexts/cursor-context'

export const useCursor = () => {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('useTheme must be used within a CursorProvider')
  }

  const { mousePosition } = context

  return { mousePosition }
}
