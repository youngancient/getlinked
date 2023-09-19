import styled from "styled-components";

export const StopwatchStyles = styled.div`
  width: fit-content;
  display: flex;
  gap: 1.5rem;
  .digit {
    display: flex;
    align-items: baseline;
    p {
      color: #fff;
      font-family: Unica One;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 133%; /* 5.32rem */
    }
    span {
      color: #fff;
      font-family: Montserrat;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 133%; /* 1.16375rem */
    }
  }
  @media (max-width: 998px){
    margin: 0 auto;
  }
  @media (max-width: 500px){
    .digit p{
        font-size: 3rem;
    }
  }
`;
