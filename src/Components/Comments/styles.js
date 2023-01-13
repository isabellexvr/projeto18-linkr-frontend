import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
`;

export const WrapperComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: solid, 5px, #353535;
  border-radius: 5px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  > svg {
    color: white;
    position: relative;
    right: 20px;
  }
`;

export const CommentForm = styled.form`
  width: 80%;
  input {
    background-color: #252525;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    color: #575757;
    border: none;
  }
`;

export const WrapperGetComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  background-color: #1e1e1e;
  border-bottom: solid 1px #acacac;
  width: 93%;
  margin: 0 auto;
  top: 0;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export const PictureBox = styled.div``;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const name = styled.div`
  color: white;
`;
export const Comment = styled.div`
  margin-top: 5px;
  color: #acacac;
`;
