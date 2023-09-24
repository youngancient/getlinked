import styled from "styled-components";

export const LargeBtnStyle = styled.button`
  border-radius: 0.25rem;
  width: 10.75rem;
  height: 3.3125rem;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  color: #fff;
  z-index: 10;
  position: relative;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 500px) {
    width: 10.75rem;
    height: 3.3125rem;
    flex-shrink: 0;
  }
  &[disabled] {
    background: #ccc; /* Change background color when disabled */
    cursor: not-allowed; /* Change cursor when disabled */
    /* You can customize other styles as needed */
  }
`;

export const MediumBtnStyle = styled(LargeBtnStyle)`
  width: 9.5rem;
  height: 2.92731rem;
  flex-shrink: 0;
`;

export const SmallBtnStyle = styled(LargeBtnStyle)`
width: 6.02188rem;
height: 1.95913rem;
flex-shrink: 0;
`;
