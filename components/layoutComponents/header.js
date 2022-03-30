/** @format */

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  background: transparent;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const BluredDiv = styled.div`
  width: 100%;
  height: 100px;

  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  box-shadow: 2em 0 2em #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  z-index: 100;
`;

const HamburderContainer = styled.button`
  width: 50px;
  height: 50px;
  margin: 20px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HamburgerSpan = styled.span`
  width: 40px;
  height: 50px;
  position: absolute;
  &::after {
    transition: all 0.4s ease-out;

    content: "";
    position: absolute;
    right: 0;
    top: ${(props) => (props.active ? "50%" : "45%")};

    transform: ${(props) => (props.active ? "rotate(45deg)" : "rotate(0deg)")};
    width: 100%;
    height: 1px;
    background: #ffffff;
  }

  &::before {
    transition: all 0.4s ease-out;

    content: "";
    position: absolute;
    right: 0;
    bottom: ${(props) => (props.active ? "50%" : "45%")};
    width: ${(props) => (props.active ? "100%" : "50%")};
    height: 1px;
    transform: ${(props) => (props.active ? "rotate(315deg)" : "rotate(0deg)")};

    background: #ffffff;
  }
`;

const NavBarDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  margin: 0 20px;
`;

const Anchor = styled.p`
  color: #ffffff;
  z-index: 100;

  padding: 10px 20px;
  transition: all 0.2s ease-out;

  &:hover {
    border: 2px solid #ffffff;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);
  return (
    <Container>
      <BluredDiv />
      <ImageContainer>
        <Image src='/logo/8.png' width='300' height='300' layout='responsive' />
      </ImageContainer>
      <HamburderContainer onClick={() => setIsActive(!isActive)}>
        <HamburgerSpan active={isActive} />
      </HamburderContainer>
      <NavBarDiv>
        <Anchor>O Nas</Anchor>
        <Anchor>Portfolio</Anchor>
        <Anchor>Blog</Anchor>
        <Anchor>Oferta</Anchor>
        <Anchor>Kontakt</Anchor>
      </NavBarDiv>
    </Container>
  );
};

export default Header;
