import React, { useEffect, useState } from "react";
import PostLink from "../TimelinePage/PostLink";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import {
  PostStyle,
  LeftContainer,
  UserProfilePicture,
  LikeIcon,
  LikesCount,
  RightContainer,
  UserName,
  Description,
  LikedIcon,
  tagStyle,
} from "./PostStyledComponents";
import { dislikeFunction, postLikeFunction } from "../Services/LikeFunctions";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Post(props) {
  const { username, userImage, post, userId, token, myUser } = props;
  const {
    id,
    description,
    linkTitle,
    linkDescription,
    linkUrl,
    linkImg,
    likesCount,
    likedBy,
  } = post;

  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likedIdArray, setLikedIdArray] = useState(
    likedBy?.map((user) => user.id) || []
  );
  const [likedUsernameArray, setLikedUsernameArray] = useState(
    likedBy?.filter((user) => user.id !== myUser.userId) || []
  );
  const [postLikeCount, setPostLikeCount] = useState(likesCount);
  const [tooltipString, setTooltipString] = useState(
    likedUsernameArray.map((user) => user.username)
  );
  const [tooltip, setTooltip] = useState("");

  useEffect(() => {
    if (likedIdArray.includes(myUser.userId)) {
      setLiked(true);
      setTooltipString(["Você", ...tooltipString]);
    }
    setTooltip(createTooltip());
  }, [likedIdArray]);

  function handleLikes() {
    if (liked) {
      setLiked(false);
      setPostLikeCount(postLikeCount - 1);
      setTooltipString(tooltipString.splice(0, 1));
      return dislikeFunction(id, token);
    }
    setLiked(true);
    setPostLikeCount(postLikeCount + 1);
    setTooltipString(["Você", ...tooltipString]);
    return postLikeFunction(id, token);
  }

  function createTooltip() {
    if (postLikeCount === 1) {
      return tooltipString.toString().concat(" curtiu essa postagem.");
    } else if (postLikeCount === 2) {
      return tooltipString.join(" e ").concat(" curtiram essa postagem.");
    } else if (postLikeCount > 2) {
      return tooltipString
        .join(", ")
        .concat(` e mais ${postLikeCount - 2} curtiram essa postagem.`);
    }
    return "Ninguém curtiu essa postagem.";
  }

  return (
    <PostStyle>
      <LeftContainer>
        <UserProfilePicture alt='user-profile' src={userImage} />
        {liked ? (
          <LikedIcon onClick={handleLikes} />
        ) : (
          <LikeIcon onClick={handleLikes} />
        )}
        <TooltipWrapper content={tooltip}>
          <LikesCount>{postLikeCount} likes</LikesCount>
        </TooltipWrapper>
        <Tooltip />
      </LeftContainer>
      <RightContainer>
        <UserName>{username}</UserName>
        <Description>
          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}>
            {description}
          </ReactTagify>
        </Description>
        <PostLink
          linkTitle={linkTitle}
          linkDescription={linkDescription}
          linkUrl={linkUrl}
          linkImage={linkImg}
        />
      </RightContainer>
    </PostStyle>
  );
}

export default Post;
