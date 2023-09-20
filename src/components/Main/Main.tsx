import {
  HeroStyles,
  SectionFiveStyles,
  SectionFourStyles,
  SectionThreeStyles,
  SectionTwoStyles,
} from "@/styles/ComponentStyles/Main";
import { FancyRule, PurpleCircle } from "../Icons/Icons";
import Image from "next/image";
import {
  LargeBtnStyle,
  MediumBtnStyle,
} from "@/styles/ComponentStyles/Buttons";
import { Stopwatch } from "./Stopwatch";
import { SectionHead } from "./Text";
import { SmallTextStyles } from "@/styles/ComponentStyles/Text";
import { JudgingCriteria } from "../../../constants/criteria";
import { Accordion } from "./Accordion";

export const Hero = () => {
  return (
    <HeroStyles>
      <p className="intro">
        Igniting a Revolution in{" "}
        <strong>
          <span>HR Innovation</span>
          <FancyRule />
        </strong>
      </p>
      <div className="hero-main">
        <div className="one">
          <div className="banner">
            <div className="tw">
              <h1>
                getlinked{" "}
                <strong className="tech">
                  <span>Tech</span>
                  <Image
                    src="/assets/bulb.png"
                    width={53}
                    height={73}
                    alt="bulb"
                    className="bulb"
                  />
                </strong>
              </h1>
              <div className="h1">
                <h1>
                  Hackathon <strong>1.0</strong>
                </h1>
                <div className="added">
                  <Image
                    src="/assets/chain.png"
                    width={86}
                    height={86}
                    alt="chain"
                    className="chain"
                  />
                  <Image
                    src="/assets/imole.svg"
                    width={60}
                    height={60}
                    alt="imole"
                    className="imole"
                  />
                </div>
              </div>
            </div>
            <p className="btm-text">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="btn">
              <LargeBtnStyle>Register</LargeBtnStyle>
            </div>
          </div>
          <Stopwatch />
        </div>
        <div className="two">
          <div className="img-one img">
            <Image
              alt="immersive vr"
              src="/assets/look_beyond.png"
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
          <div className="img-two img">
            <Image
              alt="touch"
              src="/assets/real.png"
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export const SectionTwo = () => {
  return (
    <SectionTwoStyles id="overview">
      <div className="one">
        <Image
          alt="the big idea"
          src="/assets/big_bulb.png"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          alt="arrow"
          src="/assets/arrow.svg"
          width={49.43}
          height={57.974}
          className="arrow"
        />
      </div>
      <div className="two">
        <SectionHead
          textOne="Introduction to getlinked"
          textTwo="tech Hackathon 1.0"
        />
        <SmallTextStyles>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&rsquo;re a coding
          genius, a design maverick, or a concept wizard, you&rsquo;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&rsquo;s what we&rsquo;re all about!
        </SmallTextStyles>
      </div>
    </SectionTwoStyles>
  );
};

export const SectionThree = () => {
  return (
    <SectionThreeStyles>
      <div className="one">
        <div className="circle">
          <PurpleCircle />
        </div>
        <Image
          alt="guidelines"
          src="/assets/guidelines.png"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="two">
        <SectionHead textOne="Rules and" textTwo="Guidelines" />
        <SmallTextStyles>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&rsquo;re a coding
          genius, a design maverick, or a concept wizard, you&rsquo;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&rsquo;s what we&rsquo;re all about!
        </SmallTextStyles>
      </div>
    </SectionThreeStyles>
  );
};

export const SectionFour = () => {
  return (
    <SectionFourStyles>
      <div className="one">
        <div className="circle">
          <PurpleCircle />
        </div>
        <Image
          alt="guidelines"
          src="/assets/judge.png"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="two">
        <SectionHead textOne="Judging Criteria" textTwo="Key attributes" />
        <div className="list">
          {JudgingCriteria.map((ele, index) => (
            <SmallTextStyles key={index}>
              <strong>{ele.head}:</strong> {ele.body}
            </SmallTextStyles>
          ))}
        </div>
        <div className="btn">
          <MediumBtnStyle>Read More</MediumBtnStyle>
        </div>
      </div>
    </SectionFourStyles>
  );
};

export const FAQ = () => {
  return (
    <SectionFiveStyles id="faq">
      <div className="one">
        <Image
          alt="guidelines"
          src="/assets/faq.png"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="two">
        <SectionHead textOne="Frequently Asked" textTwo="Questions" />
        <SmallTextStyles>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </SmallTextStyles>
        <div className="accordion">
          <Accordion />
        </div>
      </div>
    </SectionFiveStyles>
  );
};
