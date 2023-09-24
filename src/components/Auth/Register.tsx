import {
  NonAnimatedSmallTextStyles,
  SmallTextStyles,
  SmallerTextStyles,
} from "@/styles/ComponentStyles/Text";
import {
  DropdownItemStyle,
  DropdownStyles,
  SuccessStyles,
} from "@/styles/PageStyles/auth/Register";
import { ArrowDown } from "../Icons/Icons";
import { FunctionComponent, useEffect, useState } from "react";
import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";
import Image from "next/image";
import { motion } from "framer-motion";
import { SuccessVariants } from "@/animations/register";
import { IGroupSize } from "../../../constants/GroupSize";

interface IDropdownA {
  placeholder: string;
  stateValue: ICategory[] | null;
  setCategories: React.Dispatch<React.SetStateAction<ICategory[] | null>>;
}
export const DropdownA: FunctionComponent<IDropdownA> = ({
  placeholder,
  stateValue,
  setCategories,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<ICategory | null>();
  useEffect(() => {
    const val = stateValue?.find((ele) => ele.isSelected === true);
    setSelected(val);
  }, [stateValue]);

  const handleSelect = (id: string) => {
    if (stateValue) {
      const newState = stateValue.map((ele) => {
        return { ...ele, isSelected: ele.id === id };
      });
      setCategories(newState);
      setShowDropdown(false);
    }
  };
  return (
    <DropdownStyles $isActive={showDropdown}>
      <div className="display" onClick={() => setShowDropdown(!showDropdown)}>
        <NonAnimatedSmallTextStyles>
          {selected ? selected.name : placeholder}
        </NonAnimatedSmallTextStyles>
        <div className="svg">
          <ArrowDown />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown">
          {stateValue &&
            stateValue.map((ele, index) => (
              <DropdownItemStyle
                $isActive={ele.isSelected}
                onClick={() => handleSelect(ele.id)}
                key={index}
              >
                {ele.name}
              </DropdownItemStyle>
            ))}
        </div>
      )}
    </DropdownStyles>
  );
};

interface IDropdownB {
  placeholder: string;
  stateValue: IGroupSize[];
  setGroupSize: React.Dispatch<React.SetStateAction<IGroupSize[]>>;
}
export const DropdownB: FunctionComponent<IDropdownB> = ({
  placeholder,
  stateValue,
  setGroupSize,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<IGroupSize | null>();
  const handleSelect = (num: string) => {
    const newState = stateValue.map((ele) => {
      return { ...ele, isSelected: ele.num === num };
    });
    setGroupSize(newState);
    setShowDropdown(false);
  };
  useEffect(() => {
    const val = stateValue?.find((ele) => ele.isSelected === true);
    setSelected(val);
  }, [stateValue]);

  return (
    <DropdownStyles $isActive={showDropdown}>
      <div className="gs" onClick={() => setShowDropdown(!showDropdown)}>
        <NonAnimatedSmallTextStyles>
          {selected ? selected.num : placeholder}
        </NonAnimatedSmallTextStyles>
        <div className="svg">
          <ArrowDown />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown">
          {stateValue.map((ele, index) => (
            <DropdownItemStyle
              $isActive={ele.isSelected}
              onClick={() => handleSelect(ele.num)}
              key={index}
            >
              {ele.num}
            </DropdownItemStyle>
          ))}
        </div>
      )}
    </DropdownStyles>
  );
};

interface ICloseModal {
  handleClose: () => void;
}
export const Success: FunctionComponent<ICloseModal> = ({ handleClose }) => {
  return (
    <SuccessStyles>
      <motion.div
        className="message"
        initial="initial"
        animate="final"
        exit="exit"
        variants={SuccessVariants}
      >
        <div className="one">
          <Image
            src="/assets/done.svg"
            alt="check"
            width={174}
            height={174}
            className="check"
          />
          <Image
            src="/assets/success.svg"
            alt="check"
            width={184}
            height={184}
            className="success"
          />
        </div>
        <div className="two">
          <h3>Congratulations you have successfully Registered!</h3>
          <div className="p">
            <SmallerTextStyles>
              Yes, it was easy and you did it!
            </SmallerTextStyles>
            <div className="wink">
              <SmallerTextStyles>
                check your mail box for next step
              </SmallerTextStyles>
              <Image
                src="/assets/woman-wink.svg"
                alt="woman winking"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="three">
          <LargeBtnStyle onClick={handleClose}>Back</LargeBtnStyle>
        </div>
      </motion.div>
    </SuccessStyles>
  );
};
