import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useSafeRouter = () => {
  const baseRouter = useRouter()

  const validatePath = useCallback((): boolean => {
    // Implement your path validation logic here
    return true
  }, [baseRouter])

  const push = useCallback(
    (path: string): void => {
      if (!validatePath()) {
        return
      }

      baseRouter.push(path)
    },
    [baseRouter],
  )

  const replace = useCallback(
    (path: string): void => {
      if (!validatePath()) {
        return
      }

      baseRouter.replace(path)
    },
    [baseRouter],
  )

  return {
    push,
    replace,
  }
}
