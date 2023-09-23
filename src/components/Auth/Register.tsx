import {
  NonAnimatedSmallTextStyles,
  SmallTextStyles,
} from "@/styles/ComponentStyles/Text";
import { DropdownStyles } from "@/styles/PageStyles/auth/Register";
import { ArrowDown } from "../Icons/Icons";
import { FunctionComponent, useState } from "react";

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
