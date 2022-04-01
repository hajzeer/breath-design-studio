/** @format */
import { useState, useEffect } from "react";
import styled from "styled-components";
import OfferItems from "./OfferItems";
import { data } from "../../data/offer";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 100px 0;
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
    width: 50%;
    height: 1px;
    right: 0;
    bottom: -25px;
    background: #ffffff;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  margin: 20px 20px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    width: 50%;
    font-size: 100px;
    font-weight: 700;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px 20px;

  @media (min-width: 1024px) {
    width: 50%;
    font-size: 18px;
  }
`;

const OfferContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerOfferContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const OfferComponent = () => {
  return (
    <Container>
      <TextContainer>
        <Subject>Oferta</Subject>
        <Paragraph>
          Współpracujemy z małymi i dużymi firmami oraz instytucjami w Polsce.
          Dystans nie stanowi dla nas żadnej przeszkody!
          <br />
          <br />
          Zobacz co możemy dla Ciebie wykonać...
        </Paragraph>
      </TextContainer>
      <OfferContainer>
        <InnerOfferContainer>
          <OfferItems items={data.offer} />
        </InnerOfferContainer>
      </OfferContainer>
    </Container>
  );
};

export default OfferComponent;
