import styled from "styled-components";

export const HeroStyles = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .intro {
    p {
      color: #fff;
      font-family: Montserrat;
      font-size: 2.25rem;
      font-style: italic;
      font-weight: 700;
      line-height: normal;
      text-align: right;
    }
    .rule {
      display: flex;
      justify-content: flex-end;
    }
    svg {
      width: 15.8125rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  h1 {
    color: #fff;
    font-family: Clash Display;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    strong {
      color: #d434fe;
      margin-left: 4px;
    }
  }
  .btm-text {
    color: #fff;
    font-family: Montserrat;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 166%; /* 2.075rem */
  }
  .hero-main {
    display: flex;
    margin-top: 2rem;
  }
  .two {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .two .img-one {
    img {
      width: 750px;
      height: 100%;
    }
  }
  .two .img-two {
    position: absolute;
    top: 0;
    img {
      width: 667px;
      height: 100%;
    }
  }
  .h1 {
    width: fit-content;
    img {
      scale: 0.85;
    }
  }
  .h1 {
    position: relative;
  }
  .tech {
    position: relative;
    .bulb {
      position: absolute;
      bottom: 50%;
      left: 50%;
      scale: 0.65;
    }
  }
  .added {
    position: absolute;
    right: 0rem;
    left: 100%;
    top: 0;
    align-items: center;
    display: flex;
  }
  .banner,
  .one {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .one {
    gap: 3rem;
  }
  @media (max-width: 998px) {
    h1 {
      font-size: 3rem;
    }
    .intro {
      p {
        font-size: 1.5rem;
      }
      padding: 2.12rem 3rem;
      padding-bottom: 0;
      svg {
        width: 10.1875rem;
      }
    }
    .btm-text {
      padding: 0rem 2rem;
    }
    .hero-main {
      flex-direction: column;
    }
    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .added {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
    }
    .h1,
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    text-align: center;
    .banner {
      padding: 1rem;
    }
    .two {
      margin-top: 2rem;
    }
  }
  @media (max-width: 640px) {
    .intro {
      p {
        font-size: 1.2rem;
      }
      padding: 2.12rem 3rem;
      svg {
        width: 9.1875rem;
      }
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    .intro {
      p {
        font-size: 1rem;
      }
      padding: 1.2rem;
      padding-bottom: 0;
      svg {
        width: 7.1875rem;
      }
    }
    .btm-text {
      font-size: 0.8125rem;
    }
    .tech .bulb {
      scale: 0.5;
    }
    .h1 img {
      scale: 0.25;
    }
    .one {
      gap: 2rem;
    }
    .two .img-one {
      img {
        width: 499px;
        height: 100%;
      }
    }
    .two .img-two {
      img {
        width: 338.067px;
        height: 100%;
      }
    }
    // coming back here to fix this
    .added {
      position: relative;
      right: 0rem;
      left: 0%;
      top: 0;
      scale: 1.5;
      align-items: center;
      display: flex;
      margin-left: 0.75rem;
      .chain{
        position: absolute;
        left: -50%;
      }
    }
  }
  @media (max-width: 365px) {
    .intro p{
      font-size: 0.8rem;
    }
  }
  @media (min-width: 998px) {
    .intro {
      margin-top: 3rem;
      padding-right: 4rem;
      svg {
        width: 16.8125rem;
      }
    }
    h1 {
      font-size: 5rem;
    }
    .hero-main {
      margin-top: 3rem;
      padding-left: 7rem;
      display: flex;
      align-items: center;
      .one,
      .two {
        width: 50%;
      }
    }
    .btm-text {
      padding-right: 2rem;
      width: 90%;
    }
  }
  @media (min-width: 998px) {
    .tech .bulb {
      bottom: 60%;
      left: 55%;
    }
  }
`;

export const SectionTwoStyles = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .one img {
    width: 490px;
    height: 100%;
  }
  .two {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
  }
  .one {
    position: relative;
  }
  .arrow {
    position: absolute;
    bottom: 0;
    flex-shrink: 0;
    scale: 0.15;
  }
  @media (max-width: 998px) {
    padding: 6rem 0rem;
    flex-direction: column;
    gap: 3rem;
    .two {
      align-items: center;
      gap: 2rem;
    }
    .arrow {
      right: 0;
      scale: 0.1;
      top: 50%;
    }
    .two p {
      padding: 0rem 3rem;
    }
  }
  @media (max-width: 500px) {
    padding: 4rem 0rem;
    .one img {
      width: 264.004px;
    }
    .two {
      gap: 1.5rem;
    }
    .two p {
      padding: 0rem 1.8rem;
    }
  }
  @media (min-width: 998px) {
    padding: 4rem 0rem;
    gap: 3rem;
    padding-left: 7rem;
    .one,
    .two {
      width: 50%;
      display: flex;
      justify-content: center;
    }
    .two p {
      padding-right: 2.5rem;
      width: 90%;
    }
    .arrow {
      right: -35%;
      top: 45%;
    }
  }
`;

export const CenterMobile = styled.div`
  @media (max-width: 998px) {
    text-align: center;
  }
`;
export const SectionThreeStyles = styled(SectionTwoStyles)`
  // background: conic-gradient( from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg );
  .circle {
    position: absolute;
    top: 15%;
    right: 19%;
    svg {
      scale: 0.9;
    }
  }
  .one img {
    position: relative;
    z-index: 5;
  }
  @media (max-width: 998px) {
    gap: 1.5rem;
    .circle {
      top: 12%;
      right: 17%;
      svg {
        scale: 0.75;
      }
    }
  }
  @media (max-width: 500px) {
    .circle {
      display: none;
    }
    .one img {
      width: 294px;
      height: 100%;
    }
  }
  @media (min-width: 998px) {
    padding-left: 11.5rem;
    flex-direction: row-reverse;
    .one img {
      width: 664px;
      height: 100%;
    }
    .two p {
      padding-right: 0rem;
      width: 90%;
    }
  }
`;

export const SectionFourStyles = styled(SectionTwoStyles)`
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .circle {
    position: absolute;
    top: -5%;
    left: 13.5%;
    svg {
      scale: 0.9;
    }
  }
  .one img {
    position: relative;
    z-index: 5;
  }
  @media (max-width: 998px) {
    gap: 1rem;
    .circle {
      position: absolute;
      top: -7%;
      left: 10%;
      svg {
        scale: 0.75;
      }
    }
  }
  @media (max-width: 500px) {
    .circle {
      display: none;
    }
    .one img {
      width: 332px;
      height: 100%;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 0rem;
    padding-left: 4rem;
    .one img {
      width: 710px;
      height: 100%;
    }
    .list {
      gap: 1.5rem;
    }
  }
`;

export const SectionFiveStyles = styled(SectionTwoStyles)`
  .q-icons {
    position: absolute;
    top: -15%;
    left: 5%;
    display: flex;
    gap: 2rem;
  }
  .one {
    position: relative;
  }
  .guideln img{
    width: 100%;
  }
  @media (max-width: 998px) {
    gap: 6rem;
    flex-direction: column-reverse;
    .q-icons img {
      width: 50px;
      height: 100%;
      scale: 0.5;
    }
    .q-icons {
      top: -5%;
      left: 15%;
    }
    .q-icons .q1 {
      scale: 0.75;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 500px) {
    .one .guideln {
      width: 327px;
      height: 100%;
    }
    .q-icons {
      top: -18%;
      left: 15%;
    }
  }
  @media (min-width: 998px) {
    flex-direction: row-reverse;
    padding: 8rem 0rem;
    padding-left: 11.5rem;
    .one .guideln {
      width: 741px;
      height: 100%;
    }
    .two p {
      padding-right: 2rem;
      width: 90%;
    }
    .one {
      width: 55%;
    }
    .two {
      width: 45%;
    }
    .q-icons img {
      width: 114px;
      height: 100%;
      scale: 0.45;
    }
    .q-icons .q1 {
      scale: 0.6;
      transform: translateY(-50%);
    }
  }
`;

export const TimeLineStyles = styled.div`
  .two {
    margin-top: 12rem;
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    p {
      width: 30%;
      text-align: center;
    }
  }
  .one h3 {
    color: #fff;
    font-family: Clash Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0rem */
  }
  background: #150E28;
  @media (max-width: 998px) {
    padding: 6rem 0rem;
    .one p {
      width: 60%;
    }
    .two {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    padding: 4rem 0rem;
    .one {
      gap: 1.5rem;
    }
    .one h3 {
      font-size: 1.25rem;
    }
    .one p {
      width: 80%;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 0rem;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`;

export const PrizesStyle = styled.div`
  .medals {
    display: flex;
    gap: 1.5rem;
  }
  display: flex;
  flex-direction: column;
  background: #150E28;
  .two {
    display: flex;
    align-items: flex-start;
  }
  .m-1st {
    width: 296px;
    height: 100%;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .img {
    margin-top: -70%;
  }
  .i-1st {
    margin-top: -100%;
  }
  .medal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 212px;
    height: 296px;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 1px solid #d434fe;
    background: rgba(212, 52, 254, 0.12);
  }
  .pos strong {
    color: #fff;
    font-family: Montserrat;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
  }
  .x {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .x h4 {
    color: #d434fe;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
  }
  .medal:nth-of-type(2) {
    height: 320px;
    border: 1px solid #903aff;
    background: rgba(144, 58, 255, 0.12);
    h4 {
      margin-top: 1rem;
    }
  }
  .one {
  }
  .text {
    width: fit-content;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 998px) {
    padding: 4rem;
    .img img {
      width: 120px;
      height: 100%;
    }
    .img .m-1st {
      width: 180px;
      height: 100%;
    }
    .medal {
      width: 150px;
      height: 200px;
      gap: 0.75rem;
    }
    .medal:nth-of-type(2) {
      height: 220px;
      h4 {
        margin-top: 0.75rem;
      }
    }
    .text {
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    .text p {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
    .pos strong {
      font-size: 1.5rem;
    }
    .x h4 {
      font-size: 1.2rem;
    }
    .medal {
      gap: 1rem;
    }
    gap: 5rem;
    .two {
      flex-direction: column;
      align-items: center;
      gap: 10rem;
    }
    .cup-img img {
      width: 321px;
      height: 282px;
      flex-shrink: 0;
    }
  }
  @media (max-width: 500px) {
    padding: 4rem 2rem;
    .medals {
      gap: 0.75rem;
    }
    .img img {
      width: 75.997px;
      height: 100%;
    }
    .img .m-1st {
      width: 125.671px;
      height: 100%;
    }
    .text {
      gap: 1.5rem;
    }
    .text p {
      // width: 90%;
    }
    .medal {
      width: 90.007px;
      height: 125.671px;
      gap: 0.5rem;
    }
    .medal:nth-of-type(2) {
      height: 150px;
      h4 {
        margin-top: 0.25rem;
      }
    }
    .pos strong {
      font-size: 0.75rem;
    }
    .x h4 {
      font-size: 0.875rem;
    }
    gap: 2.5rem;
    .two {
      gap: 7rem;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 4rem;
    .text p {
      width: 30%;
    }
    .medals {
      align-self: flex-end;
    }
    .one {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    gap: 8rem;
    .cup-img img {
      width: 500px;
      height: 100%;
      flex-shrink: 0;
    }
    .two {
      gap: 1.5rem;
    }
    .text p {
      width: 80%;
    }
  }
`;

export const SponsorsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .one h3 {
    color: #fff;
    font-family: Clash Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0rem */
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
  .one p {
    text-align: center;
  }
  .two {
    border-radius: 0.3125rem;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 4rem;
  }
  .sponsor {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .sponsor:nth-of-type(4) {
    padding: 1rem;
  }
  .line {
    position: absolute;
    right: -2.5%;
  }
  .horizontal-line {
    position: absolute;
    bottom: -5%;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 998px) {
    padding: 4rem;
    .one p {
      width: 90%;
    }
    .spons1 {
      width: 100.562px;
      height: 113.946px;
    }
    .spons2 {
      width: 180.189px;
      height: 30.432px;
      padding-right: 8px;
      padding-left: 8px;
    }
    .spons3 {
      width: 131.589px;
      height: 107.33px;
    }
    .spons4 {
      width: 137.027px;
      height: 99.535px;
      flex-shrink: 0;
    }
    .spons5 {
      width: 160.368px;
      height: 40.584px;
      flex-shrink: 0;
    }
    .grid {
      padding: 2rem 0rem;
    }
    .spons6 {
      width: 150px;
      height: 25px;
      flex-shrink: 0;
    }
    .line {
      height: 5.86525rem;
    }
    .horizontal-line {
      width: 8.26694rem;
    }
  }
  @media (max-width: 500px) {
    padding: 4rem 2rem;
    .one h3 {
      font-size: 1.25rem;
    }
    .one p {
      width: 100%;
    }
    .one {
      gap: 1.5rem;
    }
    .spons1 {
      width: 31.99px;
      height: 30.234px;
    }
    .spons2 {
      width: 56.567px;
      height: 10.728px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .spons3 {
      width: 34.916px;
      height: 28.479px;
    }
    .spons4 {
      width: 39.012px;
      height: 29.064px;
      flex-shrink: 0;
    }
    .spons5 {
      width: 54.227px;
      height: 12.462px;
      flex-shrink: 0;
    }
    .spons6 {
      width: 69px;
      height: 12.46px;
      flex-shrink: 0;
    }
    .sponsor {
      width: 100%;
      height: 60px;
    }
    .line {
      height: 1.86525rem;
    }
    .horizontal-line {
      width: 4.26694rem;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 4rem;
    .one p {
      width: 50%;
    }
  }
`;

export const PrivacyStyles = styled.div`
  display: flex;
  .policies {
    border-radius: 0.3125rem;
    background: rgba(217, 217, 217, 0.03);
  }
  .check {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    svg {
      margin-top: 6px;
      width: 1.0625rem;
      height: 1.0625rem;
      flex-shrink: 0;
    }
  }
  background: #150E28;
  h5 {
    color: #d434fe;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 216.4%; /* 2.164rem */
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .first {
    gap: 1rem;
  }
  .policy-text,
  .f2 {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }
  .two {
    position: relative;
  }
  .crypt {
    position: absolute;
    top: -25%;
    left: 10%;
  }
  .secured {
    position: relative;
    z-index: 5;
  }
  @media (max-width: 998px) {
    flex-direction: column;
    padding: 4rem;
    .head-text .first {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .policies {
      margin-top: 2rem;
      padding: 2.81rem 1rem 2.81rem 1.2rem;
    }
    .policy-two {
      margin-top: 1.5rem;
    }
    .crypt {
      top: 0;
      left: 28%;
    }
    .crypt img {
      width: 349px;
      height: 411px;
    }
    .two {
      margin-top: 4rem;
    }
  }
  @media (max-width: 500px) {
    padding: 4rem 2rem;
    .policies {
      margin-top: 2rem;
      padding: 2.81rem 0.75rem 2.81rem 0.94rem;
    }
    h5 {
      font-size: 0.8125rem;
    }
    .policy-two {
      margin-top: 1.31rem;
    }
    .policy-text {
      gap: 1rem;
    }
    .crypt{
      top: -25%;
      left: 5%;
    }
    .two {
      margin-top: 10rem;
    }
    .secured {
      width: 262px;
      height: 351px;
      flex-shrink: 0;
    }
    .crypt img {
      width: 249px;
      height: 311px;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 4rem;
    padding-left: 7rem;
    gap: 2rem;
    .one,
    .two {
      width: 50%;
    }
    .policies {
      margin-top: 4rem;
      padding: 4rem 2rem 3rem 4rem;
    }
    .policy-two {
      margin-top: 3rem;
    }
    .first p {
      margin-top: 2rem;
    }
    .p {
      width: 75%;
    }
    .two {
      margin-top: 8rem;
    }
  }
`;
