import {
  ForX,
  HeaderStyles,
  MobileSlideIn,
} from "@/styles/ComponentStyles/Header";
import { Logo, Menu, XVector } from "../Icons/Icons";
import Link from "next/link";
import { LinkStyle } from "@/styles/ComponentStyles/Text";
import {
  LargeBtnStyle,
  MediumBtnStyle,
} from "@/styles/ComponentStyles/Buttons";
import { Links } from "../../../constants/link";
import { useState } from "react";

export const Header = () => {
  const [links, setLinks] = useState(Links);
  const selectLink = (id: number) => {
    const newLinks = links.map((ele) => {
      return { ...ele, isSelected: ele.id === id };
    });
    setLinks(newLinks);
  };
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <HeaderStyles>
      <div className="logo">
        <Logo />
      </div>
      <div className="other">
        <div className="desktop-menu">
          <div className="desktop-links">
            {links.map((ele, index) => (
              <Link
                href={ele.href}
                key={index}
                onClick={() => selectLink(ele.id)}
              >
                <LinkStyle $isSelected={ele.isSelected}>{ele.name}</LinkStyle>
              </Link>
            ))}
          </div>
          <LargeBtnStyle>Register</LargeBtnStyle>
        </div>
        <div className="mobile-menu">
          <Menu handleClick={() => setShowMobileNav(true)} />
        </div>
      </div>
      {showMobileNav && (
        <MobileSlideIn>
          <div className="main">
            <div className="cancel">
              <ForX onClick={() => setShowMobileNav(false)}>
                <XVector />
              </ForX>
            </div>
            <div className="second">
              <div className="mobile-links">
                {links.map((ele, index) => (
                  <Link
                    href={ele.href}
                    key={index}
                    onClick={() => selectLink(ele.id)}
                  >
                    <LinkStyle $isSelected={ele.isSelected}>
                      {ele.name}
                    </LinkStyle>
                  </Link>
                ))}
              </div>
              <MediumBtnStyle>Register</MediumBtnStyle>
            </div>
          </div>
        </MobileSlideIn>
      )}
    </HeaderStyles>
  );
};
