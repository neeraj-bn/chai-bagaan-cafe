import { useEffect, useRef, useState } from 'react'
import { cafe, navLinks } from '../data/cafe'
import { Icon } from './icons'
import { btnPrimary } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/15 bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 lg:px-14">
        <a href="#home" className="flex items-center gap-3">
          <Icon name="logo" className="h-7 w-7 shrink-0 text-terracotta sm:h-8 sm:w-8" />
          <span className="whitespace-nowrap font-display text-lg leading-none tracking-tight sm:text-2xl">
            Chai Bagaan
            <span className="mt-1 hidden font-sans text-[0.65rem] sm:block font-bold uppercase tracking-[0.25em] text-clay">
              Café · Whitefield
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold underline decoration-terracotta decoration-2 underline-offset-8 decoration-transparent hover:decoration-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <a
              href={cafe.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} px-3.5 py-2.5 sm:px-4 lg:px-6`}
            >
              Get Directions
            </a>
          </div>
          <button
            type="button"
            ref={toggleRef}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-espresso text-espresso hover:bg-espresso hover:text-offwhite lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-espresso/15 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-espresso/10 last:border-b-0">
                <a href={link.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
