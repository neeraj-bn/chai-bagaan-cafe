import { cafe } from '../data/cafe'
import { btnPrimary, btnSecondary, eyebrowText } from './ui'
import { Icon } from './icons'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-cream">
      <div className="grid lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-center px-5 pb-14 pt-10 sm:px-8 lg:order-1 lg:col-span-5 lg:px-14 lg:py-24">
          <p className={`${eyebrowText} flex items-center gap-2`}>
            <Icon name="leaf" className="h-4 w-4" />
            Pure veg cafe · Whitefield, Bengaluru
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[3.4rem] leading-[0.92] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem]"
          >
            Chai from first light to late bites.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-espresso/90 sm:text-xl">
            Breakfast, lunch, evening snacks, dinner and late-night bites, served from 6 AM to 12 AM in Nallurahalli.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#menu" className={btnPrimary}>
              Explore Menu
            </a>
            <a href="#visit" className={btnSecondary}>
              Find Us
            </a>
          </div>
        </div>

        <figure className="relative order-1 lg:order-2 lg:col-span-7 lg:min-h-[640px]">
          <img
            src="/images/hero-chai-bagaan-sign.jpg"
            alt="The Chai Bagaan Cafe signboard on the building front"
            width="1360"
            height="612"
            fetchPriority="high"
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </figure>
      </div>
    </section>
  )
}
