export const typography = {
  heading: {
    h1: 'text-5xl md:text-7xl font-bold tracking-tight',
    h2: 'text-4xl md:text-6xl font-bold tracking-tight',
    h3: 'text-3xl md:text-5xl font-bold tracking-tight',
    h4: 'text-2xl md:text-4xl font-bold tracking-tight',
    h5: 'text-xl md:text-3xl font-bold tracking-tight',
    h6: 'text-lg md:text-2xl font-bold tracking-tight'
  },
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base leading-relaxed'
  },
  display: {
    large: 'text-6xl md:text-8xl font-extrabold tracking-tighter',
    base: 'text-5xl md:text-7xl font-extrabold tracking-tighter',
    small: 'text-4xl md:text-6xl font-extrabold tracking-tighter'
  }
} as const;