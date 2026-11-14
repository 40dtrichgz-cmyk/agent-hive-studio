import React, { createContext, useContext, useState } from 'react'
import { ThemeId, OfficeTheme, THEMES, ROLE_COLORS } from './theme'

type ThemeContextValue = {
  theme: OfficeTheme
  setTheme: (id: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeId] = useState<ThemeId>('cyberpunk')

  const theme = THEMES[themeId]

  const setTheme = (id: ThemeId) => {
    setThemeId(id)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
