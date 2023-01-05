import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../Components/Constants/Header";
import Post from "../Components/TimelinePage/Post";
import Trending from "../Components/TimelinePage/Trending";
import { useParams } from "react-router-dom";

export default function HashTagsPage() {
  const {hashtag} = useParams()

    return (
        <>
            <Header />
            <HashTagPage>
                <PageTitle>#{hashtag}</PageTitle>
                <PostMobile>
                    <Post />
                </PostMobile>
                <Trending />
            </HashTagPage>
        </>
    );
}

const HashTagPage = styled.div`
  margin-top: 70px;
  height: 150vh;
  background-color: #333333;
  @media(min-width: 900px){
    display: flex;
  justify-content: center;
  }
 
`;

const PostMobile = styled.div`
@media(min-width: 900px){
    display: flex;
    flex-direction: column;
}
`

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
