import { dayparts } from '../data/cafe'
import { Icon } from './icons'

export default function DaypartStrip() {
  return (
    <section aria-label="Served through the day" className="border-b border-espresso/15 bg-offwhite">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-3">
        {dayparts.map((d) => (
          <li
            key={d.label}
            className="flex items-start gap-3 px-5 py-6 last:col-span-2 lg:last:col-span-1 lg:border-r lg:border-espresso/15 lg:px-7 lg:last:border-r-0"
          >
            <Icon name={d.icon} className="mt-0.5 h-7 w-7 text-terracotta" />
            <div>
              <p className="font-semibold leading-tight">{d.label}</p>
              <p className="mt-1 text-sm text-espresso/85">{d.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
