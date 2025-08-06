import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}

export function useLazyLoad() {
  const { ref, hasIntersected } = useIntersectionObserver()
  return { ref, shouldLoad: hasIntersected }
}