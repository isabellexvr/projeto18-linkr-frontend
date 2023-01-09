import styled from "styled-components";

export function LoadingMessage() {
  return (
    <LoadingMessageStyle>
      <div>
        <h1>Loading posts...</h1>
      </div>
    </LoadingMessageStyle>
  );
}

export function NoPostsMessage() {
  return (
    <NoPostsMessageStyle>
      <h1>There are no posts yet.</h1>
      <button onClick={() => window.location.reload(false)}>Reload</button>
    </NoPostsMessageStyle>
  );
}

export function ErrorMessage(){
  return (
    <ErrorMessageStyle>
    <div>
      <h1>ERROR</h1>
      <h2>
        An error occured while trying to fetch the posts, please refresh
        the page clicking the button down below.
      </h2>
      <button onClick={() => window.location.reload(false)}>Reload</button>
    </div>
  </ErrorMessageStyle>
  )
}

const LoadingMessageStyle = styled.div`
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

const NoPostsMessageStyle = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  > h1 {
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    color: #efefef;
  }
`;

const ErrorMessageStyle = styled.div`
  margin-top: 25px;
  font-family: "Lato";
  display: flex;
  justify-content: center;
  width: 100%;
  > div {
    height: 125px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
      color: red;
      font-weight: 800;
      font-size: 20px;
      margin-bottom: 5px;
    }
    > h2 {
      font-size: 14px;
      margin-bottom: 10px;
      width: 90%;
      text-align: justify;
    }
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
  }
`;