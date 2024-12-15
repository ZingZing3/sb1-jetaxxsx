export const artisticStyles = {
  kahlo: {
    background: 'bg-gradient-to-br from-primary-500 via-secondary-500/50 to-accent-500/30',
    border: 'border-4 border-secondary-500',
    shadow: 'shadow-xl shadow-secondary-500/20',
    text: {
      heading: 'text-primary-500',
      body: 'text-charcoal-500'
    }
  },
  okeeffe: {
    background: 'bg-gradient-to-r from-accent-500/20 via-primary-500/10 to-secondary-500/20',
    border: 'border-2 border-accent-500',
    shadow: 'shadow-lg shadow-accent-500/10',
    text: {
      heading: 'text-primary-500',
      body: 'text-charcoal-500'
    }
  },
  miro: {
    background: 'bg-gradient-to-tl from-secondary-500/20 via-primary-500/10 to-accent-500/20',
    border: 'border-[3px] border-primary-500',
    shadow: 'shadow-xl shadow-primary-500/20',
    text: {
      heading: 'text-primary-500',
      body: 'text-charcoal-500'
    }
  }
} as const;

export const artisticAnimations = {
  kahlo: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8 }
  },
  okeeffe: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  },
  miro: {
    initial: { rotate: -3, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { duration: 0.7 }
  }
} as const;