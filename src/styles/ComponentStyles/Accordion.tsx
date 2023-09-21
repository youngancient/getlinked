import styled, { css } from "styled-components";

export const AccordionStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 998px) {
    width: 100vw;
    padding: 2rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }
  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

interface IAccordionComponentStyle {
  $isShown: boolean;
}
export const AccordionComponentStyles = styled.div<IAccordionComponentStyle>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span{
    text-align: left;
    color: #fff;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */
  }
  .question {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    span{
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
  .answer span {
    font-size: 0.75rem;
    line-height: 1.5rem; /* 196.429% */
  }
  .answer{
    padding-right : 1rem;
    width: 100%;
  }
  hr {
    border: 1px solid #d434fe;
    margin-top: 0.25rem;
  }
  @media (max-width: 998px) {
  }
  @media (max-width: 500px){
    .answer{
      padding-right : 0.75rem;
    }
    .question{
      gap: 0.75rem;
    }
    span{
      font-size: 0.8125rem;
    }
  }
  @media (min-width: 998px) {
    .question {
      span {
        white-space: nowrap;
      }
    }
  }
`;
