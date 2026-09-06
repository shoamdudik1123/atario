import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type AccessibilityState = {
  fontScale: number
  highContrast: boolean
  grayscale: boolean
  underlineLinks: boolean
}

type AccessibilityContextValue = AccessibilityState & {
  increaseText: () => void
  decreaseText: () => void
  toggleHighContrast: () => void
  toggleGrayscale: () => void
  toggleUnderlineLinks: () => void
  reset: () => void
}

const STORAGE_KEY = 'tava-a11y'
const MIN_SCALE = 0.9
const MAX_SCALE = 1.35

const defaultState: AccessibilityState = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null)

function loadState(): AccessibilityState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessibilityState>(defaultState)

  useEffect(() => {
    setState(loadState())
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--font-scale', String(state.fontScale))
    root.classList.toggle('a11y-contrast', state.highContrast)
    root.classList.toggle('a11y-gray', state.grayscale)
    root.classList.toggle('a11y-links', state.underlineLinks)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      ...state,
      increaseText: () =>
        setState((current) => ({
          ...current,
          fontScale: Math.min(MAX_SCALE, Number((current.fontScale + 0.1).toFixed(2))),
        })),
      decreaseText: () =>
        setState((current) => ({
          ...current,
          fontScale: Math.max(MIN_SCALE, Number((current.fontScale - 0.1).toFixed(2))),
        })),
      toggleHighContrast: () =>
        setState((current) => ({ ...current, highContrast: !current.highContrast })),
      toggleGrayscale: () =>
        setState((current) => ({ ...current, grayscale: !current.grayscale })),
      toggleUnderlineLinks: () =>
        setState((current) => ({ ...current, underlineLinks: !current.underlineLinks })),
      reset: () => setState(defaultState),
    }),
    [state],
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
