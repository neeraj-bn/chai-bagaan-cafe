import { foodStrip } from '../data/cafe'

/* Horizontal marquee. The track holds two identical copies so the -50% loop is seamless.
   Motion is off for reduced-motion users, who get a natively scrollable strip instead. */
export default function FoodStrip() {
  return (
    <section aria-label="Food photographs" className="bg-cream py-16 lg:py-20">
      <div
        role="region"
        aria-label="Food photographs, scrolls automatically"
        tabIndex={0}
        className="marquee-paused overflow-x-auto motion-safe:overflow-hidden"
      >
        <div className="marquee-track marquee-x flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className={`flex shrink-0 gap-5 pl-5 pr-5 lg:gap-8 lg:pl-14 lg:pr-8 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
            >
              {foodStrip.map((item) => (
                <figure key={item.image + copy} className="w-[72vw] shrink-0 sm:w-[300px] lg:w-[380px]">
                  <img
                    src={item.image}
                    alt={copy === 0 ? item.alt : ''}
                    width="1152"
                    height="1440"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-clay">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
