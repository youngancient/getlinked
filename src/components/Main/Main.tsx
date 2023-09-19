import { HeroStyles } from "@/styles/ComponentStyles/Main";
import { FancyRule } from "../Icons/Icons";
import Image from "next/image";
import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";

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
            <h1>
              getlinked{" "}
              <strong>
                <span>Tech</span>
                <Image
                  src="/assets/bulb.png"
                  width={53}
                  height={73}
                  alt="bulb"
                />
              </strong>
            </h1>
            <h1>
              Hackathon <strong>1.0</strong>
              <span>
                <Image
                  src="/assets/chain.png"
                  width={86}
                  height={86}
                  alt="chain"
                />
                <Image
                  src="/assets/imole.png"
                  width={86}
                  height={86}
                  alt="imole"
                />
              </span>
            </h1>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="btn">
              <LargeBtnStyle>Register</LargeBtnStyle>
            </div>
          </div>
          <p>stopwatch</p>
        </div>
        <div className="two"></div>
      </div>
    </HeroStyles>
  );
};
