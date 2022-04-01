/** @format */

import styled from "styled-components";
import Image from "next/image";
import { MoveOne, MoveTwo } from "../../utils/animations";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  margin: 20px;
  z-index: 1;

  @media (min-width: 1024px) {
    margin: 100px;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  font-style: normal;
  letter-spacing: 2px;

  @media (min-width: 1024px) {
    font-size: 50px;
    margin: 25px 0;
    font-weight: 500;
  }
`;

const Paragraph = styled.p`
  color: #ffffff;
  line-height: 160%;

  span {
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    width: 50%;
    font-size: 20px;
  }
`;

const ImageDivFirst = styled.div`
  position: absolute;
  display: block;
  width: 900px;
  height: 900px;
  left: -100px;
  z-index: -1;
  animation: ${MoveOne} 4s linear infinite;

  @media (min-width: 1024px) {
    width: 2000px;
    height: 2000px;
    top: -300px;
  }
`;

const ImageDivSecond = styled.div`
  position: absolute;
  display: block;
  width: 700px;
  height: 700px;
  top: 320px;
  right: 0;
  z-index: -1;
  animation: ${MoveTwo} 4s linear infinite;

  @media (min-width: 1024px) {
    width: 1200px;
    height: 1200px;
    left: -300px;
    top: 500px;
  }
`;

const WelcomeComponents = () => {
  return (
    <Container>
      <ImageDivFirst>
        <Image src='/GRADIENTS/1.png' width='2000' height='2000' />
      </ImageDivFirst>
      <ImageDivSecond>
        <Image src='/GRADIENTS/2.png' width='2000' height='2000' />
      </ImageDivSecond>
      <InnerContainer>
        <TextContainer>
          <Subject>Cześć!</Subject>
          <Paragraph>
            WEŹ GŁĘBOKI ODDECH...
            <br />
            <br />
            Jesteśmy studium brandingowym. Naszą specjalizacją jest
            <span> identyfikacja wizualna</span> Każda marka ma do opowiedzenia
            historię. Niezależnie czy jest to historia doświadczenia na rynku,
            wyjątkowości oferowanych produktów lub usług. <br />
            Jaka jest Twoja historia?
            <br /> <span> CHĘTNIE JĄ ZIDENTYFIKUJEMY.</span>
          </Paragraph>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};

export default WelcomeComponents;
