import {
  NonAnimatedSmallTextStyles,
  SmallTextStyles,
  SmallerTextStyles,
} from "@/styles/ComponentStyles/Text";
import {
  DropdownStyles,
  SuccessStyles,
} from "@/styles/PageStyles/auth/Register";
import { ArrowDown } from "../Icons/Icons";
import { FunctionComponent, useState } from "react";
import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";
import Image from "next/image";

interface IDropdown {
  placeholder: string;
}
export const Dropdown: FunctionComponent<IDropdown> = ({ placeholder }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <DropdownStyles $isActive={showDropdown}>
      <div className="display" onClick={() => setShowDropdown(!showDropdown)}>
        <NonAnimatedSmallTextStyles>{placeholder}</NonAnimatedSmallTextStyles>
        <div className="svg">
          <ArrowDown />
        </div>
      </div>
      {showDropdown && <div className="dropdown">dropdown stuff here</div>}
    </DropdownStyles>
  );
};

interface ICloseModal{
    handleClose : () => void ;
}
export const Success:FunctionComponent<ICloseModal> = ({handleClose}) => {
  return (
    <SuccessStyles>
      <div className="message">
        <div className="one">
          <Image src="/assets/done.svg" alt="check" width={174} height={174} className="check" />
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
      </div>
    </SuccessStyles>
  );
};
