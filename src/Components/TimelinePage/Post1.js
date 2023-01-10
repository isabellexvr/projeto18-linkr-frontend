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
  const token = props.token;
  const userInfo = jwtDecode(token);
  const [liked, setLiked] = useState(false);

  function isLiked() {
    const idArray = likedBy.map((obj) => obj.userId);
    if (idArray.includes(userInfo.userId)) {
      setLiked(true);
      return <LikedButton onClick={handleLikes} />;
    }
    setLiked(false);
    return <LikeButton onClick={handleLikes} />;
  }

  function handleLikes() {
    if (liked) {
      return postLikeFunction(postId, token);
    }
    return dislikeFunction(postId, token);
  }

  return (
    <PostStyle>
      <LeftContainer>
        <UserProfilePicture src={userImage} />
        {isLiked()}
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
