/**
 * Design tokens — editorial modern (navy/slate + amber accent).
 * Use for consistent spacing, typography, and colors.
 */
export const theme = {
  colors: {
    bg: '#0f172a',
    bgElevated: '#1e293b',
    surface: '#334155',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    accent: '#f59e0b',
    accentSoft: '#fbbf24',
    teal: '#14b8a6',
    border: '#475569',
    /** Work week blocks */
    blockTeaching: { bg: '#1e3a5f', text: '#93c5fd', border: '#3b82f6' },
    blockSupport: { bg: '#14532d', text: '#86efac', border: '#22c55e' },
    blockAdmin: { bg: '#581c87', text: '#e9d5ff', border: '#f59e0b' },
  },
  spacing: {
    section: '5rem',   // py-20
    block: '1.5rem',   // space-y-6
    tight: '0.5rem',
  },
  typography: {
    headingSerif: '"DM Serif Display", Georgia, serif',
    bodySans: '"Source Sans 3", system-ui, sans-serif',
  },
  layout: {
    contentMax: 'max-w-4xl',
    contentWide: 'max-w-5xl',
    padding: 'px-6 sm:px-12 lg:px-24',
  },
} as const;

export type Theme = typeof theme;
