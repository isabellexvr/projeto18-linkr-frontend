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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../Components/Form/useForm";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Context/authContext";

export default function SignIn() {
  const [form, handleForm] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const { token, setToken, setAndPersistToken } = useContext(AuthContext);

  function login(event) {
    event.preventDefault();

    // const URL = "https://linkr-api-9ik9.onrender.com/";
    const URL = "http://localhost:4000/sign-in";

    const promise = axios.post(URL, form);

    promise.then((res) => {
      navigate("/timeline");
      setAndPersistToken(res.data);
      console.log(res.data);
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
          <ContainerForm onSubmit={login}>
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
            <Button type="submit">Log In</Button>
          </ContainerForm>
          <Link to="sign-up">
            <RedirecitonText>First time? Create an account!</RedirecitonText>
          </Link>
        </ContainerInformation>
      </SecondContainer>
    </ManagingContainers>
  );
}
