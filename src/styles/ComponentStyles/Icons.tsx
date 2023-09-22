import styled from "styled-components";

export const LogoStyles = styled.h3`
  width: fit-content;
  font-family: "Clash Display", sans-serif;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  line-height: normal;
  strong {
    color: #d434fe;
  }
  @media (max-width: 500px) {
    font-size: 0.9375rem;
  }
`;

export const FancyRuleStyles = styled.span`
  cursor: pointer;
  @media (max-width: 500px) {
    .big {
      display: none;
    }
  }
  @media (min-width: 500px) {
    .small {
      display: none;
    }
  }
`;

interface ILineStyles {
  height: string;
}
export const Line = styled.div<ILineStyles>`
  width: 0.25rem;
  background: #D434FE;
  height: ${(props) => props.height};
  @media (max-width: 500px) {
    width: 0.125rem;
  }
`;
export const CircleNumStyle = styled.div`
  border-radius: 1.65625rem;
  background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
  width: 3.3125rem;
  height: 3.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (max-width: 998px) {
    width: 1.6rem;
    height: 2.25rem;
    span{
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    border-radius: 50%;
    width: 1.3rem;
    height: 1.25rem;
    flex-shrink: 0;
    span{
      font-size: 0.75rem;
    }
  }
`;
