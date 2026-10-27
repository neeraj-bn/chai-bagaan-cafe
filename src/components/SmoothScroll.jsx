import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/* Smooth scrolling (Lenis) with a terracotta progress rail. Visitors who prefer reduced
   motion keep native scrolling; the progress rail still works for them. */
export default function SmoothScroll() {
  const railRef = useRef(null)

  useEffect(() => {
    const updateRail = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (railRef.current) railRef.current.style.transform = `scaleX(${progress})`
    }
    window.addEventListener('scroll', updateRail, { passive: true })
    updateRail()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => window.removeEventListener('scroll', updateRail)
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('scroll', updateRail)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div ref={railRef} className="h-full origin-left bg-terracotta" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
