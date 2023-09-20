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

export const Accordion = () => {
  const [faqs, setFaqs] = useState(FAQs);
  const [faqId, setId] =  useState<number | undefined>();

//   I am coming back to this logic
  const handleShowFaq =(id : number)=>{
    setId(id);
    const newFaqs = faqs.map((ele )=> {
        if(faqId){
            if(faqId === ele.id){
                setId(undefined);
                return {...ele, show : false} 
            }else{
                return {...ele, show : ele.id === id} 
            }
        }else{
            return {...ele, show : ele.id === id}
        }
    })     
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
        <SmallTextStyles>{question}</SmallTextStyles>
        <PlusSign />
      </div>
      {show && (
        <div className="answer">
          <SmallerTextStyles>{answer}</SmallerTextStyles>
        </div>
      )}
      <hr />
    </AccordionComponentStyles>
  );
};
