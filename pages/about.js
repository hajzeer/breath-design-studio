
import Layout from "../layout/layout";
import styled from "styled-components";
import Image from "next/image";
import { MoveOne } from "../utils/animations";
import { CustomerPOV } from "../data/offer";
import TeamComponent from "../components/AboutComponents/teamComponent";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 0;
  overflow: hidden;
  position: relative;
`;

const InnerContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 30px 0;
  left: 50%;
  margin-left: -45%;

  border: 1px solid #ffffff;
`;

const Subject = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px 20px;

  span {
    font-weight: 500;
  }
`;

const ButtonStyled = styled.button`
  width: 300px;
  height: 60px;
  background: transparent;
  border: 1px solid #120093;
  font-size: 15px;
  color: #ffffff;
  font-family: "Now";
  position: relative;
  left: 50%;
  margin-left: -150px;

  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    background: #ffffff;

    color: #120093;
    font-weight: 600;
  }
`;

const SecondSubject = styled.h2`
  letter-spacing: 2px;
  margin: 40px 20px;

  color: #ffffff;
  text-transform: uppercase;
`;

const ImageDivFirst = styled.div`
  position: absolute;
  width: 900px;
  height: 900px;
  left: -100px;
  top: 450px;
  z-index: -1;
  animation: ${MoveOne} 6s linear infinite;

  @media (min-width: 1024px) {
    width: 2000px;
    height: 2000px;
    top: -300px;
  }
`;

const ThirdSubject = styled.h2`
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 40px 20px;

  
`;

const TextContainer = styled.div`
width: 100%;
height: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }

`

const ListParagraph = styled.p`
width: 200px;
color: #ffffff;
border: 1px solid #ffffff;
padding: 20px;
text-align: center;
text-transform: uppercase;
transition: all 0.2s ease-out;

&:hover {
    background: #ffffff;
    color: #000000;
    font-weight: 500;

  }
`

const ListContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FinishDiv = styled.div`
width: 100%;
height: auto;
position: relative;

&::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    right: 0;
    bottom: -25px;
    background: #ffffff;
  }

`

const FirstFinishParagraph = styled.p`

text-transform: uppercase;
color: #ffffff;
font-weight: 500;
margin: 20px;
font-size: 25px;

`;

const SecondFinishParagraph = styled.p`

color: #ffffff;
font-weight: 500;
margin: 20px;
font-size: 20px;


`;

const About = () => {
  return (
    <Layout>
      <Container>
        <InnerContainer>
          <Subject>Dlaczego my?</Subject>
          <Paragraph>
            SKUPIAMY UWAGĘ NA TWOJEJ MARCE <br />
            <br /> Od analizy marki, poprzez strategię komunikacji wizualnej po
            wdrożenie w postaci identyfikacji wizualnej Twojej marki. <br />
            <br /> Na każdym etapie procesu kreowania wizerunku marki, dokładamy
            wszelkich starań by efekt finalny czyli zobrazowanie wyjątkowości
            Twojej historii doskonale odzwierciedlało komunikaty, które muszą
            być przekazane odbiorcy. <br />
            <br />
            <span> Wszystko po to, by wyróżnić Twoją markę na tle innych.</span>
          </Paragraph>
        </InnerContainer>
        <ButtonStyled>Niezobowiązująca wycena<br/> twojego projektu</ButtonStyled>
        <ImageDivFirst>
          <Image src='/GRADIENTS/1.png' width='2000' height='2000' />
        </ImageDivFirst>
        <SecondSubject>skupiamy uwagę na twojej marce</SecondSubject>
        <Paragraph>
          Twoi klienci „kupują wzrokiem”. Zaintrygowani nietypowymi
          rozwiązaniami, mogą zapamiętać właśnie Twoją markę. Tak jak oni
          przywiązujemy ogromną wagę do detalu. To on często decyduje o
          percepcji całej marki.
        </Paragraph>
        <Paragraph>
          <span>Każdy projekt jest dla nas najważniejszy!</span>
        </Paragraph>
        <div>
          <TextContainer>
            <ThirdSubject>
              Przykładowe punkty styku klienta z twoją marką
            </ThirdSubject>
            <Paragraph>Twoi klienci spotykają się z twoją marką w różnych miejscach.
              otrzymując twoją wizytówkę, ulotkę, kartę twojego produktu,
              wchodząc na twoją stronę internetową czy widząc na mieście
              twój oznakowany samochód firmowy.</Paragraph>
            <Paragraph>Musisz bezwzględnie zadbać by wymienione elementy ze sobą
              współgrały tworząc w oczach Twoich klientów jedną opowieść,
              którą chcą obserwować i angażować się w jej działania,
              kupując Twoje produkty lub usługi.</Paragraph>
          </TextContainer>
          <ListContainer>
            {
              CustomerPOV.map((item, index) => {
                return (<ListParagraph key={index}>{item}</ListParagraph>)
              })
            }
          </ListContainer>
        </div>
        <TeamComponent />
        <FinishDiv>
          <FirstFinishParagraph>
            NASZĄ SPECJALIZACJĄ JEST KOMPLEKSOWA I PROFESJONALNA OBSŁUGA 
            TWOJEJ FIRMY.
          </FirstFinishParagraph>
          <SecondFinishParagraph>
            Naszą siłą jest zespół. Wspólnymi siłami dokładamy wszelkich starań, 
            aby pomóc Twojej firmie rozwinąć skrzydła na wielu płaszczyznach.
          </SecondFinishParagraph>
        </FinishDiv>
      </Container>
    </Layout>
  );
};

export default About;
