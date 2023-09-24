import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";
import { ContactSuccessStyles } from "@/styles/ComponentStyles/Contact";
import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { SuccessVariants } from "@/animations/register";

interface IContactSuccess {
  handleClose: () => void;
}
export const ContactSuccess: FunctionComponent<IContactSuccess> = ({
  handleClose,
}) => {
  return (
    <ContactSuccessStyles>
      <motion.div
        className="message"
        initial="initial"
        animate="final"
        exit="exit"
        variants={SuccessVariants}
      >
        <Image
          src="/assets/done.svg"
          alt="check"
          width={174}
          height={174}
          className="check"
        />
        <h3>
          Holla! We have got your Mail<br />
          You will hear from us soon!
        </h3>
        <div className="btn">
          <LargeBtnStyle onClick={handleClose}>Back</LargeBtnStyle>
        </div>
      </motion.div>
    </ContactSuccessStyles>
  );
};
