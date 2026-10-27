import { cafe } from '../data/cafe'
import SectionHeading from './SectionHeading'
import { Icon } from './icons'
import { btnPrimary, textLink } from './ui'

export default function VisitUs() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-14 lg:py-28">
        <SectionHeading id="visit-title" eyebrow="Location" title="Visit us" />

        <div className="mt-14 grid lg:grid-cols-12">
          <div className="relative border-t-8 border-terracotta bg-offwhite p-7 sm:p-10 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-center lg:p-12">
            <address className="not-italic">
              <p className="font-display text-3xl leading-tight">Chai Bagaan Café</p>
              <ul className="mt-4 space-y-1 text-lg text-espresso/90">
                {cafe.address.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </address>

            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-clay">
                  <Icon name="clock" className="h-5 w-5" />
                  Hours
                </dt>
                <dd className="mt-2 text-lg">
                  {cafe.hours.label}
                  <br />
                  {cafe.hours.time}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-clay">
                  <Icon name="phone" className="h-5 w-5" />
                  Phone
                </dt>
                <dd className="mt-2 text-lg">
                  <a href={cafe.phone.href} className={textLink}>
                    {cafe.phone.display}
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-bold uppercase tracking-[0.14em] text-clay">Service</dt>
                <dd className="mt-2 text-lg">{cafe.dineIn}</dd>
              </div>
            </dl>

            <a
              href={cafe.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-10 w-full sm:w-auto`}
            >
              <Icon name="pin" className="h-5 w-5" />
              Get Directions
            </a>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-espresso/15 pt-6">
              <li>
                <a href={cafe.links.googleSearch} target="_blank" rel="noopener noreferrer" className={textLink}>
                  Google listing
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a href={cafe.links.zomatoMenu} target="_blank" rel="noopener noreferrer" className={textLink}>
                  Zomato menu
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 h-[360px] border border-espresso/20 sm:h-[440px] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mt-0 lg:h-[600px]">
            <iframe
              title="Map showing Chai Bagaan Café, Nallurahalli, Whitefield, Bengaluru"
              src={cafe.links.mapEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
