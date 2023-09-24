

export const OverlayVariants = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

export const SuccessVariants = {
    initial: {
      opacity: 0,
      y : "50vh",
    },
    final: {
      opacity: 1,
      y : 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y : "50vh",
      transition: {
        duration: 0.5,
      },
    },
  };