import { story } from '../data/cafe'
import { textLink } from './ui'
import { Icon } from './icons'

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="mx-auto max-w-7xl px-5 py-20 lg:px-14 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <figure className="lg:col-span-5">
          <img
            src={story.image}
            alt={story.alt}
            width="1152"
            height="768"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: '42% 50%' }}
            className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
          />
        </figure>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-clay">About</p>
          <h2 id="story-title" className="mt-4 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
            Our story
          </h2>
          <blockquote className="mt-10 border-l-4 border-terracotta pl-6 font-display text-2xl leading-snug sm:text-3xl">
            {story.quote}
            <footer className="mt-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-clay">
              From Chai Bagaan Cafe
            </footer>
          </blockquote>
          <p className="mt-8 text-lg leading-relaxed text-espresso/90">{story.body}</p>
          <a href="#visit" className={`${textLink} mt-8`}>
            Plan your visit
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
