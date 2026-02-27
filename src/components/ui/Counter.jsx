import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.65 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let frameId
    const duration = 900
    const startTime = performance.now()

    const run = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frameId = requestAnimationFrame(run)
    }

    frameId = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frameId)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

