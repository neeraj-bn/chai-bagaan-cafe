/* Full-width photo band used as a section opener. The overlay is a flat espresso tint so the
   cream and caramel type stays readable over any part of the photograph. */
export default function PhotoBand({ id, image, alt, eyebrow, title, position = 'center' }) {
  return (
    <div className="relative isolate overflow-hidden bg-espresso text-offwhite">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: position }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso/65" />
      <div className="mx-auto flex min-h-[19rem] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[24rem] lg:min-h-[30rem] lg:px-14 lg:pb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-caramel">{eyebrow}</p>
        <h2 id={id} className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
    </div>
  )
}
