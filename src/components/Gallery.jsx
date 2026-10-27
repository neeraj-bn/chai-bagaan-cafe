import { gallery } from '../data/cafe'
import PhotoBand from './PhotoBand'

const layout = [
  { span: 'col-span-2 lg:col-span-7', aspect: 'aspect-[4/3]', offset: '' },
  { span: 'col-span-1 lg:col-span-5', aspect: 'aspect-[3/4]', offset: 'lg:mt-24' },
  { span: 'col-span-1 lg:col-span-5', aspect: 'aspect-square', offset: '' },
  { span: 'col-span-2 lg:col-span-7', aspect: 'aspect-[16/10]', offset: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-offwhite">
      <PhotoBand
        id="gallery-title"
        image="/images/cafe-night-crowd.jpg"
        alt="Guests seated under string lights at the outdoor dining area at night"
        eyebrow="Gallery"
        title="Glimpses of the cafe"
        position="center 40%"
      />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-14 lg:py-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-12 lg:gap-x-8">
          {gallery.map((photo, index) => {
            const { span, aspect, offset } = layout[index]
            return (
              <figure key={photo.image} className={`${span} ${offset}`}>
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${aspect}`}
                />
                <figcaption className="mt-3 text-sm text-espresso/85">{photo.caption}</figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
