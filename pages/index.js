/** @format */

import styled from "styled-components";
import WelcomeComponents from "../components/HomeComponents/WelcomeComponents";
import Layout from "../layout/layout";
import OfferComponent from "../components/HomeComponents/OfferComponent";
import Image from "next/image";
import { MoveOne, MoveTwo } from "../utils/animations";

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: transparent;
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px;
  font-size: 20px;

  @media (min-width: 1024px) {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    right: 0;
    bottom: -25px;
    background: #ffffff;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  margin: 20px 20px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    width: 80%;
    font-size: 70px;
    font-weight: 700;
  margin: 50px 40px;

  }
`;

const SecondParahraph = styled.p`
  color: #ffffff;
  margin: 50px 20px;
  line-height: 160%;

  span {
    font-weight: 500;
  }

  @media (min-width: 1024px) {
  margin: 50px 40px;

    width: 50%;
    font-weight: 18px;
    margin: 100px 20px;
  }
`;

const ButtonStyled = styled.button`
  transition: all 0.2s ease-out;
  width: 200px;
  height: 50px;
  position: relative;
  left: 50%;
  margin-left: -100px;
  background: none;
  outline: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Now";
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #000000;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    left: 75%;
    width: 280px;
  height: 60px;
  font-size: 18px;
  }
`;

const ImageDivFirst = styled.div`
  position: absolute;
  display: block;
  width: 400px;
  height: 400px;
  top: -100px;
  left: -30px;

  z-index: -1;
  animation: ${MoveOne} 6s linear infinite;

  @media (min-width: 1024px) {
    width: 700px;
    height: 700px;
    top: -200px;
    left: 35%;
    margin-left: -350px;
  }
`;

const ImageDivSecond = styled.div`
  position: absolute;
  display: block;
  width: 400px;
  height: 400px;
  top: -50px;
  left: 15px;

  z-index: -1;
  animation: ${MoveTwo} 6s linear infinite;

  @media (min-width: 1024px) {
    width: 550px;
    height: 550px;
    top: 20px;
    left: 35%;
    margin-left: -275px;
  }
`;

const CountingDiv = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1024px) {
  }
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <WelcomeComponents />
        <Paragraph>
          Projektujemy i tworzymy identyfikacje wizualne, strony internetowe,
          <br/>
          grafikę użytkowa, produkcje filmowe i wiele innych...
        </Paragraph>
        <OfferComponent />
        <CountingDiv>
          <TextContainer>
            <Subject>SZUKASZ WYJĄTKOWEGO PROJEKTU?</Subject>
          </TextContainer>
          <ImageDivFirst>
            <Image src='/GRADIENTS/5.png' width='2000' height='2000' />
          </ImageDivFirst>
          <ImageDivSecond>
            <Image src='/GRADIENTS/6.png' width='2000' height='2000' priority />
          </ImageDivSecond>
          <SecondParahraph>
          Nie wiesz jak nadać charakter swojej marce? A może masz w głowie pomysł, ale nie wiesz
          jak zacząć i szukasz ciekawych rozwiązań?
          <br/><br/>
          Pomożemy Ci w tym!
          Krok po kroku, stworzymy indywidualny projekt szyty na miarę na potrzeby Twojej firmy.
            <br/><br/>
          <span>Porozmawiajmy o potrzebach Twojej marki!</span>
          </SecondParahraph>
          <ButtonStyled>Wycena bez zobowiązań</ButtonStyled>
        </CountingDiv>
      </Container>
    </Layout>
  );
}
