import { smallStarVariants, starVariants } from "@/animations/animations";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AbsoluteDiv = styled.div`
  position: absolute;
  top: -20%;
  .purple {
    width: 951px;
    height: 994px;
    mix-blend-mode: hard-light;
  }
  @media (max-width: 998px) {
    display: none;
  }
`;

export const StarStyles = styled(motion.div).attrs(()=>({
  initial : "initial",
  whileInView : "final",
  variants : starVariants
}))`
  position: absolute;
  img {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
  }
  @media (max-width: 998px) {
    img {
      width: 0.825rem;
      height: 1rem;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 0.625rem;
      height: 0.75rem;
    }
  }
`;
export const SmallStarStyles = styled(motion.div).attrs(()=>({
  initial : "initial",
  whileInView : "final",
  variants : smallStarVariants
}))`
  position: absolute;
  img {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  @media (max-width: 998px) {
    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
`;
