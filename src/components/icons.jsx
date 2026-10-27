const paths = {
  logo: [
    'M4 10h13v4.5A5.5 5.5 0 0 1 11.5 20h-2A5.5 5.5 0 0 1 4 14.5z',
    'M17 11.5h1.5a2.5 2.5 0 0 1 0 5H17',
    'M8 3.5c0 1.2.9 1.6.9 2.8',
    'M12 3.5c0 1.2.9 1.6.9 2.8',
  ],
  sunrise: ['M3 17h18', 'M7 17a5 5 0 0 1 10 0', 'M12 5v3', 'M4.9 9.9l2 2', 'M19.1 9.9l-2 2'],
  sun: [
    'M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z',
    'M12 2.5v2.5',
    'M12 19v2.5',
    'M4.2 4.2l1.8 1.8',
    'M18 18l1.8 1.8',
    'M2.5 12H5',
    'M19 12h2.5',
    'M4.2 19.8L6 18',
    'M18 6l1.8-1.8',
  ],
  cup: [
    'M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z',
    'M17 11h1.5a2.5 2.5 0 0 1 0 5H17',
    'M8 3c0 1.3 1 1.5 1 3',
    'M12 3c0 1.3 1 1.5 1 3',
  ],
  moon: ['M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z'],
  star: ['M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z'],
  bowl: ['M3 11h18a9 9 0 0 1-18 0z', 'M8 7.5c0-1.2.8-2 2-2', 'M14 7.5c0-1.2.8-2 2-2'],
  chopsticks: ['M9 3l-2 18', 'M15 3l2 18'],
  cutlery: ['M7 3v6a2 2 0 0 0 2 2v10', 'M5 3v4', 'M9 3v4', 'M17 21V3c-2.2 1.2-3 4-3 7h3'],
  flame: [
    'M12 21c-3.9 0-6.5-2.7-6.5-6.4 0-3.8 3-5.9 4.2-9.6 1.7 1.6 2.3 3.2 2.3 4.6 1-.8 1.5-2 1.7-3.4 2 2.1 3.8 4.9 3.8 8.4C17.5 18.3 15.9 21 12 21z',
  ],
  teacup: ['M4 10h14v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6z', 'M18 11h1a2 2 0 0 1 0 4h-1', 'M8 2.5v3', 'M12 2.5v3'],
  pin: [
    'M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.2-6.5 11-6.5 11z',
    'M9.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z',
  ],
  phone: [
    'M5 4h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 5.5 5.5l1.5-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  ],
  clock: ['M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0z', 'M12 7v5l3 2'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  leaf: ['M5 19C5 10 10 5 19 5c0 9-5 14-14 14z', 'M5 19l7-7'],
}

/* Decorative stroke icons. Text next to each icon carries the meaning, so they are hidden from assistive tech. */
export function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
