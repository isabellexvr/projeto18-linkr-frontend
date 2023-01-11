import * as S from "../Assets/authStyle";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../Services/useForm";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authContext";

export default function SignIn() {
  const [form, handleForm] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const { token, setToken, setAndPersistToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);


  function login(event) {
    event.preventDefault();
    setLoading(true);

    // const URL = "https://linkr-api-9ik9.onrender.com/";
    const URL = "http://localhost:4000/sign-in";

    setTimeout(() => {
      const promise = axios.post(URL, form);

      promise.then((res) => {
        navigate("/timeline");
        setAndPersistToken(res.data);
        setLoading(false);
        console.log(res.data);
      });

      promise.catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        alert(err.response.data);
      });
    }, 1000);
  }

  return (
    <S.ManagingContainers>
      <S.MainContainer>
        <S.LogoContainer>
          <S.Logo>linkr</S.Logo>
          <S.Slogan>
            <h1>save, share and discover</h1>
            <h1>the best links on the web</h1>
          </S.Slogan>
        </S.LogoContainer>
      </S.MainContainer>
      <S.SecondContainer>
        <S.ContainerInformation>
          <S.ContainerForm onSubmit={login}>
            <input
              type='email'
              placeholder=' e-mail'
              name='email'
              value={form.email}
              onChange={handleForm}
            />
            <input
              type='password'
              placeholder=' password'
              name='password'
              value={form.password}
              onChange={handleForm}
            />
            <S.Button type='submit' disabled={loading}>
              Log In
            </S.Button>
          </S.ContainerForm>
          <Link to='sign-up'>
            <S.RedirecitonText>
              First time? Create an account!
            </S.RedirecitonText>
          </Link>
        </S.ContainerInformation>
      </S.SecondContainer>
    </S.ManagingContainers>
  );
}
