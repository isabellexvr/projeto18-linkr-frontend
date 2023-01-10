import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/authContext";
import {
  FormContainer,
  DesktopForm,
  PublicationForm,
  UrlInput,
  DescriptionInput,
  SubmitButton,
} from "./PostPublicationFormStyles";

//https://linkr-api-9ik9.onrender.com

export default function PostPublicationForm({ loading, setLoading }) {
  const [form, setForm] = useState({});
  const { token } = useContext(AuthContext);

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    console.log(form);
    setLoading(true);

    axios
      .post("http://localhost:4000/post", form, {
        headers: {
          Authorization: `Bearer ${token}
            `,
        },
      })
      .then((a) => {
        alert(a.data);
        setForm({});
        setLoading(false);
        setLoading(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        alert("Houve um erro ao publicar o seu link.");
      });
  }

  return (
    <FormContainer>
      <DesktopForm>
        <img
          alt='user'
          src='https://i.pinimg.com/originals/64/8b/da/648bda8b742f5f713e94f17ff1b49252.jpg'
        />
      </DesktopForm>
      <div>
        <h1>What are you going to share today?</h1>
        {!loading && (
          <PublicationForm onSubmit={sendForm}>
            <UrlInput
              onChange={handleForm}
              placeholder='http://...'
              name='url'
              type='url'
              required
            />
            <DescriptionInput
              onChange={handleForm}
              placeholder='Awesome article about #javascript'
              name='description'
              type='text'
            />
            <SubmitButton>
              <button>Publish</button>
            </SubmitButton>
          </PublicationForm>
        )}
        {loading && (
          <PublicationForm>
            <UrlInput disabled placeholder='http://...' />
            <DescriptionInput
              disabled
              placeholder='Awesome article about #javascript'
            />
            <SubmitButton>
              <button disabled>Publishing...</button>
            </SubmitButton>
          </PublicationForm>
        )}
      </div>
    </FormContainer>
  );
}
