import {
  CenterMobile,
  HeroStyles,
  PrivacyStyles,
  PrizesStyle,
  SectionFiveStyles,
  SectionFourStyles,
  SectionThreeStyles,
  SectionTwoStyles,
  SponsorsStyle,
  TimeLineStyles,
} from "@/styles/ComponentStyles/Main";
import { Check, FancyRule, PurpleCircle } from "../Icons/Icons";
import Image from "next/image";
import {
  LargeBtnStyle,
  MediumBtnStyle,
} from "@/styles/ComponentStyles/Buttons";
import { Stopwatch } from "./Stopwatch";
import { SectionHead } from "./Text";
import {
  NonAnimatedSmallTextStyles,
  SmallTextStyles,
} from "@/styles/ComponentStyles/Text";
import { JudgingCriteria } from "../../../constants/criteria";
import { Accordion } from "./Accordion";
import { MobileTimeLineComp, TimeLineComp } from "./Timeline";
import { Medals } from "../../../constants/medal";
import { HorizontalLine, Line } from "@/styles/ComponentStyles/Icons";
import { Policies } from "../../../constants/policies";
import { motion, Variants } from "framer-motion";
import {
  CupVariant,
  HeroImgVariant,
  PositionVariants,
  QuestionVariant,
  bellVariants,
  floatingVariants,
  positionParentVariants,
  textVariant,
} from "@/animations/animations";
import { useRouter } from "next/router";
import { AbsoluteDiv } from "@/styles/ComponentStyles/Absolute";

export const Hero = () => {
  const router = useRouter();
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
              <div className="absolute-div">
                <Image
                  alt="immersive vr"
                  src="/assets/purple.svg"
                  height={300}
                  width={300}
                  sizes="100vw"
                  className="purple"
                />
              </div>
              <motion.h1
                initial="initial"
                whileInView="final2"
                variants={textVariant}
              >
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
              </motion.h1>
              <motion.div
                className="h1"
                initial="initial"
                whileInView="final3"
                variants={textVariant}
              >
                
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
              </motion.div>
            </div>
            <motion.p
              className="btm-text"
              initial="initial"
              whileInView="final3"
              variants={textVariant}
            >
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </motion.p>
            <motion.div
              className="btn"
              initial="initial"
              whileInView="final3"
              variants={textVariant}
            >
              <LargeBtnStyle onClick={() => router.push("/auth/register")}>
                Register
              </LargeBtnStyle>
            </motion.div>
          </div>
          <Stopwatch hours={18} minutes={0} seconds={0} />
        </div>
        <motion.div
          className="two"
          initial="initial"
          whileInView="final"
          variants={HeroImgVariant}
        >
          <div className="img-one img">
            <Image
              alt="immersive vr"
              src="/assets/look_beyond.png"
              height={0}
              width={0}
              sizes="100vw"
              className="lookbeyond"
            />
            <AbsoluteDiv>
              <Image
                alt="immersive vr"
                src="/assets/purple-powder.png"
                height={100}
                width={100}
                sizes="100vw"
                className="purple"
              />
            </AbsoluteDiv>
          </div>
          <motion.div
            className="img-two img"
            whileInView={{
              rotate: 1080, // Rotate 3 times (3 * 360 degrees)
            }}
            transition={{
              delay: 0.25,
              duration: 4, // Total duration for 3 rotations
              ease: "easeInOut", // Linear easing for consistent rotation speed
            }}
          >
            <Image
              alt="touch"
              src="/assets/real.png"
              height={0}
              width={0}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
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
        <div className="absolute-div">
          {/* <Image
            alt="immersive vr"
            src="/assets/purple.png"
            height={300}
            width={300}
            sizes="100vw"
            className="purple"
          /> */}
          
        </div>
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
          className="judges"
        />
        <div className="absolute-div">
          <Image
            alt="immersive vr"
            src="/assets/purple.png"
            height={300}
            width={300}
            sizes="100vw"
            className="purple"
          />
          
        </div>
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
        <motion.div
          className="guideln"
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          animate={{
            y: ["50px", "0px", "40px", "50px"],
          }}
        >
          <Image
            alt="guidelines"
            src="/assets/faq.png"
            width={0}
            height={0}
            sizes="100vw"
            // className="guideln"
          />
        </motion.div>
        <div className="q-icons">
          <motion.div
            initial="initial"
            whileInView="final"
            variants={QuestionVariant}
          >
            <Image
              alt="question mark"
              src="/assets/q2.svg"
              width={114}
              height={71}
              className="q2"
            />
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="final3"
            variants={QuestionVariant}
          >
            <Image
              alt="question mark"
              src="/assets/q1.svg"
              width={114}
              height={71}
              className="q1"
            />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="final2"
            variants={QuestionVariant}
          >
            <Image
              alt="question mark"
              src="/assets/q2.svg"
              width={114}
              height={71}
              className="q2"
            />
          </motion.div>
        </div>
      </div>
      <div className="two">
        <CenterMobile>
          <SectionHead textOne="Frequently Asked" textTwo="Questions" />
        </CenterMobile>
        <CenterMobile>
          <SmallTextStyles>
            We got answers to the questions that you might want to ask about
            <b>getlinked Hackathon 1.0</b>
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
    <TimeLineStyles id="timeline">
      <div className="one">
        <motion.h3 initial="initial" whileInView="final" variants={textVariant}>
          Timeline
        </motion.h3>
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
              Highlight of the prizes or rewards for winners and for
              participants.
            </SmallTextStyles>
          </CenterMobile>
        </div>
      </div>
      <div className="two">
        <motion.div
          className="cup-img desktop"
          variants={CupVariant}
          initial="initial"
          whileInView="final"
        >
          <Image alt="cup" src="/assets/cup.png" width={548} height={482} />
        </motion.div>
        <motion.div
          className="medals"
          variants={positionParentVariants}
          initial="initial"
          whileInView="final"
        >
          {Medals.map((ele, index) => (
            <motion.div
              className="medal"
              key={index}
              initial="initial"
              whileInView={`final${index}`}
              variants={PositionVariants}
            >
              <motion.div
                className={`img i-${ele.id}`}
                initial="initial"
                whileInView={`final${index}`}
                variants={bellVariants}
              >
                <Image
                  alt="medal"
                  className={`m-${ele.id}`}
                  src={ele.medalImg}
                  width={179}
                  height={180}
                />
              </motion.div>
              <div className="x">
                <div className="pos">
                  <strong>{ele.id}</strong>
                  {/* <SmallTextStyles>Runner</SmallTextStyles> */}
                  <NonAnimatedSmallTextStyles>
                    Runner
                  </NonAnimatedSmallTextStyles>
                </div>
                <h4>N{ele.prize.toLocaleString()}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PrizesStyle>
  );
};

export const Sponsors = () => {
  return (
    <SponsorsStyle>
      <div className="one">
        <motion.h3 initial="initial" whileInView="final" variants={textVariant}>
          Partners and Sponsors
        </motion.h3>
        <SmallTextStyles>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </SmallTextStyles>
      </div>
      <div className="two">
        <div className="grid">
          <div className="sponsor">
            <Image
              src="/assets/spons1.png"
              className="spons1"
              alt="sponsor"
              width={120.562}
              height={113.946}
            />
            <Line height="7.02975rem" className="line" />
            <HorizontalLine width="16.08113rem" className="horizontal-line" />
          </div>
          <div className="sponsor">
            <Image
              src="/assets/spons2.png"
              className="spons2"
              alt="sponsor"
              width={213.189}
              height={40.432}
            />
            <Line height="7.02975rem" className="line" />
            <HorizontalLine width="16.08113rem" className="horizontal-line" />
          </div>
          <div className="sponsor">
            <Image
              src="/assets/spons3.png"
              className="spons3"
              alt="sponsor"
              width={131.589}
              height={107.33}
            />
            <HorizontalLine width="16.08113rem" className="horizontal-line" />
          </div>
          <div className="sponsor">
            <Image
              src="/assets/spons4.png"
              className="spons4"
              alt="sponsor"
              width={147.027}
              height={109.535}
            />
            <Line height="7.02975rem" className="line" />
          </div>
          <div className="sponsor">
            <Image
              src="/assets/spons5.svg"
              className="spons5"
              alt="sponsor"
              width={204.368}
              height={50.584}
            />
            <Line height="7.02975rem" className="line" />
          </div>
          <div className="sponsor">
            <Image
              src="/assets/spons6.svg"
              className="spons6"
              alt="sponsor"
              width={300}
              height={60}
            />
          </div>
        </div>
      </div>
    </SponsorsStyle>
  );
};

export const PrivacyPolicy = () => {
  return (
    <PrivacyStyles>
      <div className="one">
        <div className="head-text">
          <div className="first">
            <CenterMobile>
              <SectionHead textOne="Privacy Policy and" textTwo="Terms" />
            </CenterMobile>
            <CenterMobile>
              <SmallTextStyles>
                Last updated on September 12, 2023
              </SmallTextStyles>
            </CenterMobile>
          </div>
          <CenterMobile>
            <SmallTextStyles className="p">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </SmallTextStyles>
          </CenterMobile>
        </div>
        <div className="policies">
          <CenterMobile>
            <SmallTextStyles>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </SmallTextStyles>
          </CenterMobile>
          <div className="policy-two">
            <div className="policy-text">
              <div className="f1">
                <h5>Licensing Policy</h5>
                <SmallTextStyles color="rgba(255, 255, 255, 0.75)">
                  Here are terms of our Standard License:
                </SmallTextStyles>
              </div>
              <div className="f2">
                {Policies.map((ele, index) => (
                  <div className="check" key={index}>
                    <Check />
                    <SmallTextStyles>{ele}</SmallTextStyles>
                  </div>
                ))}
              </div>
              <div className="btn">
                <MediumBtnStyle>Read More</MediumBtnStyle>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="two">
        <Image
          src="/assets/secured.png"
          alt="secured"
          width={559}
          height={749}
          className="secured"
        />
        <div className="crypt">
          <Image
            src="/assets/vector.svg"
            alt="secured"
            width={530}
            height={648}
          />
        </div>
      </div>
    </PrivacyStyles>
  );
};
