import styled from "styled-components";
import TeamList from "../AboutComponents/teamList";
import {People} from '../../data/offer'

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;


`;

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
    
  }
`

const Subject = styled.h2`
text-transform: uppercase;
align-self: flex-start;
color: #ffffff;
font-size: 25px;

@media (min-width: 1024px) {
font-size: 50px;
margin: 0 45px;
    
  }
`;

const TeamComponent = () => {
    return (
        <Container>
            <Subject>poznaj nas</Subject>

            <InnerContainer>
            <TeamList items={People}/>
            </InnerContainer>
        </Container>
    )
}


export default TeamComponent