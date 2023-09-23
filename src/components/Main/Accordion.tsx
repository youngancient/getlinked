import {
  AccordionComponentStyles,
  AccordionStyles,
} from "@/styles/ComponentStyles/Accordion";
import {
  SmallTextStyles,
  SmallerTextStyles,
} from "@/styles/ComponentStyles/Text";
import { PlusSign } from "../Icons/Icons";
import { FAQs, IAccordionComponent } from "../../../constants/accordion";
import { FunctionComponent, useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import { faqAnswerVariants } from "@/animations/animations";



export const Accordion = () => {
  const [faqs, setFaqs] = useState(FAQs);
  const [faqId, setId] =  useState<number | undefined>();

//   I am coming back to this logic
  const handleShowFaq =(id : number)=>{
    setId(id);
    const newFaqs = faqs.map((ele,index )=> {
      if (id === index) {
        return { ...ele, show: !ele.show };
      } else {
        return { ...ele , show : false};
      }
    });
    setFaqs(newFaqs);
  }
  return (
    <AccordionStyles>
      {faqs.map((ele, index) => (
        <AccordionComponent
          key={index}
          question={ele.question}
          answer={ele.answer}
          show={ele.show}
          id={ele.id}
          showFaq={() => handleShowFaq(ele.id)}
        />
      ))}
    </AccordionStyles>
  );
};

interface IAccordionComponentFunc extends IAccordionComponent{
    showFaq :()=> void;
}
export const AccordionComponent: FunctionComponent<IAccordionComponentFunc> = ({
  question,
  answer,
  id,
  show,
  showFaq
}) => {
  return (
    <AccordionComponentStyles $isShown={show}>
      <div className="question" onClick={showFaq}>
        <span>{question}</span>
        <PlusSign />
      </div>
      <AnimatePresence>
      {show && (
        <motion.div className="answer"
        variants={faqAnswerVariants}
        initial = "initial"
        animate = "final"
        exit= "exit"
        >
          <span>{answer}</span>
        </motion.div>
      )}
      </AnimatePresence>
      <hr />
    </AccordionComponentStyles>
  );
};
