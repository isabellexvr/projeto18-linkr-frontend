import React, { useEffect, useState } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import LikeButton from "../LikeButtons/LikeButtons";
import LikedButton from "../LikeButtons/LikedButton";
import {
  ActionsContainer,
  Description,
  EditPencil,
  LeftContainer,
  LikesCount,
  PostStyle,
  RightContainer,
  TitleContainer,
  TrashCan,
  UserName,
  UserProfilePicture,
} from "../Post/PostStyledComponents";
import PostLink from "../PostLink/PostLink";
import {
  postLikeFunction,
  dislikeFunction,
} from "../../Services/LikeFunctions";
import jwtDecode from "jwt-decode";

function Post(props) {
  const { userId, userName, userImage } = props.user;
  const { postId, likesCount, likedBy, postDescription, url } = props.content;
  const {disabled ,setDisabled} = props.disable
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
          <ActionsContainer>
            <EditPencil />
            <TrashCan />
          </ActionsContainer>
        </TitleContainer>
        <Description>{postDescription}</Description>
        <PostLink metadata={props.metadata} />
      </RightContainer>
    </PostStyle>
  );
}

export default Post;
