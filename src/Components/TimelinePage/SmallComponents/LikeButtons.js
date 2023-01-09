import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import {
  postLikeFunction,
  dislikeFunction,
} from "../../Services/LikeFunctions";

export function LikedButton({
  setDisabled,
  disabled,
  token,
  setLiked,
  liked,
  e,
}) {
  return (
    <LikedIcon
      isRequesting={disabled}
      onClick={() => {
        setDisabled(true);
        setLiked(liked.filter((a) => a !== e.postId));
        dislikeFunction(e.postId, token, setDisabled);
      }}
    />
  );
}

export function LikeButton({
  setDisabled,
  disabled,
  token,
  setLiked,
  liked,
  e,
}) {
  return (
    <LikeIcon
      isRequesting={disabled}
      onClick={() => {
        setDisabled(true);
        setLiked([...liked, e.postId]);
        postLikeFunction(e.postId, token, setDisabled);
      }}
    />
  );
}

const LikedIcon = styled(BsHeartFill)`
  margin-bottom: 12px;
  font-size: 22px;
  color: red;
  cursor: pointer;
  pointer-events: ${(props) => (props.isRequesting ? "none" : "initial")};
`;

const LikeIcon = styled(BsHeart)`
  margin-bottom: 12px;
  font-size: 22px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isRequesting ? "none" : "initial")};
`;
