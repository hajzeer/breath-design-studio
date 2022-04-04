import styled from "styled-components";
import Layout from "../layout/layout";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subject = styled.h2`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;

`

const Soon = () => {
    return (
        <Layout>
            <Container>
                <Subject>
                    Jesteśmy w trakcie tworzenia ciekawych artykułów dla Was!
                </Subject>
            </Container>
        </Layout>
    )
}

export default Soon;