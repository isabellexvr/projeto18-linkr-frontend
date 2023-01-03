import styled from "styled-components";

export default function PostForm({ handleForm }) {
  return (
    <FormContainer>
      <h1>What are you going to share today?</h1>
      <PublicationForm>
        <UrlInput
          onChange={handleForm}
          placeholder="http://..."
          name="url"
          type="url"
        />
        <DescriptionInput
          onChange={handleForm}
          placeholder="Awesome article about #javascript"
          name="description"
          type="text"
        />
        <SubmitButton>
          <button>Publish</button>
        </SubmitButton>
      </PublicationForm>
    </FormContainer>
  );
}

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
  height: 122px;
  > input {
    width: 92%;
    border: none;
    background-color: #efefef;
    border-radius: 5px;
    box-sizing: border-box;
    ::placeholder {
      color: #949494;
      font-weight: 300;
      font-size: 13px;
    }
  }
  > input:focus {
    box-sizing: border-box;
    outline: none !important;
    border: none;
  }
`;

const UrlInput = styled.input`
  height: 30px;
  padding: 6px 11px 8px;
`;

const DescriptionInput = styled.input`
  height: 47px;
  padding: 10px 10px 21px;
`;

const SubmitButton = styled.div`
  height: 35px;
  width: 92%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  > button {
    background-color: #1877f2;
    border-radius: 5px;
    width: 112px;
    height: 22px;
    border: none;
    color: #ffffff;
    font-family: "Lato";
    font-weight: 700;
    font-size: 13px;
  }
`;
