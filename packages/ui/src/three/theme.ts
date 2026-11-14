export type ThemeId = 'cyberpunk' | 'minimalist' | 'fantasy' | 'corporate';

export interface OfficeTheme {
  id: ThemeId;
  label: string;
  floor: string;
  wall: string;
  accent: string;
  desk: string;
  bg: string;
  ambientIntensity: number;
  fog: [number, number, number];
  fogNear: number;
  fogFar: number;
}

export const THEMES: Record<ThemeId, OfficeTheme> = {
  cyberpunk: {
    id: 'cyberpunk',
    label: 'ไซเบอร์พังก์',
    floor: '#131a2b',
    wall: '#0b1020',
    accent: '#22d3ee',
    desk: '#1e2a44',
    bg: '#0f0f23',
    ambientIntensity: 0.6,
    fog: [0.02, 0.02, 0.04],
    fogNear: 10,
    fogFar: 50,
  },
  minimalist: {
    id: 'minimalist',
    label: 'มินิมอล',
    floor: '#f8fafc',
    wall: '#f1f5f9',
    accent: '#38bdf8',
    desk: '#ffffff',
    bg: '#ffffff',
    ambientIntensity: 0.5,
    fog: [0.01, 0.01, 0.02],
    fogNear: 15,
    fogFar: 60,
  },
  fantasy: {
    id: 'fantasy',
    label: 'แฟนตาซี',
    floor: '#2c1810',
    wall: '#1e130a',
    accent: '#f87171',
    desk: '#3f3f3f',
    bg: '#1a1a2e',
    ambientIntensity: 0.7,
    fog: [0.03, 0.02, 0.03],
    fogNear: 8,
    fogFar: 40,
  },
  corporate: {
    id: 'corporate',
    label: 'Company',
    floor: '#0f172a',
    wall: '#1e293b',
    accent: '#64748b',
    desk: '#f1f5f9',
    bg: '#020617',
    ambientIntensity: 0.55,
    fog: [0.02, 0.02, 0.03],
    fogNear: 12,
    fogFar: 55,
  },
}

export const ROLE_COLORS: Record<string, string> = {
  'PM Manager': '#f472b6',
  Architect: '#38bdf8',
  DevOps: '#8b5cf6',
  Engineer: '#34d399',
  Designer: '#f87171',
  Analyst: '#eab308',
  Writer: '#64748b',
  Tester: '#a78bfa',
  Researcher: '#ec4899',
  Coordinator: '#14b8a6',
  Manager: '#f97316',
}
