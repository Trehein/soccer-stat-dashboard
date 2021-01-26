export const statTableVariants = {
    hidden: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
      visible: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
      },
    hover: {
        scale: 1.05, 
        boxShadow: "0px 0px 8px rgb(0,0,0)"
    },
}