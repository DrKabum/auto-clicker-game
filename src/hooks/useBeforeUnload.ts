import { useEffect } from "react"

export default function useBeforeUnload(func: () => void, state: any) {
  useEffect(() => {
    window.addEventListener('beforeunload', func)
    return () => window.removeEventListener('beforeunload', func)
  }, [state])
}