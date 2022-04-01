import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: auto;
`;

const Subject = styled.h2`
text-transform: uppercase;
color: #ffffff;
margin: 40px 20px;
font-size: 25px;
`;

const TeamList = ({ items }) => {
    return (
        <Container>
            <Subject>poznaj nas</Subject>
        </Container>
    )
}


export default TeamList