import React from 'react'
import { memo, useCallback } from 'react'
import { ROLE_COLORS } from './theme'

export interface AgentPosition {
  id: string
  role: string
  x: number
  y: number
  z: number
  status: 'idle' | 'working' | 'thinking'
}

interface Agent3DProps {
  agent: AgentPosition
  onClick?: (agent: AgentPosition) => void
}

export const Agent3D = memo(function Agent3D({ agent, onClick }: Agent3DProps) {
  const color = ROLE_COLORS[agent.role] || '#38bdf8'

  const handleClick = useCallback(() => {
    onClick?.(agent)
  }, [agent, onClick])

  const statusColor =
    agent.status === 'thinking'
      ? '#fbbf24'
      : agent.status === 'working'
        ? '#34d399'
        : '#94a3b8'

  return (
    <group position={[agent.x, 0, agent.z]} onClick={handleClick}>
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color={statusColor} emissive={statusColor} emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0.2, -0.9]} receiveShadow castShadow>
        <boxGeometry args={[1.4, 0.3, 1.4]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.5, -0.9]} castShadow>
        <boxGeometry args={[0.9, 0.5, 0.08]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} />
      </mesh>
    </group>
  )
})