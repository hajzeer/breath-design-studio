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

const Subject = styled.h2`
text-transform: uppercase;
align-self: flex-start;
color: #ffffff;
margin: 20px;
font-size: 25px;
`;

const TeamComponent = () => {
    return (
        <Container>
            <Subject>poznaj nas</Subject>
            <TeamList items={People}/>
        </Container>
    )
}


export default TeamComponent