import { FooterStyles } from "@/styles/ComponentStyles/Footer";
import {
  SmallTextStyles,
  SmallerTextStyles,
} from "@/styles/ComponentStyles/Text";
import {
  CallIcon,
  FB,
  IG,
  LinkedIn,
  LocationIcon,
  Logo,
  XIcon,
} from "../Icons/Icons";
import Link from "next/link";
import { Line } from "@/styles/ComponentStyles/Icons";
import { FooterLinks } from "../../../constants/link";
import { SmallStarStyles } from "@/styles/ComponentStyles/Absolute";
import Image from "next/image";

export const Footer = () => {
  return (
    <FooterStyles>
      <div className="one">
        <div className="f1">
          <div className="x">
            <Logo />
            <SmallStarStyles className="white-1">
              <Image
                alt="star"
                width={26}
                height={32}
                src="/assets/white_star.svg"
              />
            </SmallStarStyles>
            <SmallTextStyles>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </SmallTextStyles>
          </div>
          <div className="xx">
            <Link href="#">
              <SmallTextStyles>Terms of Use</SmallTextStyles>
            </Link>
            <Line height="1.0625rem" width="0.125rem" />
            <Link href="#">
              <SmallTextStyles>Privacy Policy</SmallTextStyles>
            </Link>
          </div>
        </div>
        <div className="f23">
          <div className="f2">
            <SmallStarStyles className="grey-1">
              <Image
                alt="star"
                width={26}
                height={32}
                src="/assets/grey-star.svg"
              />
            </SmallStarStyles>
            <SmallTextStyles>
              <strong>Useful Links</strong>
            </SmallTextStyles>
            <div className="list">
              {FooterLinks.map((ele, index) => (
                <Link href={ele.href} key={index}>
                  <SmallerTextStyles>{ele.name}</SmallerTextStyles>
                </Link>
              ))}
            </div>
            <div className="inner">
              <SmallerTextStyles className="follow">
                <strong>Follow Us</strong>
              </SmallerTextStyles>
              <div className="socials">
                <Link href="#">
                  <IG />
                </Link>
                <Link href="#">
                  <XIcon />
                </Link>
                <Link href="#">
                  <FB />
                </Link>
                <Link href="#">
                  <LinkedIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="f3">
            <SmallStarStyles className="white-2">
              <Image
                alt="star"
                width={26}
                height={32}
                src="/assets/white_star.svg"
              />
            </SmallStarStyles>
            <SmallTextStyles>
              <strong>Contact Us</strong>
            </SmallTextStyles>
            <div className="below">
              <div className="b-1">
                <CallIcon />
                <SmallerTextStyles>+234 679 81819</SmallerTextStyles>
              </div>
              <div className="b-1 locatn">
                <LocationIcon />
                <SmallerTextStyles>
                  27,Alara Street Yaba 100012 Lagos State
                </SmallerTextStyles>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="two">
        <SmallStarStyles className="purple-1">
          <Image
            alt="star"
            width={26}
            height={32}
            src="/assets/purple-star.svg"
          />
        </SmallStarStyles>
        <SmallerTextStyles>
          All rights reserved. © getlinked Ltd.
        </SmallerTextStyles>
      </div>
    </FooterStyles>
  );
};
