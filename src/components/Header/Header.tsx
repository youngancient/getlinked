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
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { SlideinAnime } from "@/animations/animations";

export const Header = () => {
  const [links, setLinks] = useState(Links);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const selectLink = (id: number) => {
    const newLinks = links.map((ele) => {
      return { ...ele, isSelected: ele.id === id };
    });
    setLinks(newLinks);
    // ask a user/ designer
    setShowMobileNav(false);
  };
  const router = useRouter();

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
          <LargeBtnStyle onClick={() => router.push("/auth/register")}>
            Register
          </LargeBtnStyle>
        </div>
        <div className="mobile-menu">
          <Menu handleClick={() => setShowMobileNav(true)} />
        </div>
      </div>

      <AnimatePresence>
        {showMobileNav && (
          <MobileSlideIn>
            <motion.div className="main"
            initial = "initial"
            animate = "final"
            variants={SlideinAnime}
            exit = "exit"
            key="kagura"
            >
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
                <MediumBtnStyle onClick={() => router.push("/auth/register")}>
                  Register
                </MediumBtnStyle>
              </div>
            </motion.div>
            <div
              className="nothing"
              onClick={() => setShowMobileNav(false)}
            ></div>
          </MobileSlideIn>
        )}
      </AnimatePresence>
    </HeaderStyles>
  );
};
