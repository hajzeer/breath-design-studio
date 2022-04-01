/** @format */

import styled from "styled-components";

const Container = styled.div`
  transition: all 0.2s ease-out;
  width: 80%;
  height: 350px;
  margin: 20px 0;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;

  display: flex;
  flex-direction: column;

  &:hover {
    background: #ffffff;
    color: #000000;

    p {
      font-weight: 700;
    }

    h2 {
      font-weight: 900;
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const Subject = styled.h2`
  margin: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  justify-self: flex-start;
`;
const Paragraph = styled.p`
  margin: 20px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 80%;

  justify-self: flex-end;
`;

const OfferItems = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Container key={item.id}>
            <Subject>{item.title}</Subject>
            <TextContainer>
              {item.description.map((desc, index) => {
                return <Paragraph key={index}>{desc}</Paragraph>;
              })}
            </TextContainer>
          </Container>
        );
      })}
    </>
  );
};
export default OfferItems;
