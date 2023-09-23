import { motion, Variants } from "framer-motion";

export const textVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  final2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.6,
    },
  },
  final3: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

export const RegisterImgVariants ={
  initial: {
    opacity: 0,
    x: -100,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}
export const SlideinAnime = {
  initial: {
    opacity: 0,
    y: -100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};
export const QuestionVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  final2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.125,
      duration: 0.5,
    },
  },
  final3: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
};

export const FaqVariant = {
  initial: {
    opacity: 0,
    x: -100,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const HeroImgVariant = {
  initial: {
    opacity: 0,
    x: 100,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const parentVariants = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.5, // Adjust the delay between children animations
    },
  },
};

export const faqAnswerVariants = {
  initial: {
    opacity: 0.3,
    height: 0,
    overflow: "hidden",
  },
  final: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      type: "linear",
    },
  },
};

export const floatingVariants = {
  initial: {
    y: 0, // Initial position
  },
  animate: {
    y: [10, -10, 10], // Float up and down by 10 pixels
    transition: {
      y: {
        yoyo: Infinity, // Make the animation loop indefinitely
        duration: 1, // Total duration for one cycle (up and down)
        ease: "easeInOut", // Easing function for smoother animation
      },
    },
  },
};

export const LineVariant: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  final: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const CupVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const PositionVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  final0: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  final1: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
  final2: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.6,
    },
  },
};
export const positionParentVariants = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.5, // Adjust the delay between children animations
    },
  },
};


export const bellVariants:Variants = {
  initial: {
    rotate: 0,
  },
  final0: {
    y : 0,
    opacity : 1,
    transition: {
      duration: 0.6,
    }
  },
  final1: {
    opacity: 1,
    rotate: [-18, 0, 18, 0],
    // rotate: [15, -15, 15],
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.5,
      repeat: 4, // Repeat the animation infinitely
      repeatType: "reverse", // Reverse the animation on each repeat
      ease: "linear",
    },
  },
  final2: {
    y : 0,
    opacity : 1,
    transition: {
      duration: 0.6,
    }
  },
};
