import styled from 'styled-components';
import Layout from '../layout/layout';
import { Portfolio } from '../data/portfolio';
import NewestProjectsElements from '../components/HomeComponents/NewestProjectsElements';

const Container = styled.div`
  padding: 100px 0;
  width: 100%;
  height: auto;
`;

const Subject = styled.h2`
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 95%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    justify-items: center;
  }
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <Container>
        <Subject>Portfolio</Subject>
        <InnerContainer>
          <NewestProjectsElements items={Portfolio} />
        </InnerContainer>
      </Container>
    </Layout>
  );
};
export default PortfolioPage;
