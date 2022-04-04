import styled from "styled-components";
import Layout from "../../layout/layout";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Soon = () => {
    return (
        <Layout>
            <Container>
                <h2>
                    Jesteśmy w trakcie tworzenia ciekawych artykułów dla Was!
                </h2>
            </Container>
        </Layout>
    )
}

export default Soonśś