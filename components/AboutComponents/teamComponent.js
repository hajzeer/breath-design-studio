import styled from 'styled-components';
import TeamList from '../AboutComponents/teamList';
import {People} from '../../data/offer';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;


`;

const DivHelperOne = styled.div`

  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  top: -25px;
  background: #ffffff;

`
const DivHelperTwo = styled.div`

  position: absolute;
  width: 50%;
  height: 1px;
  left: 0;
  top: 70px;
  background: #ffffff;

  @media (min-width: 1024px) {
    top: 120px;

  }

`

const InnerContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 95%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    justify-items: center;
  }
`;

const Subject = styled.h2`
  text-transform: uppercase;
  width: 100%;
  align-self: flex-start;
  color: #ffffff;
  font-size: 30px;
  margin: 0 20px;

  @media (min-width: 1024px) {
    font-size: 55px;
    margin: 20px 60px;
  }
`;

const TeamComponent = () => {
    return (
        <Container>
            <DivHelperOne/>
            <Subject>poznaj nas</Subject>
            <DivHelperTwo/>
            <InnerContainer>
                <TeamList items={People}/>
            </InnerContainer>
        </Container>
    );
};

export default TeamComponent;
