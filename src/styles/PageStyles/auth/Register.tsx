import styled, { css } from "styled-components";

export const RegisterStyles = styled.div`
  h3 {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  display: flex;
  align-items: center;
  .two {
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .inner {
    display: flex;
    gap: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-ele {
    width: 100%;
  }
  .form-ele input {
    width: 100%;
    height: 47px;
    border-radius: 4px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
  }
  .check {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .italize {
    font-style: italic;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .text {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .move {
    position: relative;
  }
  .move .man,
  .move .woman {
    position: absolute;
    bottom: 30%;
    left: 50%;
  }
  .move .woman {
    left: 30%;
  }
  h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  input {
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.25);
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 998px) {
    // padding: 4rem;
    flex-direction: column;
    .inner {
      flex-direction: column;
      gap: 0;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .two {
      border-radius: 0.75rem;
      background: transparent;
      box-shadow: 0;
      padding: 2rem;
    }
    .check {
      display: flex;
      align-items: flex-start;
      div {
        margin-top: 0.5rem;
      }
    }
    .one h3 {
      font-size: 1.5rem;
      padding: 2rem;
    }
    .one {
      width: 100%;
    }
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .inner {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .two h3 {
      display: none;
    }
    .xx {
      flex-direction: row;
    }
  }
  @media (max-width: 500px) {
    // padding: 4rem 2rem;
    .down {
      margin-top: 0rem;
    }
    .img img {
      width: 195px;
      height: 155px;
      flex-shrink: 0;
    }
    h4 {
      font-size: 1.25rem;
    }
    .inner {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .xx {
      flex-direction: row;
    }
    .form {
      gap: 1rem;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 4rem;
    .one {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .one,
    .two {
      width: 50%;
    }
    .two {
      padding: 4rem 4rem 4rem 4rem;
    }
    .btn button {
      width: 100%;
    }
    .one h3 {
      display: none;
    }
  }
`;

interface IDropdownStyles{
    $isActive : boolean;
}
export const DropdownStyles = styled.div<IDropdownStyles>`
  //   padding: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  .display {
    height: 2.9375rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .dropdown {
    position: absolute;
    top: 100%;
  }
  .svg{
    transition : 0.3s;
  }
  ${props => props.$isActive && css`
    .svg{
        transform: rotate(180deg);
        transition : 0.6s;
    }
  `}
  @media (max-width: 998px) {
    .display {
      width: fit-content;
    }
  }
`;
