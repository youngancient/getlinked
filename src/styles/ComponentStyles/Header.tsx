import styled from "styled-components";
import { motion } from "framer-motion";
import { SlideinAnime } from "@/animations/animations";

export const HeaderStyles = styled.header`
  border-bottom: 2px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: #150E28;
  z-index: 20;
  position: relative;
  @media (max-width: 767px) {
    .desktop-menu {
      display: none;
    }
    padding: 2.12rem 3rem;
    padding-bottom: 1.81rem;
    .mobile-menu svg{
      cursor: pointer;
    }
  }
  @media (max-width: 500px) {
    padding: 1.8rem;
    padding-bottom: 1.2rem;
  }
  @media (min-width: 767px) {
    padding: 2.12rem 2.8rem;
    padding-bottom: 1.81rem;
    .mobile-menu {
      display: none;
    }
    .desktop-menu {
      display: flex;
      gap: 1.56rem;
      align-items: center;
    }
    .desktop-links {
      display: flex;
      gap: 1rem;
    }
  }
  @media (min-width: 820px) {
    padding: 2.12rem 3rem;
  }
  @media (min-width: 998px) {
    padding: 2.12rem 7rem;
    padding-bottom: 1.81rem;
    .mobile-menu {
      display: none;
    }
    .desktop-menu {
      display: flex;
      gap: 7.56rem;
      align-items: center;
    }
    .desktop-links {
      display: flex;
      gap: 1.5rem;
    }
  }
`;

export const ForX = styled.div`
  border-radius: 1.4375rem;
  border: 1px solid #903aff;
  width: 1.4375rem;
  height: 1.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const MobileSlideIn = styled.div`
  background: rgba(21, 14, 40, 0.53);
  height: 100vh;
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100vw;
  .main {
    border-radius: 0.5rem;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150e28;
    padding: 2.12rem;
    .mobile-links, .second{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .second{
        gap: 3rem;
        margin-top: 4rem;
        padding-bottom: 4rem;
    }
    .cancel{
        display: flex;
        justify-content: right;
    }
  }
  .nothing{
    flex-grow: 1;
  }
  @media (min-width: 767px){
    display: none;
  }
`;
