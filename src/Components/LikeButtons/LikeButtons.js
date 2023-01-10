import { postLikeFunction } from "../../Services/LikeFunctions";
import { LikeIcon } from "./LikeButtonsStyles";

export default function LikeButton({
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
