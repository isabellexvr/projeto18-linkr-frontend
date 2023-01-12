import styled from "styled-components";

export const CancelContainer = styled.div`
  width: 85%;
  height: 81%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    width: 90%;
    justify-content: space-between;
  }
`;

export const CancelButton = styled.button`
  background: #ffffff;
  font-family: "Lato";
  font-weight: 700;
  font-size: 3vw;
  color: #1877f2;
  width: 75%;
  height: 37px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  background: #1877f2;
  font-family: "Lato";
  font-weight: 700;
  font-size: 3vw;
  color: #ffffff;
  width: 75%;
  height: 37px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const DeleteMessage = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 4.8vw;
  line-height: 20px;
  text-align: center;
  width: 98%;
  color: #ffffff;
`;
