import { Rotate } from "@/animations/keyframes";
import { OverlayVariants } from "@/animations/register";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const RegisterStyles = styled.div`
  h3 {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    z-index: 5;
    position: relative;
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
  .one .absolute-div {
    position: absolute;
    left: 0;
    top: 0%;
    img {
      width: 44.8125rem;
      height: 44.8125rem;
      flex-shrink: 0;
    }
  }
  .img {
    z-index: 5;
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
  }
  .h {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    p {
      margin-top: 0.25rem;
      font-size: 1rem;
    }
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
  /* Hide the number input buttons for Webkit browsers (Chrome, Safari) */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Remove the default appearance */
    appearance: none; /* Remove the default appearance (for Firefox) */
    margin: 0; /* Remove any default margin */
  }

  /* Hide the number input buttons for Firefox */
  input[type="number"] {
    -moz-appearance: textfield; /* Restore the input to a text input appearance (for Firefox) */
  }
  .down {
    margin-top: 0.5rem;
  }
  .img, .two{
    position: relative;
  }
  .grey-1{
    top: 92%;
    left: 20%;
  }
  .purple-2{
    top: 75%;
    left: 82%;
  }
  .purple-1{
    top: 10%;
    left: 15%;
  }
  .grey-2{
    left: 70%;
    top: 5%;
  }
  .white-1{
    top: 100%;
    left: 80%;
  }
  @media (max-width: 998px) {
    padding: 2rem 0rem;
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
      box-shadow: none;
      padding: 2rem;
    }
    .check {
      display: flex;
      align-items: flex-start;
      div {
        margin-top: 0.25rem;
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
    .grey-1, .purple-1, .white-1{
      display: none;
    }
    .purple-2{
      left: 90%;
    }
    .purple-3{
      left: 100%;
      top: 70%;
    }
    .grey-2{
      top: 22.5%;
      left: -2.5%;
    }
  }
  @media (max-width: 500px) {
    padding: 1.5rem 0rem;
    .down {
      margin-top: 0rem;
    }
    .img .thumbs {
      width: 195px;
      height: 155px;
      z-index: 5;
      flex-shrink: 0;
    }
    .one .absolute-div {
      img {
        width: 24.75rem;
        height: 27.625rem;
        flex-shrink: 0;
      }
    }
    .h {
      margin-bottom: 1rem;
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
    .down {
      margin-top: 0.25rem;
    }
    .check {
      gap: 1rem;
    }
    .check p {
      color: #fff;
      font-family: Montserrat;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      // padding-right: 4px;
    }
    .purple-2{
      left: 82%;
    }
    .purple-3{
      left: 92%;
      top: 70%;
    }
    .grey-2{
      top: 25%;
      left: 4%;
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
    .purple-3{
      display: none;
    }
  }
`;

interface IDropdownStyles {
  $isActive: boolean;
}
export const DropdownStyles = styled.div<IDropdownStyles>`
  //   padding: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  .display,
  .gs {
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
    background: #fff;
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
    width: 100%;
  }
  .svg {
    transition: 0.3s;
  }
  ${(props) =>
    props.$isActive &&
    css`
      .svg {
        transform: rotate(180deg);
        transition: 0.6s;
      }
    `}
  @media (max-width: 500px) {
    .gs {
      width: fit-content;
      min-width: 100px;
    }
  }
`;

// interface IDropdownStyles {
//   $isSelected: boolean;
// }
export const DropdownItemStyle = styled.p<IDropdownStyles>`
  color: #000;
  padding: 0.75rem 0.5rem;
  font-family: Montserrat;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  ${(props) =>
    props.$isActive &&
    css`
      color: #fff;
      background: linear-gradient(
        270deg,
        #903aff 0%,
        #d434fe 56.42%,
        #ff26b9 99.99%,
        #fe34b9 100%
      );
      border-bottom: none;
    `}
  @media (max-width: 500px) {
    padding: 0.5rem 0.75rem;
  }
`;
export const ButtonLoader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top: 4px solid transparent;
  margin: auto;
  animation: ${Rotate} 0.6s ease infinite;
`;

export const SuccessStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: OverlayVariants,
}))`
  background: rgba(21, 14, 40, 0.93);
  z-index: 5;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 15;
  align-items: center;
  .message {
    border-radius: 0.3125rem;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
  h3 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 100%;
  }

  .three {
    width: 100%;
  }
  .three button {
    width: 100%;
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    .check {
      transform: translateX(30%);
    }
    .success {
      transform: translateX(-30%);
    }
  }

  .wink {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    justify-content: center;
  }
  .p {
    margin-top: 1rem;
  }
  .check p {
    cursor: pointer;
  }
  .purple-1{
    top: -2.5%;
    left: 100%;
  }
  .purple-2{
    left: 92%;
    top: 90%;
  }
  .grey-1{
    top: 30%;
  }
  @media (max-width: 998px) {
    padding: 2rem;
    .message {
      padding: 4rem 2rem;
    }
    .purple-1{
      top: -5%;
      left: 95%;
    }
    .purple-2{
      left: 90%;
      top: 105%;
    }
    .grey-1{
      left: 10%;
      top: 40%;
    }
  }
  @media (max-width: 500px) {
    padding: 2rem;
    .message {
      padding: 0rem;
    }
    h3 {
      font-size: 1rem;
    }
    .three {
      padding: 2rem;
      padding-top: 0rem;
    }
  }
  @media (min-width: 998px) {
    .message {
      width: 40%;
      padding: 2rem 4rem;
    }
  }
`;
