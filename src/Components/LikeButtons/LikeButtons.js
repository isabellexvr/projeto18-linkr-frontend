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
    isrequesting={disabled}
      onClick={() => {
        console.log(disabled)
        setDisabled(true);
        postLikeFunction(postId, token, setDisabled);
      }}
    />
  );
}
