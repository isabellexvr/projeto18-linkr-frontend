import styled from "styled-components";
import Header from "../Constants/Header";
import { useState } from "react";

export default function MainPage() {
  const [form, setForm] = useState({});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <Header />
      <MainPageStyle>
        <PageTitle>timeline</PageTitle>
        <FormContainer>
          <h1>What are you going to share today?</h1>
          <PublicationForm>
            <input
              onChange={handleForm}
              placeholder="http://..."
              name="url"
              type="text"
            />
            <input
              onChange={handleForm}
              placeholder="Awesome article about #javascript"
              name="name"
              type="text"
            />
          </PublicationForm>
        </FormContainer>
      </MainPageStyle>
    </>
  );
}

const MainPageStyle = styled.div`
  margin-top: 70px;
  height: 150vh;
  background-color: #333333;
`;

const PageTitle = styled.h1`
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  height: 87px;
  display: flex;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: white;
  height: 164px;
  font-family: "Lato", sans-serif;
  > h1 {
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 300;
    font-size: 17px;
    color: #707070;
  }
`;

const PublicationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 87px;
  > input {
    width: 92%;
    border: none;
    background-color: #efefef;
    border-radius: 5px;
    height: 30px;
    box-sizing: border-box;
    padding: 6px 11px 8px;
    ::placeholder {
      color: #949494;
      font-weight: 300;
      font-size: 13px;
    }
  }
  > input:last-child {
    height: 47px;
    padding: 10px 10px 21px;
  }
`;
