import styled from "styled-components"
import Image from 'next/image'
import { MoveOne } from "../../utils/animations"

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;

color:#fff;
`

const TextContainer = styled.div`

margin: 20px;

`

const Subject = styled.h2`

color:#ffffff;
text-transform: uppercase;

`

const Paragraph = styled.p`
color:#ffffff;

span {
text-transform: uppercase;

}
`

const ImageDiv = styled.div`
width: 100%;
height: 400px;
`

const GradientImage = styled.div`
  position: absolute;
  display: block;
  width: 550px;
  height: 550px;
  left: -80px;
  top: -80px;
  z-index: -1;
  animation: ${MoveOne} 6s linear infinite;
`

const TeamList = ({ items }) => {
    return (
        <>
            {
                items.map(item => {
                    return (
                        <Container key={item.id}>
                            <ImageDiv>
                                <Image src={item.image} width={500} height={500}/>
                            </ImageDiv>
                            <GradientImage>
                              <Image src={item.gradient} width='2000' height='2000' />
                            </GradientImage>
                            <TextContainer>
                            <Subject>{item.name}</Subject>
                            <Paragraph><span>{item.title}</span></Paragraph>
                            <Paragraph>{item.description}</Paragraph>
                            </TextContainer>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default TeamList;