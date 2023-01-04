import styled from "styled-components";
import Header from "../Components/Constants/Header";
import PostForm from "../Components/TimelinePage/PostForm";
import Post from "../Components/TimelinePage/Post";

export default function TimelinePage() {

  return (
    <>
      <Header />
      <TimelinePageStyle>
        <PageTitle>timeline</PageTitle>
        <PostForm />
        <Post/>
      </TimelinePageStyle>
    </>
  );
}

const TimelinePageStyle = styled.div`
  margin-top: 70px;
  height: 150vh;
  background-color: #333333;
`;

const PageTitle = styled.h1`
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  height: 87px;
  display: flex;
  align-items: center;
`;
