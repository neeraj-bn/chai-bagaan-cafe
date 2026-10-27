import { featuredItems } from '../data/cafe'
import SectionHeading from './SectionHeading'

function FeaturedItem({ item, large = false }) {
  return (
    <article className={large ? 'lg:col-span-7' : ''}>
      <figure>
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover ${large ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3]'}`}
        />
      </figure>
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-clay">{item.category}</p>
      <h3 className={`mt-2 font-display leading-tight ${large ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{item.title}</h3>
      <p className="mt-3 max-w-md text-lg leading-relaxed text-espresso/85">{item.description}</p>
    </article>
  )
}

export default function FeaturedMenu() {
  const [first, ...rest] = featuredItems

  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-7xl px-5 py-20 lg:px-14 lg:py-28">
      <SectionHeading id="featured-title" eyebrow="Featured" title="Where to begin" />
      <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-x-12">
        <FeaturedItem item={first} large />
        <div className="grid gap-14 lg:col-span-5 lg:self-end">
          {rest.map((item) => (
            <FeaturedItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
