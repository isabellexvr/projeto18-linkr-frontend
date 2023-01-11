import { postLikeFunction } from "../../Services/LikeFunctions";
import { LikeIcon } from "./LikeButtonsStyles";

export default function LikeButton({
  setDisabled,
  disabled,
  token,
  postId,
}) {
  return (
    <LikeIcon
      isRequesting={disabled}
      onClick={() => {
        setDisabled(true);
        postLikeFunction(postId, token, setDisabled);
      }}
    />
  );
}
