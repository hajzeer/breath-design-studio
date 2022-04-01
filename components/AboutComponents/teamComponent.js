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

const TeamComponent = () => {
    return (
        <Container>
            <Subject>poznaj nas</Subject>
        </Container>
    )
}


export default TeamComponent