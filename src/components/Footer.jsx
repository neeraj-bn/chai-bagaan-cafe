import { cafe, navLinks } from '../data/cafe'
import { textLink, eyebrowText } from './ui'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-espresso/15 bg-cream pb-20 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-14">
        <div className="lg:col-span-5">
          <p className="font-display text-4xl leading-none">Chai Bagaan</p>
          <p className="mt-4 max-w-sm text-espresso/85">{cafe.tagline}. {cafe.areaLine}.</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
          <p className={eyebrowText}>Explore</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-lg hover:text-clay hover:underline underline-offset-4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className={eyebrowText}>Contact</p>
          <p className="mt-4 text-lg">
            <a href={cafe.phone.href} className={textLink}>
              {cafe.phone.display}
            </a>
          </p>
          <p className="mt-4 text-espresso/85">{cafe.address.lines.join(', ')}</p>
          <a href={cafe.links.directions} target="_blank" rel="noopener noreferrer" className={`${textLink} mt-4`}>
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-espresso/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-espresso/85 sm:flex-row sm:justify-between lg:px-14">
          <p>© {year} Chai Bagaan Cafe. All rights reserved.</p>
          <p>100% pure veg</p>
        </div>
      </div>
    </footer>
  )
}
