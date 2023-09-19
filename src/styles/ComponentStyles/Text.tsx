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

    @media (max-width: 767px){
      font-family: 'Inter', sans-serif;
    }
`;
