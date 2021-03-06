import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 100px 0;
  color: #fff;

  border: ${(props) =>
          props.active ? '2px solid #120093' : '1px solid #ffffff'};

  @media (min-width: 1024px) {
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 100px 0;
  color: #fff;
  border: ${(props) =>
          props.active ? '2px solid #120093' : '1px solid #ffffff'};

  @media (min-width: 1024px) {
    width: 95%;

    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const TextContainer = styled.div`
  margin: 40px;
  width: 95%;
`;

const Subject = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  margin: 20px;
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px;

  span {
    text-transform: uppercase;
  }
`;

const ImageDiv = styled.div`
  width: 95%;
  height: auto;
  padding: 10px;
`;

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
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
const MainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TeamList = ({items}) => {
    return (
        <>
            <MainContainer active>
                <MainContentDiv>
                    <ImageDiv>
                        <Image src="/zdj/9.png" width={500} height={500} priority/>
                    </ImageDiv>
                    <TextContainer>
                        <Subject>oliwia dittrich</Subject>
                        <Paragraph>
                            <span>FOUNDER / CREATIVE DIRECTOR / GRAPHIC DESIGNER</span>
                        </Paragraph>
                        <Paragraph>
                            Jestem za??o??ycielk?? BREATH DESIGN STUDIO, dyrektorem kreatywnym
                            oraz projektantem graficznym. Od dziecka jestem silnie zwi??zana z
                            szeroko poj??t?? sztuk??. W swojej pracy kieruj?? si?? kreatywno??ci?? z
                            przemy??lan?? strategi?? oraz komercyjnym zamys??em. Moim ulubionym
                            momentem w pracy jest znalezienie oryginalnego i nieszablonowego
                            rozwi??zania, kt??re odwzoruje charakter firmy moich klient??w.
                            Zajmuj?? si?? kierownictwem artystycznym, projektowaniem
                            zaskakuj??cych identyfikacji wizualnych marek. Moje projekty s??
                            nieoczywiste, dopasowane do docelowej grupy odbiorc??w. Przyk??adam
                            wielk?? uwag?? do innowacyjnych rozwi??za?? oraz dba??o??ci o szczeg????y.
                            Ka??d?? woln?? chwil?? sp??dzam na czerpaniu inspiracji. Kiedy nie
                            projektuj??, oddaj?? si?? tworzeniu obraz??w, kt??re daj?? mi mo??liwo????
                            przelania na p????tno swoich emocji. Czerpi?? inspiracj?? z
                            otaczaj??cej mnie natury, przechodni??w oraz otoczenia, w kt??rym
                            ??yje.
                        </Paragraph>
                    </TextContainer>
                </MainContentDiv>
            </MainContainer>

            {items.map((item) => {
                return (
                    <Container key={item.id}>
                        <ContentDiv>
                            <ImageDiv>
                                <Image src={item.image} width={500} height={500} loading='lazy'/>
                            </ImageDiv>
                            <TextContainer>
                                <Subject>{item.name}</Subject>
                                <Paragraph>
                                    <span>{item.title}</span>
                                </Paragraph>
                            </TextContainer>
                        </ContentDiv>
                        <InfoContainer>
                            <Subject>{item.name}</Subject>
                            <Paragraph>
                                <span>{item.title}</span>
                            </Paragraph>
                            <Paragraph>{item.description}</Paragraph>
                        </InfoContainer>
                    </Container>
                );
            })}
        </>
    );
};

export default TeamList;
