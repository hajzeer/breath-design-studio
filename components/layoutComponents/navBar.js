import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  background: #000000;
  transition: all 0.4s ease-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Anchor = styled.a`
  color: #ffffff;
  cursor: pointer;
  margin: 20px;
  z-index: 999;
  font-size: 25px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const navBar = ({ open, unActive }) => {
  return (
    <Container open={open}>
      <InnerContainer>
        <Link href="/about">
          <Anchor onClick={unActive}>O Nas</Anchor>
        </Link>
        <Link href="/" onClick={unActive}>
          <Anchor>Portfolio</Anchor>
        </Link>
        <Link href="/" onClick={unActive}>
          <Anchor>Blog</Anchor>
        </Link>
        <Link href="/" onClick={unActive}>
          <Anchor>Oferta</Anchor>
        </Link>
        <Link href="/#contact" onClick={unActive}>
          <Anchor>Kontakt</Anchor>
        </Link>
      </InnerContainer>
    </Container>
  );
};
export default navBar;
