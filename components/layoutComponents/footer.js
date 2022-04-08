/** @format */

import styled from 'styled-components';
import Image from 'next/image';
import {MoveOne} from '../../utils/animations';

const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 150px 0 150px 0;

  @media (min-width: 1024px) {
    padding: 0 0 150px 0;

  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: -25px;
    background: #ffffff;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
`;

const Subject = styled.h2`
  color: #ffffff;
  margin: 20px 20px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    width: 70%;
    margin: 5px 40px;

    font-size: 100px;
    font-weight: 700;
  }
`;

const Paragraph = styled.p`
  color: #ffffff;
  margin: 20px 0 50px 20px;

  @media (min-width: 1024px) {
    width: 30%;
    font-size: 18px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Anchor = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 5px 20px;
  align-self: flex-start;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 25px;
    margin: 5px 40px;
  }
`;

const SocialMediaContainer = styled.div`
  width: 200px;
  height: 40px;
  margin: 20px;
  border: 1px solid #ffffff;

  @media (min-width: 1024px) {
    margin: 0 12%;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const SocialMediaAnchor = styled.a`
  width: 50px;
  height: 50px;
`;

const ImageDiv = styled.div`
  position: absolute;
  display: block;
  width: 500px;
  height: 500px;
  top: -150px;
  left: -150px;
  z-index: -1;

  animation: ${MoveOne} 6s linear infinite;

  @media (min-width: 1024px) {
    width: 1000px;
    height: 1000px;
    top: -200px;
    left: -250px;
  }
`;

const Footer = () => {
    return (
        <Container id="contact">
            <ImageDiv>
                <Image src="/GRADIENTS/7.png" width="1000" height="1000"/>
            </ImageDiv>
            <TextContainer>
                <Subject>
                    SKONTAKTUJ SIĘ <br/> Z NAMI
                </Subject>
                <Paragraph>Pomagamy małym i dużym firmom.</Paragraph>
            </TextContainer>
            <ContentContainer>
                <ContactContainer>
                    <Anchor href="mailto:breath.design.studio@gmail.com">
                        breath.design.studio@gmail.com
                    </Anchor>
                    <Anchor href="tel:+48-538-324-858">(+48) 538 324 858</Anchor>
                </ContactContainer>
                <SocialMediaContainer>
                    <SocialMediaAnchor
                        href="https://www.instagram.com/breath.d.s/"
                        target="_blank">
                        <Image src="/icons/10.png" width="40" height="40"/>
                    </SocialMediaAnchor>
                    <SocialMediaAnchor
                        href="https://www.facebook.com/breathdesignstudio"
                        target="_blank">
                        <Image src="/icons/11.png" width="40" height="40"/>
                    </SocialMediaAnchor>
                    <SocialMediaAnchor
                        href="https://pl.pinterest.com/Breathdesignstudio"
                        target="_blank">
                        <Image src="/icons/12.png" width="40" height="40"/>
                    </SocialMediaAnchor>
                    <SocialMediaAnchor
                        href="https://www.behance.net/oliwiagolis"
                        target="_blank">
                        <Image src="/icons/13.png" width="40" height="40"/>
                    </SocialMediaAnchor>
                    <SocialMediaAnchor
                        href="https://www.linkedin.com/in/oliwia-dittrich-a4214b228"
                        target="_blank">
                        <Image src="/icons/14.png" width="40" height="40"/>
                    </SocialMediaAnchor>
                </SocialMediaContainer>
            </ContentContainer>
            <Paragraph>@{new Date().getFullYear()} Wszelkie prawa zastrzeżone <br/> BREATH DESIGN STUDIO by Krzysztof
                Hajder & Oliwia Dittrich</Paragraph>
        </Container>
    );
};

export default Footer;
