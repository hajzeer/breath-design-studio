import Layout from '../layout/layout';
import styled from 'styled-components';
import Image from 'next/image';
import {MoveOne} from '../utils/animations';
import {CustomerPOV} from '../data/offer';
import TeamComponent from '../components/AboutComponents/teamComponent';
import Link from "next/link";

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

  border: 1px solid #ffffff;

  @media (min-width: 1024px) {
    width: 70%;
    margin-left: -35%;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;
  margin: 20px;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const DivHelper = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: #ffffff;
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px 20px;

  span {
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    margin: ${({margin}) => (margin ? '40px 20px' : '20px 60px')};
    width: ${(props) => (props.short ? '50%' : 'none')};
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
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


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
  height: 40px;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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


  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    justify-items: center;
  }
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
                <InnerContainer align>
                    <Subject>Dlaczego my?</Subject>
                    <DivHelper/>
                    <Paragraph margin>
                        SKUPIAMY UWAG?? NA TWOJEJ MARCE <br/>
                        <br/> Od analizy marki, poprzez strategi?? komunikacji wizualnej po
                        wdro??enie w postaci identyfikacji wizualnej Twojej marki. <br/>
                        <br/> Na ka??dym etapie procesu kreowania wizerunku marki, dok??adamy
                        wszelkich stara?? by efekt finalny czyli zobrazowanie wyj??tkowo??ci
                        Twojej historii doskonale odzwierciedla??o komunikaty, kt??re musz??
                        by?? przekazane odbiorcy. <br/>
                        <br/>
                        <span> Wszystko po to, by wyr????ni?? Twoj?? mark?? na tle innych.</span>
                    </Paragraph>
                </InnerContainer>
                <Link href='/pricing'>
                    <ButtonStyled>
                        Niezobowi??zuj??ca wycena
                        <br/> twojego projektu
                    </ButtonStyled>
                </Link>
                <ImageDivFirst>
                    <Image src="/GRADIENTS/1.png" width="2000" height="2000" loading='lazy'/>
                </ImageDivFirst>
                <SecondSubject>skupiamy uwag?? na twojej marce</SecondSubject>
                <Paragraph short>
                    Twoi klienci ???kupuj?? wzrokiem???. Zaintrygowani nietypowymi
                    rozwi??zaniami, mog?? zapami??ta?? w??a??nie Twoj?? mark??. Tak jak oni
                    przywi??zujemy ogromn?? wag?? do detalu. To on cz??sto decyduje o
                    percepcji ca??ej marki.
                </Paragraph>
                <Paragraph>
                    <span>Ka??dy projekt jest dla nas najwa??niejszy!</span>
                </Paragraph>
                <BrandContainer>
                    <TextContainer>
                        <ThirdSubject>
                            Przyk??adowe punkty styku klienta z twoj?? mark??
                        </ThirdSubject>
                    </TextContainer>
                    <ListContainer>
                        {CustomerPOV.map((item, index) => {
                            return <ListParagraph key={index}>{item}</ListParagraph>;
                        })}
                    </ListContainer>
                </BrandContainer>
                <TeamComponent/>
                <FinishDiv>
                    <FirstFinishParagraph>
                        NASZ?? SPECJALIZACJ?? JEST KOMPLEKSOWA I PROFESJONALNA OBS??UGA TWOJEJ
                        FIRMY.
                    </FirstFinishParagraph>
                    <SecondFinishParagraph>
                        Nasz?? si???? jest zesp????. Wsp??lnymi si??ami dok??adamy wszelkich stara??,
                        aby pom??c Twojej firmie rozwin???? skrzyd??a na wielu p??aszczyznach.
                    </SecondFinishParagraph>
                </FinishDiv>
            </Container>
        </Layout>
    );
};

export default About;
