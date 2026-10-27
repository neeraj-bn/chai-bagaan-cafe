import { useEffect, useRef, useState } from 'react'
import { cafe, menuCategories } from '../data/cafe'
import PhotoBand from './PhotoBand'
import { Icon } from './icons'
import { textLink } from './ui'

const pad = (n) => String(n).padStart(2, '0')

const chipBase =
  'flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap border px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta'

function chipState(selected) {
  return selected
    ? 'border-espresso bg-espresso text-offwhite'
    : 'border-espresso/25 bg-offwhite text-espresso hover:border-espresso'
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const chipRefs = useRef({})
  const navRef = useRef(null)

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(`menu-${category.id}`))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.category)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const chip = chipRefs.current[activeId]
    const nav = navRef.current
    if (!chip || !nav || nav.scrollWidth <= nav.clientWidth) return

    nav.scrollTo({
      left: chip.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2,
      behavior: 'smooth',
    })
  }, [activeId])

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-offwhite">
      <PhotoBand
        id="menu-title"
        image="/images/cafe-arch-evening.jpg"
        alt="Tables under the lit roof of the café courtyard at night"
        eyebrow="Menu"
        title="Pure veg, across cuisines"
        position="center 60%"
      />
      <div className="sticky top-[4.8rem] z-30 border-b border-espresso/15 bg-offwhite/95 backdrop-blur-sm lg:top-20">
        <nav aria-label="Menu categories" className="mx-auto max-w-7xl px-5 lg:px-14">
          <div
            ref={navRef}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 py-3 scroll-px-5 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:py-4"
          >
            {menuCategories.map((category, index) => {
              const selected = category.id === activeId
              return (
                <a
                  key={category.id}
                  ref={(node) => {
                    chipRefs.current[category.id] = node
                  }}
                  href={`#menu-${category.id}`}
                  aria-current={selected ? 'true' : undefined}
                  className={`${chipBase} ${chipState(selected)} snap-start lg:justify-center`}
                >
                  <span className={`text-xs font-bold ${selected ? 'text-caramel' : 'text-clay'}`}>
                    {pad(index + 1)}
                  </span>
                  {category.name}
                </a>
              )
            })}
          </div>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-14">
        <p className="max-w-2xl pt-10 text-lg leading-relaxed text-espresso/85 lg:pt-14">
          Choose a cuisine to jump to it. The full list is on Zomato.
        </p>

        {menuCategories.map((category, index) => (
          <section
            key={category.id}
            id={`menu-${category.id}`}
            data-category={category.id}
            aria-labelledby={`menu-${category.id}-title`}
            className="scroll-mt-[5.6rem] border-t border-espresso/15 py-10 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:py-16"
          >
            <div className="lg:sticky lg:top-44 lg:col-span-5 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay sm:tracking-[0.2em]">
                Chapter {pad(index + 1)} · {category.items.length} dishes
              </p>
              <div className="mt-3 flex items-center gap-4">
                <Icon name={category.icon} className="h-9 w-9 shrink-0 text-terracotta" />
                <h3 id={`menu-${category.id}-title`} className="font-display text-4xl leading-none sm:text-5xl">
                  {category.name}
                </h3>
              </div>
            </div>

            <ol className="mt-6 divide-y divide-espresso/10 border-y border-espresso/10 lg:col-span-7 lg:mt-0 lg:border-t-0 lg:border-b">
              {category.items.map((item, itemIndex) => (
                <li key={item.name} className="grid grid-cols-[2.25rem_1fr] items-baseline gap-2 py-4">
                  <span className="text-sm font-bold text-terracotta-deep">{pad(itemIndex + 1)}</span>
                  <div>
                    <p className="font-display text-2xl leading-tight sm:text-3xl">{item.name}</p>
                    {item.note && (
                      <p className="mt-2 inline-block bg-caramel/25 px-2 py-0.5 text-sm text-espresso">{item.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="flex flex-col gap-4 border-t border-espresso/15 py-10 sm:flex-row sm:items-center sm:justify-between lg:py-14">
          <p className="max-w-xl text-espresso/85">Prices are not listed on this page. The full menu is on Zomato.</p>
          <a href={cafe.links.zomatoMenu} target="_blank" rel="noopener noreferrer" className={textLink}>
            View full menu on Zomato
            <Icon name="external" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
