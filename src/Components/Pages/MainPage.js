import styled from "styled-components";
import Header from "../Constants/Header";
import { useState } from "react";
import PostForm from "../Constants/PostForm";

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
        <PostForm handleForm={handleForm}/>
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

