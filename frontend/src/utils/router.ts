import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useSafeRouter = () => {
  const baseRouter = useRouter()

  const validatePath = useCallback(
    (_path: string): boolean => {
      // Implement your path validation logic here
      return true
    },
    [baseRouter],
  )

  const push = useCallback(
    (path: string): void => {
      if (!validatePath(path)) {
        return
      }

      baseRouter.push(path)
    },
    [baseRouter],
  )

  const replace = useCallback(
    (path: string): void => {
      if (!validatePath(path)) {
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
