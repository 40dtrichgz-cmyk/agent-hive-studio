import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Agent3D } from './Agent3D'
import { useTheme, ThemeProvider } from './ThemeContext'
import { THEMES } from './theme'
import { useEffect, useRef } from 'react'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function OrbitControlsWrapper() {
  const { camera, gl } = useThree()
  const controlsRef = useRef<ThreeOrbitControls | null>(null)

  useEffect(() => {
    const controls = new ThreeOrbitControls(camera, gl.domElement)
    controls.enablePan = true
    controls.enableZoom = true
    controls.enableRotate = true
    controls.minDistance = 6
    controls.maxDistance = 40
    controls.target.set(0, 1, 0)
    controls.update()
    controlsRef.current = controls
    return () => controls.dispose()
  }, [camera, gl])

  return null
}

interface AgentPosition {
  id: string
  role: string
  x: number
  y: number
  z: number
  status: 'idle' | 'working' | 'thinking'
}

const agents: AgentPosition[] = [
  { id: '1', role: 'PM Manager', x: -5, y: 0, z: -5, status: 'working' },
  { id: '2', role: 'Architect', x: 5, y: 0, z: -5, status: 'thinking' },
  { id: '3', role: 'DevOps', x: -5, y: 0, z: 5, status: 'working' },
  { id: '4', role: 'Engineer', x: 5, y: 0, z: 5, status: 'working' },
  { id: '5', role: 'Designer', x: 0, y: 0, z: -8, status: 'thinking' },
  { id: '6', role: 'Analyst', x: -8, y: 0, z: 0, status: 'working' },
  { id: '7', role: 'Writer', x: 8, y: 0, z: 0, status: 'idle' },
  { id: '8', role: 'Tester', x: 0, y: 0, z: 8, status: 'working' },
  { id: '9', role: 'Researcher', x: -3, y: 0, z: -3, status: 'thinking' },
  { id: '10', role: 'Coordinator', x: 3, y: 0, z: -3, status: 'working' },
  { id: '11', role: 'Manager', x: 3, y: 0, z: 3, status: 'idle' },
]

export default function ThreeDOffice() {
  const { theme } = useTheme()

  return (
    <Canvas
      camera={{ position: [18, 18, 18], fov: 45 }}
      dpr={[1, 2]}
    >
      <fog attach="fog" args={[...theme.fog]} />
      <ambientLight intensity={theme.ambientIntensity} />
      {/* Floor */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial color={theme.floor} />
      </mesh>
      {/* Walls */}
      <mesh receiveShadow>
        <boxGeometry args={[50, 8, 50]} />
        <meshStandardMaterial color={theme.wall} />
      </mesh>
      {/* Studio Sign */}
      <group position={[0, 4, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color={theme.accent} />
        <boxGeometry args={[6, 1, 1]} />
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[5.5, 0.8, 0.3]} />
          <meshStandardMaterial color={theme.bg} />
        </mesh>
      </group>
      {/* Agents */}
      {agents.map((agent) => (
        <Agent3D key={agent.id} agent={agent} onClick={onAgentClick} />
      ))}
      <OrbitControlsWrapper />
    </Canvas>
  )
}

function onAgentClick(agent: AgentPosition) {
  console.log(`Agent clicked: ${agent.role} (${agent.id})`)
}
