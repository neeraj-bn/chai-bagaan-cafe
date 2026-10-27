import { cafe } from '../data/cafe'
import { Icon } from './icons'

const itemClass =
  'flex min-h-11 flex-1 flex-col items-center justify-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-espresso focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-terracotta'

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/15 bg-offwhite pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="grid grid-cols-3 divide-x divide-espresso/15">
        <li>
          <a href="#menu" className={itemClass}>
            <Icon name="menu" className="h-5 w-5" />
            Menu
          </a>
        </li>
        <li>
          <a href={cafe.links.directions} target="_blank" rel="noopener noreferrer" className={`${itemClass} bg-terracotta !text-offwhite`}>
            <Icon name="pin" className="h-5 w-5" />
            Directions
          </a>
        </li>
        <li>
          <a href={cafe.phone.href} className={itemClass}>
            <Icon name="phone" className="h-5 w-5" />
            Call
          </a>
        </li>
      </ul>
    </nav>
  )
}
