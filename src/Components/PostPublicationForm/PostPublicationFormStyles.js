import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  max-width: 611px;
  border-radius: 16px;
  background-color: white;
  height: 209px;
  font-family: "Lato", sans-serif;
  > div:nth-child(2) {
    width: 100%;
    > h1 {
      height: 42px;
      display: flex;
      align-items: flex-end;
      font-weight: 300;
      font-size: 17px;
      color: #707070;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    height: 164px;
    > div:nth-child(2) {
      > h1 {
        height: 42px;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-weight: 300;
        font-size: 17px;
        color: #707070;
      }
    }
  }
`;

export const DesktopForm = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  width: 86px;
  > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 18px;
    margin-top: 16px;
  }
`;

export const PublicationForm = styled.form`
  @media (max-width: 600px) {
    align-items: center;
    margin-top: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;

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

export const UrlInput = styled.input`
  height: 30px;
  padding: 6px 11px 8px;
`;

export const DescriptionInput = styled.input`
  margin-top: 5px;
  @media (max-width: 600px) {
    height: 47px;
  }
  height: 66px;
  padding: 10px 10px 21px;
`;

export const SubmitButton = styled.div`
  margin-top: 5px;
  height: 35px;
  width: 92%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  > button {
    background-color: #1877f2;
    border-radius: 5px;
    width: 112px;
    height: 31px;
    border: none;
    color: #ffffff;
    font-family: "Lato";
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    :disabled {
      background-color: #80b1ed;
    }
  }
  @media (max-width: 600px) {
    > button {
      height: 22px;
    }
  }
`;
