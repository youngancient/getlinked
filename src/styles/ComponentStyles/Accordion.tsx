import styled, { css } from "styled-components";

export const AccordionStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 998px) {
    padding: 1.5rem;
  }
`;

interface IAccordionComponentStyle {
  $isShown: boolean;
}
export const AccordionComponentStyles = styled.div<IAccordionComponentStyle>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .question {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    p {
      font-weight: 600;
    }
  }
//   .question svg {
//     transform: rotate(0deg);
//     transition: 0.6s;
//   }
  ${(props) =>
    props.$isShown &&
    css`
      .question svg {
        transition: 0.6s;
        transform: rotate(45deg);
      }
    `}
  .answer p {
    padding-bottom: 0.25rem;
    width: 100%;
  }
  hr {
    border: 1px solid #d434fe;
    margin-top: 0.5rem;
  }
  @media (max-width: 998px) {
    .question p,
    .answer p {
      text-align: left;
    }
  }
  @media (min-width: 998px) {
    .question {
      p {
        white-space: nowrap;
      }
    }
  }
`;
