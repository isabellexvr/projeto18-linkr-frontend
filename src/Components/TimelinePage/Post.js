import React, { useState } from "react";

import {
  LoggedUserActionsContainer,
  Description,
  EditContainer,
  LeftContainer,
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
import { TooltipProvider } from "react-tooltip";
import handleEditInput from "../../Services/postEdition";
import UserPostActions from "../../Components/UserPostActions/UserPostActions";

function Post(props) {
  const { userId, userName, userImage } = props.user;
  const {
    postId,
    likesCount,
    likedBy,
    postDescription,
    repostsCount,
    commentsCount,
    repostedBy,
    posterId
  } = props.content;
  const { disabled, setDisabled } = props.disable;
  const { edit, setEdit } = props.edition;
  const [editedDescription, setEditedDescription] = useState(postDescription);
  const { setOpenDeleteModal, setOpenRepostModal } = props.modals;
  const setPostToDelete = props.setPostToDelete;
  const setPostToRepost = props.setPostToRepost;
  const navigate = useNavigate();
  const token = props.token;
  const userInfo = jwtDecode(token);

  return (
    <TooltipProvider>
      <PostStyle>
        <LeftContainer>
          <UserProfilePicture src={userImage} />
          <UserPostActions
            repostModal={{ setOpenRepostModal, setPostToRepost }}
            postInfo={{
              likedBy,
              postId,
              likesCount,
              repostsCount,
              commentsCount,
              repostedBy,
            }}
            user={{ userInfo, token }}
            disabledUseState={{ setDisabled, disabled }}
          />
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <span onClick={() => navigate(`/user/${posterId}`)}>
              <UserName>{userName}</UserName>
            </span>
            {userId === userInfo.userId && (
              <LoggedUserActionsContainer>
                <EditButton setEdit={setEdit} edit={edit} />
                <DeleteButton
                  setPostToDelete={setPostToDelete}
                  setOpenDeleteModal={setOpenDeleteModal}
                  postId={postId}
                />
              </LoggedUserActionsContainer>
            )}
          </TitleContainer>
          {edit && userId === userInfo.userId ? (
            <EditContainer
              type='text'
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
                tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}>
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
