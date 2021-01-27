export const statTableVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
      x: 0,
      transition: {
          duration: .75,
          type: 'spring'
      }
  },
  exit: {
      x: '-100vw',
      transition: {
          duration: .75,
          type: 'spring'
      }
  }
}