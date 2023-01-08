import styled from "styled-components";
import PostLink from "./PostLink";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {
  LoadingMessage,
  NoPostsMessage,
  ErrorMessage,
} from "./SmallComponents/AlternativeMessages";
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { LikeButton, LikedButton } from "./SmallComponents/LikeButtons";

export default function Post({ loading, setLoading }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { token } = useContext(AuthContext);
  const { userId } = jwtDecode(token);

  //https://linkr-api-9ik9.onrender.com/

  useEffect(() => {
    axios
      .get("http://localhost:4000/all-posts")
      .then((a) => {
        setLoading(false);
        setPosts(a.data);
        console.log(a.data);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  }, [loading, setLoading, liked]);

  return (
    <>
    <Tooltip anchorId="likesCount"/>
      {posts.length > 0 && !error && !loading && (
        <>
          {posts.map((e, i) => (
            <PostStyle key={i}>
              <LeftContainer>
                <UserProfilePicture alt="user-profile" src={e.userImage} />
                {e.likedBy.length > 0 && (
                  <>
                    {e.likedBy.find((l) => l.userId === userId) && (
                      <>
                        {LikedButton(
                          setDisabled,
                          disabled,
                          token,
                          setLiked,
                          liked,
                          e
                        )}
                      </>
                    )}
                    {!e.likedBy.find((l) => l.userId === userId) && (
                      <>
                        {LikeButton(
                          setDisabled,
                          disabled,
                          token,
                          setLiked,
                          liked,
                          e
                        )}
                      </>
                    )}
                  </>
                )}
                {e.likedBy.length < 1 && (
                  <>
                    {LikeButton(
                      setDisabled,
                      disabled,
                      token,
                      setLiked,
                      liked,
                      e
                    )}
                  </>
                )}
                {/*                 <LikesCount id="likesCount">{e.likesCount} likes</LikesCount>
                <div></div>
                <Tooltip
                  anchorId="likesCount"
                  clickable
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#222",
                    width: "200px",
                    fontSize: "19px",
                    overflow: "clip",
                  }}
                  delayShow="200"
                /> */}
                <LikesCount
                  id="likesCount"
                  data-tooltip-content={e.likesCount}
                  data-tooltip-place="top">
                  {e.likesCount} likes
                </LikesCount>
                
                <Tooltip anchorId="likesCount"/>
              </LeftContainer>
              <RightContainer>
                <UserName>{e.userName}</UserName>
                <Description>
                  <ReactTagify
                    tagStyle={{
                      color: "white",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                    tagClicked={(tag) =>
                      navigate(`/hashtag/${tag.substring(1)}`)
                    }
                  >
                    {e.postDescription}
                  </ReactTagify>
                </Description>
                <PostLink
                  linkTitle={e.linkTitle}
                  linkDescription={e.linkDescription}
                  linkUrl={e.linkUrl}
                  linkImage={e.linkImage}
                />
              </RightContainer>
            </PostStyle>
          ))}
        </>
      )}
      {!error && loading && <LoadingMessage />}
      {!error && !loading && posts.length < 1 && <NoPostsMessage />}
      {error && <ErrorMessage />}
    </>
  );
}

const PostStyle = styled.div`
  height: 232px;
  width: 100%;
  background-color: #171717;
  margin-top: 16px;
  display: flex;
  @media (min-width: 900px) {
    width: 611px;
    height: 276px;
    border-radius: 16px;
  }
`;

const LeftContainer = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  width: 18.4%;
  align-items: center;
  color: white;
`;

const UserProfilePicture = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 9px;
  margin-bottom: 17px;
  object-fit: cover;
`;

const LikesCount = styled.h2`
  text-align: center;
  font-size: 12px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Lato";
  width: 76.8%;
`;

const UserName = styled.h1`
  font-weight: 400;
  font-size: 17px;
  color: white;
  margin-top: 10px;
`;

const Description = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;
  line-height: 18px;
`;

const Balloon = styled.div`
  overflow: clip;
`;
