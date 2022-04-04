import styled from 'styled-components';
import {Portfolio} from "../../data/portfolio";

const Container = styled.div`
  padding: 100px 0;
  color: #ffffff;
`;

const ProjectsPage = ({items}) => {
    return (
        <Container>
            <p>hello world {items.name}</p>
        </Container>
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
    const items = Portfolio.filter(element => element.slug === params.slug);
    return {
        props: {
            items,
        },
    };
}

export default ProjectsPage;

