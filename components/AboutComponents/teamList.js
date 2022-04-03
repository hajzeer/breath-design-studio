import styled from "styled-components"
import Image from 'next/image'

const Container = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
margin: 100px 0;
color:#fff;

border: ${props => props.active ? '1px solid #ffffff': '2px solid #120093'};
`

const TextContainer = styled.div`

border: ${props => props.active ? '1px solid #ffffff': '2px solid #120093'};



`

const Subject = styled.h2`

color:#ffffff;
text-transform: uppercase;
margin: 20px;


`

const Paragraph = styled.p`
color:#ffffff;
margin: 20px;

span {
text-transform: uppercase;

}
`

const ImageDiv = styled.div`
width: 100%;
height: auto;

`


const InfoContainer = styled.div`
opacity: 0;
position: absolute;
width: 100%;
min-height: 100%;
left: 0;
top: 0;
background: #ffffff;
z-index: 1;
transition: all 0.2s ease-out;


p {
    color: #000000;
    margin: 20px;
    font-weight: 500;
}

h2 {
    color: #000000;
    margin: 20px;

}

&:hover {
    opacity: 1;
}
`

const ContentDiv = styled.div`

z-index: -1;


`

const TeamList = ({ items }) => {
    return (
        <>
            {
                items.map(item => {
                    return (
                        <Container key={item.id} active={item.active}>
                            <ContentDiv>
                            <ImageDiv>
                                <Image src={item.image} width={500} height={500}/>
                            </ImageDiv>
                            <TextContainer active={item.active}>
                            <Subject>{item.name}</Subject>
                            <Paragraph><span>{item.title}</span></Paragraph>
                            </TextContainer >
                            </ContentDiv>
                            <InfoContainer>
                            <Subject>{item.name}</Subject>
                            <Paragraph><span>{item.title}</span></Paragraph>
                            <Paragraph>{item.description}</Paragraph>
                            </InfoContainer>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default TeamList;