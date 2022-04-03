import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 10px;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  height: auto;
  padding: 0;
  z-index: -1;
`;

const DivHelper = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all 0.2s ease-out;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);

    p {
      display: block;
    }
  }
`;

const Paragraph = styled.p`
  margin: 20px;
  display: none;
  position: relative;
  top: 40%;
  text-align: center;
  z-index: 99;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
`;

const NewestProjectsElements = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Container key={item.id}>
            <DivHelper>
              <Paragraph>{item.name}</Paragraph>
            </DivHelper>
            <ImageContainer>
              <Image src={item.image} width={1000} height={1000} />
            </ImageContainer>
          </Container>
        );
      })}
    </>
  );
};

export default NewestProjectsElements;
