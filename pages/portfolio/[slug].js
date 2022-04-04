import styled from 'styled-components';
import {Portfolio} from "../../data/portfolio";
import Layout from "../../layout/layout";
import Image from "next/image";

const Container = styled.div`
  padding: 100px 0;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ImageContainer = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const ProjectsPage = ({items}) => {


    return (
        <Layout>
            <Container>
                <ImageContainer>
                    <Image src={items.visual} width={1200} height={6000} quality={100} priority/>
                </ImageContainer>
            </Container>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = Portfolio
    console.log(paths);
    return {
        paths: paths.map((element) => ({params: {slug: element.slug}})),
        fallback: "blocking",
    };
}

export const getStaticProps = async ({params}) => {
    const items = Portfolio.find(element => element.slug === params.slug);
    return {
        props: {
            items,
        },
    };
}

export default ProjectsPage;

