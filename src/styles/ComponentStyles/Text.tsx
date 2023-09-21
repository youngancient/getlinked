import styled, { css } from "styled-components";

// interface IFont{
//     size : string;

// }
// export const ClashDisplay = styled.h3`

// `

interface ILinkStyle {
  $isSelected: boolean;
}
export const LinkStyle = styled.p<ILinkStyle>`
  color: #fff;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${(props) =>
    props.$isSelected &&
    css`
      background: linear-gradient(90deg, #903aff 3.08%, #ff26b9 93.85%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

  @media (max-width: 767px) {
    font-family: "Inter", sans-serif;
  }
`;

export const SectionHeadStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: fit-content;
  h3 {
    color: #fff;
    font-family: Clash Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0rem */
  }
  .color {
    color: #d434fe;
  }
  @media (max-width: 500px){
    gap: 1.5rem;
    h3{
      font-size: 1.25rem;
    }
  }
`;


export const SmallTextStyles = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.71875rem; /* 196.429% */

  strong{
    color: #FF26B9;
  }
  @media (max-width: 500px){
    font-size: 0.8125rem;
  }
`;
export const SmallerTextStyles = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2rem; /* 196.429% */
  
  strong{
    color: #FF26B9;
  }
  @media (max-width: 500px){
    font-size: 0.6125rem;
  }
`;
