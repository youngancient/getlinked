import { OverlayVariants } from "@/animations/register";
import { motion } from "framer-motion";
import styled from "styled-components";


export const ContactSuccessStyles = styled(motion.div).attrs(() => ({
    initial: "initial",
    animate: "final",
    exit: "exit",
    variants: OverlayVariants,
  }))`
    background: rgba(21, 14, 40, 0.93);
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .message {
      border-radius: 0.3125rem;
      border: 1px solid #d434fe;
      background: rgba(255, 255, 255, 0.01);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
    }
    h3 {
      color: #fff;
      text-align: center;
      font-family: Montserrat;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 100%;
    }
    @media (max-width: 998px) {
      padding: 2rem;
      .message {
        padding: 4rem 2rem;
      }
    }
    @media (max-width: 500px) {
      padding: 2rem;
      .message {
        padding: 0rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
    @media (min-width: 998px) {
      .message {
        width: 40%;
        padding: 2rem 4rem;
      }
    }
  `;
  