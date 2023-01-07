import styled from "styled-components";
import Header from "../Components/Constants/Header";
import PostPublicationForm from "../Components/TimelinePage/PostPublicationForm";
import Post from "../Components/TimelinePage/Post";
import useWindowDimensions from "../Components/Services/windowDimensions";
import Searchbox from "../Components/Constants/Searchbox";
import { useState } from "react";

export default function TimelinePage() {
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <>
      <Header />
      <TimelinePageStyle>
        {width < 840 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PostPublicationForm loading={loading} setLoading={setLoading} />
        <Post loading={loading} setLoading={setLoading} />
      </TimelinePageStyle>
    </>
  );
}

const TimelinePageStyle = styled.div`
  margin-top: 70px;
  height: 150vh;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  height: 87px;
  display: flex;
  align-items: center;
  width: 611px;
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;
