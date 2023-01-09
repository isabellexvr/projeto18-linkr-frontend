import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate, useParams } from "react-router-dom";
import PostLink from "./PostLink";
import { Tooltip, TooltipWrapper, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { LikeButton, LikedButton } from "./SmallComponents/LikeButtons";
import { TiPencil } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../Context/authContext";
import jwtDecode from "jwt-decode";

export default function PostHashTags({openModal, setDeletePost, setIsOpen}) {
  const navigate = useNavigate();
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState([]);
  const [editedDescription, setEditedDescription] = useState({});
  const { token } = useContext(AuthContext);
  const { userId } = jwtDecode(token);
  

  function handleLikedBy(arr) {
    let string;

    if (arr.find((e) => e.userId === userId)) {
      if (arr.length > 2) {
        string = `Você ${arr[arr.length - 1].username} e outras ${
          arr.length - 2
        } pessoas`;
        return string;
      }
      if (arr.length === 2) {
        string = `Você e ${arr[arr.length - 1].username} curtiram`;
        return string;
      } else {
        return (string = "Você curtiu");
      }
    }

    if (arr.length > 2) {
      string = `${arr[arr.length - 1].username} , ${
        arr[arr.length - 2].username
      } e outras ${arr.length - 2} pessoas`;
      return string;
    } else if (arr.length === 2) {
      string = `${arr[arr.length - 1].username} , ${
        arr[arr.length - 2].username
      } curtiram`;
      return string;
    } else {
      return (string = `${arr[arr.length - 1].username}, curtiu`);
    }
  }


  useEffect((() => {
    const promisse = axios.get(`http://localhost:4000/hashtag/${hashtag}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
    promisse.then((res) => {
      console.log(res);
      setPosts(res.data);
    });
    promisse.catch((err) => {
      console.log(err.response);
    });
  }), [hashtag]);
  
  console.log(posts)
  return (
    <>
      {posts.length > 0 && !error && !loading && (
        <>
          {posts.map((e, i) => (
            <TooltipProvider>
              <PostStyle key={i}>
                <LeftContainer>
                  <UserProfilePicture alt="user-profile" src={e.pictureUrl} />
                  {e.likedBy.length > 0 && (
                    <>
                      {e.likedBy.find((l) => l.userId === userId) && (
                        <>
                          {
                            <LikedButton
                              setDisabled={setDisabled}
                              disabled={disabled}
                              token={token}
                              setLiked={setLiked}
                              liked={liked}
                              e={e}
                            />
                          }
                        </>
                      )}
                      {!e.likedBy.find((l) => l.userId === userId) && (
                        <>
                          {
                            <LikeButton
                              setDisabled={setDisabled}
                              disabled={disabled}
                              token={token}
                              setLiked={setLiked}
                              liked={liked}
                              e={e}
                            />
                          }
                        </>
                      )}
                    </>
                  )}
                  {e.likedBy.length < 1 && (
                    <>
                      {
                        <LikeButton
                          setDisabled={setDisabled}
                          disabled={disabled}
                          token={token}
                          setLiked={setLiked}
                          liked={liked}
                          e={e}
                        />
                      }
                    </>
                  )}
                  <TooltipWrapper tooltipId={e.id}>
                    <LikesCount>{e.likes} likes</LikesCount>
                  </TooltipWrapper>
                  <Tooltip
                    id={e.id}
                    content={handleLikedBy(e.likedBy)}
                    place="bottom"
                    className="example"
                  />
                </LeftContainer>
                <RightContainer>
                  <UserName>
                    {e.username}
                  </UserName>
                  {!edit.includes(e.postId) && (
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
                        {e.description}
                      </ReactTagify>
                    </Description>
                  )}

                  <PostLink
                    linkTitle={e.linkTitle}
                    linkDescription={e.linkDescription}
                    linkUrl={e.linkUrl}
                    linkImage={e.linkImage}
                  />
                </RightContainer>
              </PostStyle>
            </TooltipProvider>
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
  height: 100%;
  width: 100%;
  background-color: #171717;
  margin-top: 100px;
  margin-bottom: -80px;
  display: flex;
  @media (min-width: 900px) {
    width: 611px;
    height: 276px;
    border-radius: 16px;
  }
`;

const LoadingMessage = styled.div`
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

const ErrorMessage = styled.div`
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

const NoPostsMessage = styled.div`
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

const LeftContainer = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  width: 18.4%;
  align-items: center;
  color: white;
`;

const UserProfilePicture = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-top: 9px;
  margin-bottom: 17px;
`;

const LikeIcon = styled(FiHeart)`
  margin-bottom: 12px;
  font-size: 22px;
`;

const LikesCount = styled.h2`
  text-align: center;
  font-size: 12px;
`;

const RightContainer = styled.div`
  margin-top: 18px;
  display: flex;
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

const EditPencil = styled(TiPencil)`
  position: absolute;
  color: white;
  right: 25px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isOpened ? "none" : "initial")};
`;

const TrashCan = styled(FaTrash)`
  color: white;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const EditDescription = styled.input``;
