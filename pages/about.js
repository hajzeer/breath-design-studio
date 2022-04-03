import Layout from '../layout/layout';
import styled from 'styled-components';
import Image from 'next/image';
import { MoveOne } from '../utils/animations';
import { CustomerPOV } from '../data/offer';
import TeamComponent from '../components/AboutComponents/teamComponent';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 0;
  overflow: hidden;
  position: relative;
`;

const InnerContainer = styled.div`
  width: 90%;
  height: auto;
  position: relative;
  margin: 30px 0;
  left: 50%;
  margin-left: -45%;
  padding: 20px;

  border: 1px solid #ffffff;

  @media (min-width: 1024px) {
    width: 80%;
    margin-left: -40%;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;
  margin: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -5px;
    background: #ffffff;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px 20px;

  span {
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    margin: ${({ margin }) => (margin ? '20px 20px' : '20px 60px')};
    width: ${(props) => (props.short ? '50%' : '100%')};
  }
`;

const ButtonStyled = styled.button`
  width: 300px;
  height: 60px;
  background: transparent;
  border: 1px solid #ffffff;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Now';
  position: relative;
  left: 50%;
  margin-left: -150px;

  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    background: #ffffff;

    color: #000000;
    font-weight: 500;
  }
`;

const SecondSubject = styled.h2`
  letter-spacing: 2px;
  margin: 40px 20px;

  color: #ffffff;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-weight: 600;
    margin: 40px 60px;
  }
`;

const BrandContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    top: -100px;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
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

  @media (min-width: 1024px) {
    font-weight: 600;
    margin: 40px 60px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }
`;

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
`;

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
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    right: 0;
    bottom: -25px;
    background: #ffffff;
  }
`;

const FirstFinishParagraph = styled.p`
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 500;
  margin: 20px;
  font-size: 25px;

  @media (min-width: 1024px) {
    font-size: 30px;
    text-align: center;
  }
`;

const SecondFinishParagraph = styled.p`
  color: #ffffff;
  font-weight: 500;
  margin: 20px;
  font-size: 20px;

  @media (min-width: 1024px) {
    text-align: center;
    font-size: 30px;
  }
`;

const About = () => {
  return (
    <Layout>
      <Container>
        <InnerContainer>
          <Subject>Dlaczego my?</Subject>
          <Paragraph margin>
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
        <ButtonStyled>
          Niezobowiązująca wycena
          <br /> twojego projektu
        </ButtonStyled>
        <ImageDivFirst>
          <Image src="/GRADIENTS/1.png" width="2000" height="2000" />
        </ImageDivFirst>
        <SecondSubject>skupiamy uwagę na twojej marce</SecondSubject>
        <Paragraph short>
          Twoi klienci „kupują wzrokiem”. Zaintrygowani nietypowymi
          rozwiązaniami, mogą zapamiętać właśnie Twoją markę. Tak jak oni
          przywiązujemy ogromną wagę do detalu. To on często decyduje o
          percepcji całej marki.
        </Paragraph>
        <Paragraph>
          <span>Każdy projekt jest dla nas najważniejszy!</span>
        </Paragraph>
        <BrandContainer>
          <TextContainer>
            <ThirdSubject>
              Przykładowe punkty styku klienta z twoją marką
            </ThirdSubject>
            <Paragraph>
              Twoi klienci spotykają się z twoją marką w różnych miejscach.
              otrzymując twoją wizytówkę, ulotkę, kartę twojego produktu,
              wchodząc na twoją stronę internetową czy widząc na mieście twój
              oznakowany samochód firmowy.
            </Paragraph>
            <Paragraph>
              Musisz bezwzględnie zadbać by wymienione elementy ze sobą
              współgrały tworząc w oczach Twoich klientów jedną opowieść, którą
              chcą obserwować i angażować się w jej działania, kupując Twoje
              produkty lub usługi.
            </Paragraph>
          </TextContainer>
          <ListContainer>
            {CustomerPOV.map((item, index) => {
              return <ListParagraph key={index}>{item}</ListParagraph>;
            })}
          </ListContainer>
        </BrandContainer>
        <TeamComponent />
        <FinishDiv>
          <FirstFinishParagraph>
            NASZĄ SPECJALIZACJĄ JEST KOMPLEKSOWA I PROFESJONALNA OBSŁUGA TWOJEJ
            FIRMY.
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
