import React, { useEffect, useState } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import LikeButton from "../LikeButtons/LikeButtons";
import LikedButton from "../LikeButtons/LikedButton";
import {
  ActionsContainer,
  Description,
  EditContainer,
  LeftContainer,
  LikesCount,
  PostStyle,
  RightContainer,
  TitleContainer,
  UserName,
  UserProfilePicture,
} from "../Post/PostStyledComponents";
import PostLink from "../PostLink/PostLink";
import jwtDecode from "jwt-decode";
import EditButton from "../EditAndDeleteButtons/EditButton";
import DeleteButton from "../EditAndDeleteButtons/DeleteButton";
import { Link, useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import axios from "axios";


function Post(props) {
  const { userId, userName, userImage } = props.user;
  const { postId, likesCount, likedBy, postDescription, url } = props.content;
  const { disabled, setDisabled } = props.disable;
  const [edit, setEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState(postDescription);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deletePost, setDeletePost] = useState("");
  const navigate = useNavigate();
  const token = props.token;
  const userInfo = jwtDecode(token);

  function IsLiked() {
    const idArray = likedBy.map((obj) => obj.userId);
    if (idArray.length <= 0) {
      return (
        <LikeButton
          setDisabled={setDisabled}
          disabled={disabled}
          token={token}
          postId={postId}
        />
      );
    }
    if (idArray.includes(userInfo.userId)) {
      return (
        <LikedButton
          setDisabled={setDisabled}
          disabled={disabled}
          token={token}
          postId={postId}
        />
      );
    }
    return (
      <LikeButton
        setDisabled={setDisabled}
        disabled={disabled}
        token={token}
        postId={postId}
      />
    );
  }

  function confirmModal() {
    axios
      .delete(`http://localhost:4000/posts/${deletePost}`, {
        // headers: {
        //   Authorization: `Bearer ${token}
        // `,
        // },
      })
      .then((a) => {
        navigate("/timeline");
        window.location.reload(true);
        setIsOpen(false);
      })
      .catch((err) => {
        setIsOpen(false);
        alert("Não foi possível deletar o post");
        console.log(err);
      });
  }

  function handleEditInput(e) {

    if (e.key === "Escape") setEdit(false);
    if (e.key === "Enter") {
      axios(`http://localhost:4000/posts/${postId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: editedDescription,
        },
      })
        .then((a) => {
          setEdit(false);
          console.log(a.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  return (
    <PostStyle>
      <LeftContainer>
        <UserProfilePicture src={userImage} />
        <IsLiked />
        <TooltipWrapper>
          <LikesCount>{likesCount}</LikesCount>
        </TooltipWrapper>
        <Tooltip />
      </LeftContainer>
      <RightContainer>
        <TitleContainer>
          <UserName>{userName}</UserName>
          {userId === userInfo.userId && (
            <ActionsContainer>
              <EditButton setEdit={setEdit} edit={edit} />
              <DeleteButton />
            </ActionsContainer>
          )}
        </TitleContainer>
        {!edit ? (
          <Description>
            <ReactTagify
              tagStyle={{
                color: "white",
                fontWeight: 800,
                cursor: "pointer",
              }}
              tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}
            >
              {postDescription}
            </ReactTagify>
          </Description>
        ) : (
          <EditContainer
          type="text"
            ref={(ref) => ref && ref.focus()}
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            onKeyDown={(e) => handleEditInput(e)}
          />
        )}

        <Link to={url}>
          <PostLink metadata={props.metadata} />
        </Link>
      </RightContainer>
    </PostStyle>
  );
}

export default Post;
