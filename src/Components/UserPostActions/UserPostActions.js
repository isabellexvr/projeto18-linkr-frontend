import {
  UserActionsContainer,
  Like,
  Count,
  Comments,
  CommentBalloons,
  Repost,
  RepostArrows,
} from "../UserPostActions/UserPostsActionsStyledComponents";
import IsLiked from "../../Services/CheckIfIsLiked";
import handleLikedBy from "../../Services/handleLikedBy";
import { Tooltip, TooltipWrapper } from "react-tooltip";

export default function UserPostActions({ postInfo, user, disabledUseState }) {
  const { likedBy, postId, likesCount, repostsCount, commentsCount } = postInfo;
  const { userInfo, token } = user;
  const { setDisabled, disabled } = disabledUseState;

  return (
    <UserActionsContainer>
      <Like>
        <IsLiked
          likedBy={likedBy}
          setDisabled={setDisabled}
          disabled={disabled}
          token={token}
          postId={postId}
          loggedUserId={userInfo.userId}
        />
        <TooltipWrapper tooltipId={postId}>
          <Count>
            {likesCount} {likesCount === "1" ? "like" : "likes"}
          </Count>
        </TooltipWrapper>
        <Tooltip
          id={postId}
          content={handleLikedBy(likedBy, userInfo)}
          place="bottom"
        />
      </Like>
      <Comments>
        <CommentBalloons />
        <Count>{commentsCount} {commentsCount === "1" ?  "comment" : "comments"}</Count>
      </Comments>
      <Repost>
        <RepostArrows />
        <Count>{repostsCount} re-posts</Count>
      </Repost>
    </UserActionsContainer>
  );
}
