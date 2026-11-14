import React, { useState } from 'react'
import { ThemeProvider, useTheme } from './three/ThemeContext'
import ThreeDOffice from './three/ThreeDOffice'

export function App() {
  const [isNightMode, setIsNightMode] = useState(false)

  return (
    <ThemeProvider>
      <AppContent isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
    </ThemeProvider>
  )
}

function AppContent({ isNightMode, setIsNightMode }: { isNightMode: boolean, setIsNightMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { theme, setTheme } = useTheme()

  const nextThemeId = () => {
    const order: string[] = ['cyberpunk', 'minimalist', 'fantasy', 'corporate']
    const currentIdx = order.indexOf(theme.id)
    return order[(currentIdx + 1) % order.length] as 'cyberpunk' | 'minimalist' | 'fantasy' | 'corporate'
  }

  const toggleTheme = () => {
    setIsNightMode((prev) => !prev)
    if (!isNightMode) {
      setTheme(nextThemeId())
    } else {
      setTheme('cyberpunk')
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans antialiased">
      <div className="flex flex-col min-h-span">
        <header className="p-6 mb-6">
          <h1 className="text-4xl font-bold text-center text-purple-400">
            Agent Hive Studio
          </h1>
          <p className="text-gray-400 text-center">
            3D AI Workspace ที่ให้ท่านได้ทำงานกับ AI Agents อย่างมีประสิทธิภาพ
          </p>
        </header>

        <div className="flex justify-center">
          <button
            onClick={toggleTheme}
            className="bg-white/20 px-6 py-3 rounded-lg text-gray-400 hover:bg-white/30 transition duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {isNightMode ? 'โหมดมืด' : 'โหมดสว่าง'}
          </button>
        </div>

        <main className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-2/3 p-6">
            <ThreeDOffice />
          </div>
          <aside className="w-full md:w-1/3 p-6 bg-gray-800 text-gray-300">
            <h2 className="text-xl font-bold mb-4 text-white">Activity Feed</h2>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400 italic">Waiting for agent activity...</p>
            </div>
          </aside>
        </main>

        <footer className="p-6 text-center text-gray-500">
          <p>© 2026 Agent Hive Studio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App