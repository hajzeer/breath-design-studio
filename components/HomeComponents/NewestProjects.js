import {useRef, useState} from 'react';
import styled from 'styled-components';
import NewestProjectsElements from './NewestProjectsElements';
import {Portfolio} from '../../data/portfolio';

const Container = styled.div`
  width: 100%;
  margin: 100px 0;
  height: auto;
  display: flex;
  flex-direction: column;

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
    width: 70%;
    height: 1px;
    right: 0;
    bottom: -25px;
    background: #ffffff;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  .active {
    transform: scale(1);
  }

  @media (min-width: 1024px) {
    height: 500px;

  }
`;

const Subject = styled.h2`
  color: #ffffff;
  margin: 20px 20px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 600;

  @media (min-width: 1024px) {
    width: 80%;
    font-size: 70px;
    font-weight: 700;
    margin: 50px 80px;
  }
`;

const NewestProjects = () => {
    const [isDown, setIsDown] = useState(true);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    let slider = useRef();

    const mouseDown = (e) => {
        slider.classList.add('active');
        setIsDown(true);
        let start = e.pageX - slider.offsetLeft;
        setStartX(start);
        let left = slider.scrollLeft;
        setScrollLeft(left);
    };

    const mouseLeave = () => {
        setIsDown(false);

        slider.classList.remove('active');
    };

    const mouseUp = () => {
        setIsDown(false);

        slider.classList.remove('active');
    };

    const mouseMove = (e) => {
        if (!isDown) return;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    };

    return (
        <Container>
            <Subject>najnowsze projekty</Subject>
            <InnerContainer
                ref={(el) => (slider = el)}
                onMouseDown={mouseDown}
                onMouseLeave={mouseLeave}
                onMouseUp={mouseUp}
                onMouseMove={mouseMove}>
                <NewestProjectsElements items={Portfolio}/>
            </InnerContainer>
        </Container>
    );
};

export default NewestProjects;
