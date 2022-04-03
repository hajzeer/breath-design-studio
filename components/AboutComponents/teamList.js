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

border: ${props => props.active ? '2px solid #120093': '1px solid #ffffff'};
`

const TextContainer = styled.div`


margin: 40px;
width: 95%;


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
width: 95%;
height: auto;
padding: 10px;


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
    width: 90%;

    font-weight: 500;
}

h2 {
    color: #000000;
    margin: 20px;
    width: 90%;


}

&:hover {
    opacity: 1;
}
`

const ContentDiv = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: -1;


`

const TeamList = ({ items }) => {
    return (
        <>
        <Container active>
                            <ContentDiv>
                            <ImageDiv>
                                <Image src='/zdjęcia/9.png' width={500} height={500}/>
                            </ImageDiv>
                            <TextContainer>
                            <Subject>oliwia dittrich</Subject>
                            <Paragraph><span>FOUNDER / CREATIVE DIRECTOR / GRAPHIC DESIGNER</span></Paragraph>
                            </TextContainer >
                            <Paragraph>Jestem założycielką BREATH DESIGN STUDIO, dyrektorem kreatywnym
                                        oraz projektantem graficznym. Od dziecka jestem silnie związana z
                                        szeroko pojętą sztuką. W swojej pracy kieruję się kreatywnością z
                                        przemyślaną strategią oraz komercyjnym zamysłem.
                                        Moim ulubionym momentem w pracy jest znalezienie oryginalnego i
                                        nieszablonowego rozwiązania, które odwzoruje charakter firmy moich
                                        klientów.
                                        Zajmuję się kierownictwem artystycznym, projektowaniem zaskakujących
                                        identyfikacji wizualnych marek. Moje projekty są nieoczywiste,
                                        dopasowane do docelowej grupy odbiorców. Przykładam wielką uwagę
                                        do innowacyjnych rozwiązań oraz dbałości o szczegóły.
                                        Każdą wolną chwilę spędzam na czerpaniu inspiracji. Kiedy nie
                                        projektuję, oddaję się tworzeniu obrazów, które dają mi możliwość
                                        przelania na płótno swoich emocji.
                                        Czerpię inspirację z otaczającej mnie natury, przechodniów oraz
                                        otoczenia, w którym żyje.
                            </Paragraph>
                            </ContentDiv>


                        </Container>
            {
                items.map(item => {
                    return (
                        <Container key={item.id}>
                            <ContentDiv>
                            <ImageDiv>
                                <Image src={item.image} width={500} height={500}/>
                            </ImageDiv>
                            <TextContainer >
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