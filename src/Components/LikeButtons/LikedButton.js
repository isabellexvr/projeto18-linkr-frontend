import { dislikeFunction } from "../../Services/LikeFunctions";
import { LikedIcon } from "./LikeButtonsStyles";

export default function LikedButton({
  setDisabled,
  disabled,
  token,
  postId,
}) {
  return (
    <LikedIcon
      isRequesting={disabled}
      onClick={() => {
        setDisabled(true);
        dislikeFunction(postId, token, setDisabled);
      }}
    />
  );
}
