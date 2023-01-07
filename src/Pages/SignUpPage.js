import {
  ManagingContainers,
  MainContainer,
  LogoContainer,
  SecondContainer,
  Logo,
  Slogan,
  ContainerInformation,
  ContainerForm,
  Button,
  RedirecitonText,
} from "../Assets/authStyle";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../Components/Form/useForm";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
    username: "",
    pictureUrl: "",
  });

  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();

    if (
      form.email === "" ||
      form.password === "" ||
      form.username === "" ||
      form.pictureUrl === ""
    ) {
      alert("Preencha todos os campos do formulário, por favor.");
      return;
    }

    const URL = "https://linkr-api-9ik9.onrender.com/sign-up";

    const promise = axios.post(URL, form);

    promise.then(() => {
      navigate("/sign-in");
    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
  }

  return (
    <ManagingContainers>
      <MainContainer>
        <LogoContainer>
          <Logo>linkr</Logo>
          <Slogan>
            <h1>save, share and discover</h1>
            <h1>the best links on the web</h1>
          </Slogan>
        </LogoContainer>
      </MainContainer>
      <SecondContainer>
        <ContainerInformation>
          <ContainerForm onSubmit={register}>
            <input
              type="email"
              placeholder=" e-mail"
              name="email"
              value={form.email}
              onChange={handleForm}
            />
            <input
              type="password"
              placeholder=" password"
              name="password"
              value={form.password}
              onChange={handleForm}
            />
            <input
              type="text"
              placeholder=" username"
              name="username"
              value={form.username}
              onChange={handleForm}
            />
            <input
              type="url"
              placeholder=" picture url"
              name="pictureUrl"
              value={form.pictureUrl}
              onChange={handleForm}
            />
            <Button type="submit">Sign Up</Button>
          </ContainerForm>
          <Link to="/">
            <RedirecitonText>Switch back to log in</RedirecitonText>
          </Link>
        </ContainerInformation>
      </SecondContainer>
    </ManagingContainers>
  );
}
