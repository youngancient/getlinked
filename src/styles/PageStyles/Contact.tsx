import styled from "styled-components";

export const ContactStyles = styled.div`
  border: 2px solid #fff;
  display: flex;
  form {
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .inner div p {
    margin-top: 0.25rem;
  }
  form h3, .one h3 {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .one h3 {
    font-size: 2rem;
  }
  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  input, textarea {
    width: 100%;
    height: 47px;
    border-radius: 4px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    color: #fff;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input::placeholder, textarea::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .socials{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 998px) {
    padding: 3rem;
    .one {
      display: none;
    }
    .two {
      width: 100%;
    }
    form {
      border-radius: 0.75rem;
      background: transparent;
      box-shadow: 0;
    }
    .message textarea {
      height: 10rem;
    }
    .one-b{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1.5rem;
    .inner {
      gap: 1.5rem;
    }
    form {
      gap: 1.8rem;
    }
  }
  @media (min-width: 998px) {
    padding: 8rem 4rem;
    .mobile {
      display: none;
    }
    .one,
    .two {
      width: 50%;
    }
    form,
    .one {
      padding: 4rem 4rem 4rem 4rem;
    }
    .message textarea {
      height: 7.4375rem;
    }
    .one-a, .one, .one-b{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .one{
        gap: 2rem;
    }
    .one-b{
        gap: 1rem;
    }
  }
`;
