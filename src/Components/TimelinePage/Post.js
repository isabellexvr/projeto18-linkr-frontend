import React, { useEffect, useState } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
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
import DeleteModal from "../DeleteModal/DeleteModal";
import IsLiked from "../../Services/CheckIfIsLiked";
import { TooltipProvider } from "react-tooltip";
import handleLikedBy from "../../Services/handleLikedBy";

function Post(props) {
  const { userId, userName, userImage } = props.user;
  const { postId, likesCount, likedBy, postDescription, url } = props.content;
  const { disabled, setDisabled } = props.disable;
  const [edit, setEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState(postDescription);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const token = props.token;
  const userInfo = jwtDecode(token);

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
    <TooltipProvider>
      <PostStyle>
        <LeftContainer>
          <UserProfilePicture src={userImage} />
          <IsLiked
            likedBy={likedBy}
            setDisabled={setDisabled}
            disabled={disabled}
            token={token}
            postId={postId}
            loggedUserId={userInfo.userId}
          />
          <TooltipWrapper tooltipId={postId}>
            <LikesCount>
              {likesCount} {likesCount === "1" ? "like" : "likes"}
            </LikesCount>
          </TooltipWrapper>
          <Tooltip
            id={postId}
            content={handleLikedBy(likedBy, userInfo)}
            place="bottom"
          />
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <UserName>{userName}</UserName>
            {userId === userInfo.userId && (
              <ActionsContainer>
                <EditButton setEdit={setEdit} edit={edit} />
                <DeleteButton setOpenModal={setOpenModal} />
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
        <DeleteModal
          postId={postId}
          token={token}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </PostStyle>
    </TooltipProvider>
  );
}

export default Post;
