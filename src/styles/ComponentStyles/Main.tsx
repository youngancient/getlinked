import styled from "styled-components";

export const HeroStyles = styled.div`
  border: 2px solid #fff;
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
    strong{
      color: #D434FE;
    }
  }
  @media (max-width: 767px) {
    .intro {
      font-size: 1.75rem;
      padding: 2.12rem 3rem;
      svg {
        scale: 0.9;
        left: -1rem;
      }
    }
  }
  @media (max-width: 500px) {
    .intro {
      font-size: 1rem;
      padding: 1.2rem;
      svg {
        left: 0rem;
      }
    }
  }
  @media (min-width: 767px) {
    .intro {
      margin-top: 3rem;
      padding-right: 4rem;
    }
    h1{
      font-size: 5rem;
    }
    .hero-main{
      margin-top: 3rem;
    }
  }
`;
