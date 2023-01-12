import React, { useEffect, useState } from "react";
import PostLink from "../PostLink/PostLink";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import {
  PostStyle,
  LeftContainer,
  UserProfilePicture,
  LikeIcon,
  Count,
  RightContainer,
  UserName,
  Description,
  LikedIcon,
  tagStyle,
  tooltipStyle,
  EditPencil,
  TrashCan,
  TitleContainer,
  LoggedUserActionsContainer,
  EditContainer,
} from "./PostStyledComponents";
import {
  dislikeFunction,
  postLikeFunction,
} from "../../Services/LikeFunctions";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import axios from "axios";

function Post(props) {
  const {
    username,
    userImage,
    post,
    userId,
    token,
    myUser,
    deleted,
    setDeleted,
  } = props;
  const {
    id,
    description,
    linkTitle,
    linkDescription,
    linkUrl,
    linkImage,
    likesCount,
    likedBy,
  } = post;

  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postDescription, setPostDescription] = useState(description);
  const [postLikeCount, setPostLikeCount] = useState(likesCount);
  const [tooltip, setTooltip] = useState("");

  const [likedIdArray, setLikedIdArray] = useState(
    likedBy?.map((user) => user.id) || []
  );

  const [likedArray, setLikedArray] = useState(
    likedBy?.filter((user) => user.id !== myUser.userId) || []
  );

  useEffect(() => {
    if (likedIdArray.includes(myUser.userId)) {
      setLiked(true);
    }
    createTooltip();
  }, [likedIdArray]);

  function handleLikes() {
    if (liked) {
      setLiked(false);
      setPostLikeCount(postLikeCount - 1);
      setLikedIdArray(likedIdArray.filter((id) => id !== myUser.userId));
      return dislikeFunction(id, token);
    }
    setLiked(true);
    setPostLikeCount(postLikeCount + 1);
    setLikedIdArray([...likedIdArray, myUser.userId]);
    return postLikeFunction(id, token);
  }
  function handleEdit(e) {
    setPostDescription(e.target.value);
  }
  function handleFocus(e) {
    e.currentTarget.setSelectionRange(
      e.currentTarget.value.length,
      e.currentTarget.value.length
    );
  }
  function handleKeyPress(e) {
    if (e.key === "Escape") return setEdit(false);
    else if (e.key === "Enter") {
      const config = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: postDescription,
        },
      };
      axios(`https://linkr-api-9ik9.onrender.com/posts/${id}`, config)
        .then(() => {
          setEdit(false);
        })
        .catch((err) => err.response.data);
    }
  }
  function handleDelete() {
    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(`https://linkr-api-9ik9.onrender.com/posts/${id}`, config)
      .then(() => setDeleted(!deleted))
      .catch((err) => err.response.data);
  }
  function createTooltip() {
    const length = likedArray.length;
    if (liked) {
      if (length === 1) {
        const string = `Você e ${likedArray[0].username} curtiram essa postagem.`;
        return setTooltip(string);
      } else if (length > 1) {
        const users = likedArray.slice(0, 1);
        const string = `Você, ${users
          .map((user) => user.username)
          .toString()} e mais ${postLikeCount - 2} curtiram essa postagem.`;
        return setTooltip(string);
      }
      return setTooltip("Você curtiu essa postagem.");
    } else {
      if (length === 1) {
        const string = `${likedArray[0].username} curtiu essa postagem.`;
        return setTooltip(string);
      } else if (length > 1) {
        const users = likedArray.slice(0, 2).map((user) => user.username);
        if (length > 2) {
          const string = users
            .join(", ")
            .concat(`e mais ${postLikeCount - 2} curtiram essa postagem.`);
          return setTooltip(string);
        }
        const string = users.join(" e ").concat("curtiram essa postagem");
        return setTooltip(string);
      }
      return setTooltip("Ninguém curtiu essa postagem");
    }
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
        <TooltipWrapper content={tooltip} place='bottom'>
          <Count>{postLikeCount} likes</Count>
        </TooltipWrapper>
        <Tooltip style={tooltipStyle} />
      </LeftContainer>
      <RightContainer>
        <TitleContainer>
          <UserName>{username}</UserName>
          {userId === myUser.userId && (
            <LoggedUserActionsContainer>
              <EditPencil onClick={() => setEdit(true)} />
              <TrashCan onClick={handleDelete} />
            </LoggedUserActionsContainer>
          )}
        </TitleContainer>
        <Description>
          {!edit ? (
            <ReactTagify
              tagStyle={tagStyle}
              tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}>
              {postDescription}
            </ReactTagify>
          ) : (
            <EditContainer
              ref={(ref) => ref && ref.focus()}
              value={postDescription}
              onChange={handleEdit}
              onFocus={handleFocus}
              onKeyDown={handleKeyPress}
            />
          )}
        </Description>
        <PostLink

metadata={{linkTitle, linkDescription, linkUrl, linkImage}}

       

        />
      </RightContainer>
    </PostStyle>
  );
}

export default Post;
