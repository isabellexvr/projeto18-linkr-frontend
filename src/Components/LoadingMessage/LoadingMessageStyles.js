import styled from "styled-components";

export const LoadingMessageStyle = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  > div {
    height: 50px;
    width: 60%;
    border-radius: 15px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    > h1 {
      font-family: "Lato";
      font-weight: 600;
      font-size: 18px;
    }
  }
`;
