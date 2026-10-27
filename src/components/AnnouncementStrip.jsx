import { announcement } from '../data/cafe'

export default function AnnouncementStrip() {
  return (
    <div className="bg-espresso px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
      <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        {announcement.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
