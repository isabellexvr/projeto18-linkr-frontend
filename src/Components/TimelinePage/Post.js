import styled from "styled-components";
import PostLink from "./PostLink";
import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {
  LoadingMessage,
  NoPostsMessage,
  ErrorMessage,
} from "./SmallComponents/AlternativeMessages";
import { AuthContext } from "../Context/authContext";
import { Tooltip, TooltipWrapper, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { LikeButton, LikedButton } from "./SmallComponents/LikeButtons";
import {
  EditButton,
  DeleteButton,
} from "./SmallComponents/EditAndDeleteButtons";
import Description from "./SmallComponents/PostDescription";

export default function Post({
  loading,
  setLoading,
  setIsOpen,
  setDeletePost,
  openModal,
}) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState([]);
  const [editedDescription, setEditedDescription] = useState({});
  const { token } = useContext(AuthContext);
  const { userId } = jwtDecode(token);

  //https://linkr-api-9ik9.onrender.com/

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

  function sendNewDescription(e, postId) {
    e.preventDefault();
    console.log(postId);
    setLoading(true);

    const config = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        description: editedDescription,
      },
    };
    axios(`http://localhost:4000/posts/${postId}`, config)
      .then((a) => {
        setLoading(false);
        setEdit([]);
        console.log(a.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setLoading(false);
      });
  }

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
      });
  }, [loading, setLoading, liked, edit]);

  console.log(posts);

  return (
    <>
      {posts.length > 0 && !error && !loading && (
        <>
          {posts.map((e, i) => (
            <TooltipProvider>
              <PostStyle key={i}>
                <LeftContainer>
                  <UserProfilePicture alt="user-profile" src={e.userImage} />
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
                    <LikesCount>{e.likesCount} likes</LikesCount>
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
                    {e.userId === userId && (
                      <>
                        <EditButton
                          setEditedDescription={setEditedDescription}
                          e={e}
                          edit={edit}
                          setEdit={setEdit}
                        />
                        <DeleteButton
                          openModal={openModal}
                          setIsOpen={setIsOpen}
                          setDeletePost={setDeletePost}
                          e={e}
                        />
                      </>
                    )}
                    <p onClick={() => navigate(`/user/${e.id}`)}>
                      {e.userName}
                    </p>
                  </UserName>
                  {edit.includes(e.postId) && (
                    <form
                      onSubmit={(event) => sendNewDescription(event, e.postId)}
                    >
                      <EditDescription
                        disabled={loading}
                        name="description"
                        value={editedDescription}
                        onKeyDown={(e) =>
                          e.key === "Escape" ? setEdit([]) : ""
                        }
                        onChange={(e) => {
                          setEditedDescription(e.target.value);
                        }}
                      ></EditDescription>
                    </form>
                  )}
                  {!edit.includes(e.postId) && (
                    <Description>{e.postDescription}</Description>
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
  position: relative;
  font-weight: 400;
  font-size: 17px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

const EditDescription = styled.input``;
