import styled from "styled-components";

export const HeroStyles = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .intro {
    color: #fff;
    font-family: Montserrat;
    font-size: 2.25rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: right;
    strong {
      position: relative;
      margin-left: 0.25rem;
    }
    svg {
      position: absolute;
      top: 100%;
      left: 0;
    }
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
      font-size: 1.65rem;
      padding: 2.12rem 3rem;
      svg {
        scale: 0.9;
        left: -1rem;
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
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    .intro {
      font-size: 1rem;
      padding: 1.2rem;
      svg {
        left: 0rem;
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
      position: absolute;
      right: 0rem;
      left: 0%;
      top: 0;
      align-items: center;
      display: flex;
    }
  }
  @media (min-width: 998px) {
    .intro {
      margin-top: 3rem;
      padding-right: 4rem;
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
  border: 2px solid #fff;
  display: flex;
  .one img{
    width: 490px;
    height: 100%;
  }
  .two{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
  }
  @media (max-width: 998px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .two{
      align-items: center;
      gap: 2rem;
    }
  }
  @media (max-width: 500px) {
    .one img{
      width: 264.004px;
    }
    .two{
      gap: 1.5rem;
    }
  }
`;
