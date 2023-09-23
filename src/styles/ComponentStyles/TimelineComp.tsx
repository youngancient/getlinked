import styled from "styled-components";

export const TimeLineCompStyles = styled.div`
  padding: 0rem 7rem;
  .list {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
  .timeln {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .num {
    position: relative;
  }
  .line {
    bottom: 120%;
    position: absolute;
  }
  .text-one {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4{
    color: #d434fe;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .timeln:nth-of-type(2n) {
    margin-top: 0rem;
    flex-direction: row-reverse;
    .date {
      text-align: right;
    }
  }
  .timeln:nth-of-type(2n + 1) {
    .text-one {
      text-align: right;
    }
  }
  .text-one,
  .date {
    width: 40%;
  }
  .num {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 998px) {
    display: none;
  }
`;

export const MobileTimeLineCompStyles = styled.div`
  //   padding: 0rem 4rem ;
  width: 60%;
  .list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .timeln {
    display: flex;
    gap: 1rem;
    align-items: stretch;
  }
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .text > p:nth-of-type(3) {
    transform: translateY(5%);
  }
  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
    padding-top: 0.5rem;
    flex: 1;
  }
  @media (max-width: 500px) {
    width: 80%;
    .text > p:nth-of-type(3) {
      transform: translateY(12%);
    }
  }
  @media (min-width: 998px) {
    display: none;
  }
`;
