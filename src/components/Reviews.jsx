import { reviews } from '../data/cafe'

function ReviewQuote({ review }) {
  return (
    <blockquote className="border-l-2 border-caramel pl-6">
      <p className="whitespace-pre-line font-display text-xl leading-snug text-offwhite">“{review.text}”</p>
      <footer className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-caramel">— {review.name}</footer>
    </blockquote>
  )
}

/* Vertical marquee. Two identical copies give a seamless loop. Reduced-motion users get a scrollable
   list with only the first copy shown. Hover or focus pauses the motion so long reviews can be read. */
function ReviewTrack({ items, direction, label, className = '' }) {
  const animation = direction === 'down' ? 'marquee-y-down' : 'marquee-y-up'
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className={`marquee-paused h-[34rem] overflow-y-auto motion-safe:overflow-hidden ${className}`}
    >
      <div className={`marquee-track ${animation} flex flex-col`}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className={`flex flex-col gap-12 pb-12 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
          >
            {items.map((review) => (
              <li key={review.name}>
                <ReviewQuote review={review} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  const left = reviews.filter((_, i) => i % 2 === 0)
  const right = reviews.filter((_, i) => i % 2 === 1)

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-espresso text-offwhite">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-14 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-caramel">Reviews</p>
            <h2 id="reviews-title" className="mt-4 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
              Voice of our guests
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-offwhite/85">
              Public reviews, shown as they were written.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ReviewTrack items={reviews} direction="up" label="Guest reviews" className="lg:hidden" />
            <div className="hidden gap-8 lg:grid lg:grid-cols-2">
              <ReviewTrack items={left} direction="up" label="Guest reviews, first column" />
              <ReviewTrack items={right} direction="down" label="Guest reviews, second column" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
