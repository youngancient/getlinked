import { SectionHeadStyles } from "@/styles/ComponentStyles/Text";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textVariant } from "@/animations/animations";

interface ISectionHead {
  textOne: string;
  textTwo: string;
}
export const SectionHead: FunctionComponent<ISectionHead> = ({
  textOne,
  textTwo,
}) => {
  return (
    <SectionHeadStyles>
      <motion.h3 initial="initial" whileInView="final" variants={textVariant}>
        {textOne}
      </motion.h3>
      <motion.h3
        className="color"
        initial="initial"
        whileInView="final"
        variants={textVariant}
      >
        {textTwo}
      </motion.h3>
    </SectionHeadStyles>
  );
};
