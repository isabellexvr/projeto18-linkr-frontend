import LikeButton from "../Components/LikeButtons/LikeButtons";
import LikedButton from "../Components/LikeButtons/LikedButton";

export default function IsLiked({likedBy, setDisabled, disabled, token, postId, loggedUserId}) {
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
    if (idArray.includes(loggedUserId)) {
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