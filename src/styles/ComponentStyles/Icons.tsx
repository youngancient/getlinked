import styled from "styled-components";

export const LogoStyles = styled.h3`
  width: fit-content;
  font-family: "Clash Display", sans-serif;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  line-height: normal;
  strong{
    color: #d434fe;
  }
  @media (max-width: 500px){
    font-size: 0.9375rem;
  }
`;


export const FancyRuleStyles = styled.span`
  @media (max-width: 500px){
    .big{
      display: none;
    }
  }
  @media (min-width: 500px){
    .small{
      display: none;
    }
  }
`