import {
  CenterMobile,
  HeroStyles,
  PrizesStyle,
  SectionFiveStyles,
  SectionFourStyles,
  SectionThreeStyles,
  SectionTwoStyles,
  SponsorsStyle,
  TimeLineStyles,
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
import { MobileTimeLineComp, TimeLineComp } from "./Timeline";
import { Medals } from "../../../constants/medal";

export const Hero = () => {
  return (
    <HeroStyles>
      <div className="intro">
        <p>Igniting a Revolution in HR Innovation</p>
        <div className="rule">
          <FancyRule />
        </div>
      </div>
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
        <CenterMobile>
          <SectionHead
            textOne="Introduction to getlinked"
            textTwo="tech Hackathon 1.0"
          />
        </CenterMobile>

        <CenterMobile>
          <SmallTextStyles>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&rsquo;re a
            coding genius, a design maverick, or a concept wizard, you&rsquo;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&rsquo;s what
            we&rsquo;re all about!
          </SmallTextStyles>
        </CenterMobile>
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
        <CenterMobile>
          <SectionHead textOne="Rules and" textTwo="Guidelines" />
        </CenterMobile>
        <CenterMobile>
          <SmallTextStyles>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&rsquo;re a
            coding genius, a design maverick, or a concept wizard, you&rsquo;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&rsquo;s what
            we&rsquo;re all about!
          </SmallTextStyles>
        </CenterMobile>
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
        <CenterMobile>
          <SectionHead textOne="Judging Criteria" textTwo="Key attributes" />
        </CenterMobile>
        <div className="list">
          {JudgingCriteria.map((ele, index) => (
            <CenterMobile key={index}>
              <SmallTextStyles>
                <strong>{ele.head}:</strong> {ele.body}
              </SmallTextStyles>
            </CenterMobile>
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
          className="guideln"
        />
        <div className="q-icons">
          <Image
            alt="question mark"
            src="/assets/q2.svg"
            width={114}
            height={71}
            className="q2"
          />
          <Image
            alt="question mark"
            src="/assets/q1.svg"
            width={114}
            height={71}
            className="q1"
          />

          <Image
            alt="question mark"
            src="/assets/q2.svg"
            width={114}
            height={71}
            className="q2"
          />
        </div>
      </div>
      <div className="two">
        <CenterMobile>
          <SectionHead textOne="Frequently Asked" textTwo="Questions" />
        </CenterMobile>
        <CenterMobile>
          <SmallTextStyles>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </SmallTextStyles>
        </CenterMobile>
        <div className="accordion">
          <Accordion />
        </div>
      </div>
    </SectionFiveStyles>
  );
};

export const TimeLine = () => {
  return (
    <TimeLineStyles>
      <div className="one">
        <h3>Timeline</h3>
        <SmallTextStyles>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </SmallTextStyles>
      </div>
      <div className="two">
        <TimeLineComp />
        <MobileTimeLineComp />
      </div>
    </TimeLineStyles>
  );
};

export const Prizes = () => {
  return (
    <PrizesStyle>
      <div className="one">
        <div className="text">
          <CenterMobile>
            <SectionHead textOne="Prizes and" textTwo="Rewards" />
          </CenterMobile>
          <CenterMobile>
            <SmallTextStyles>
              Highlight of the prizes or rewards for winners and for participants.
            </SmallTextStyles>
          </CenterMobile>
        </div>
      </div>
      <div className="two">
        <div className="cup-img desktop">
          <Image alt="cup" src="/assets/cup.png" width={548} height={482} />
        </div>
        <div className="medals">
          {Medals.map((ele, index) => (
            <div className="medal" key={index}>
              <div className={`img i-${ele.id}`}>
                <Image
                  alt="medal"
                  className={`m-${ele.id}`}
                  src={ele.medalImg}
                  width={179}
                  height={180}
                />
              </div>
              <div className="x">
                <div className="pos">
                  <strong>{ele.id}</strong>
                  <SmallTextStyles>Runner</SmallTextStyles>
                </div>
                <h4>N{ele.prize}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrizesStyle>
  );
};

export const Sponsors = () => {
  return <SponsorsStyle>Sponsors section</SponsorsStyle>;
};
