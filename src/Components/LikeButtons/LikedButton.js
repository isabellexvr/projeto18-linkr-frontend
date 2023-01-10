import { dislikeFunction } from "../../Services/LikeFunctions";
import { LikedIcon } from "./LikeButtonsStyles";

export default function LikedButton({
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
