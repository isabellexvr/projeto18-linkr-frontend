import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import IsLiked from "../../Services/CheckIfIsLiked";
import { TooltipProvider } from "react-tooltip";
import handleLikedBy from "../../Services/handleLikedBy";
import handleEditInput from "../../Services/postEdition";

function Post(props) {
  const { userId, userName, userImage } = props.user;
  const { postId, likesCount, likedBy, postDescription, url } = props.content;
  const { disabled, setDisabled } = props.disable;
  const { edit, setEdit } = props.edition;
  const [editedDescription, setEditedDescription] = useState(postDescription);
  const { openModal, setOpenModal } = props.modal;
  const setPostToDelete = props.setPostToDelete;
  const navigate = useNavigate();
  const token = props.token;
  const userInfo = jwtDecode(token);

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
                <DeleteButton
                  setPostToDelete={setPostToDelete}
                  setOpenModal={setOpenModal}
                  postId={postId}
                />
              </ActionsContainer>
            )}
          </TitleContainer>
          {edit && userId === userInfo.userId ? (
            <EditContainer
              type="text"
              ref={(ref) => ref && ref.focus()}
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
              onKeyDown={(event) =>
                handleEditInput(
                  event,
                  postId,
                  editedDescription,
                  setEdit,
                  token
                )
              }
            />
          ) : (
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
          )}
          <PostLink metadata={props.metadata} />
        </RightContainer>
      </PostStyle>
    </TooltipProvider>
  );
}

export default Post;
