import { eyebrowText } from './ui'

export default function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <div className="max-w-2xl">
      <p className={eyebrowText}>{eyebrow}</p>
      <h2 id={id} className="mt-4 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-espresso/85">{intro}</p>}
    </div>
  )
}
