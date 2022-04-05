import {useRef} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import Layout from "../layout/layout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormStyled = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50%;
  }
`

const TextAreaStyled = styled.textarea`
  transition: all 0.2s ease-out;
  font-family: 'Now';
  font-weight: 500;

  resize: none;
  width: 100%;
  height: 200px;
  padding: 10px;

  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;

  &:focus {
    outline: none;

    -webkit-appearance: none;
    -webkit-box-shadow: 0 10px 30px -12px rgba(255, 255, 255, .8);
    -moz-box-shadow: 0 10px 30px -12px  rgba(255, 255, 255, .8);
    box-shadow: 0 10px 30px -12px  rgba(255, 255, 255, .8);
  }
`

const LabelStyled = styled.label`
  color: #ffffff;
  margin: 30px 0 10px 0;
`

const InputStyled = styled.input`
  transition: all 0.2s ease-out;
  font-family: 'Now';
  font-weight: 500;
  padding: 10px;
  width: 100%;
  height: 30px;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid #ffffff;
  text-transform: uppercase;

  &:focus {
    outline: none;

    -webkit-appearance: none;
    -webkit-box-shadow: 0 10px 30px -12px rgba(255, 255, 255, .8);
    -moz-box-shadow: 0 10px 30px -12px  rgba(255, 255, 255, .8);
    box-shadow: 0 10px 30px -12px  rgba(255, 255, 255, .8);
  }
`

const ButtonInput = styled.input`
  transition: all 0.2s ease-out;
  width: 200px;
  height: 50px;
  margin: 20px 0;
  background: none;
  outline: none;
  border: 1px solid #ffffff;
  font-family: 'Now';
  color: #ffffff;
  text-transform: uppercase;

  &:hover {
    background: #ffffff;
    color: #000000;
    font-weight: 500;
  }

`

const Pricing = () => {

    let name = useRef(null)
    let email = useRef(null)
    let message = useRef(null)

    const router = useRouter()

    const sendMail = (e) => {
        e.preventDefault()

        name = name.value
        email = email.value
        message = message.value

        let data = {
            name,
            email,
            message
        }


        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('SUCCESS!', response.status, response.text);
        }, error => {
            console.log('FAILED...', error);
        })
        router.reload()
    }
    return (
        <Layout>
            <Container>
                <FormStyled onSubmit={sendMail}>
                    <InputStyled type="hidden" name="contact__number"/>
                    <LabelStyled>Imię i nazwisko</LabelStyled>
                    <InputStyled ref={el => (name = el)} type="text" name="name"/>
                    <LabelStyled>Email</LabelStyled>
                    <InputStyled ref={el => (email = el)} type="email" name="email"/>
                    <LabelStyled>Powiedz nam na czym Ci zależy</LabelStyled>
                    <TextAreaStyled ref={el => (message = el)} type="text" name="message"/>
                    <ButtonInput type='submit'/>
                </FormStyled>
            </Container>
        </Layout>
    )
}
export default Pricing;