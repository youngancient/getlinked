import { HeroStyles, SectionTwoStyles } from "@/styles/ComponentStyles/Main";
import { FancyRule } from "../Icons/Icons";
import Image from "next/image";
import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";
import { Stopwatch } from "./Stopwatch";
import { SectionHead } from "./Text";
import { SmallTextStyles } from "@/styles/ComponentStyles/Text";

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
                    src="/assets/imole.png"
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
    <SectionTwoStyles>
      <div className="one">
        <Image alt="the big idea" src="/assets/big_bulb.png" width={0} height={0} sizes="100vw" />
      </div>
      <div className="two">
        <SectionHead
          textOne="Introduction to getlinked"
          textTwo="tech Hackathon 1.0"
        />
        <SmallTextStyles>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&rsquo;re a coding genius,
          a design maverick, or a concept wizard, you&rsquo;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&rsquo;s what we&rsquo;re all about!
        </SmallTextStyles>
      </div>
    </SectionTwoStyles>
  );
};
