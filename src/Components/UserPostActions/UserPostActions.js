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
import 'react-tooltip/dist/react-tooltip.css'

export default function UserPostActions({ postInfo, user, disabledUseState, repostModal }) {
  const { likedBy, postId, likesCount, repostsCount, commentsCount } = postInfo;
  const { userInfo, token } = user;
  const { setDisabled, disabled } = disabledUseState;
  const {setOpenRepostModal} = repostModal

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
        <RepostArrows onClick={()=>setOpenRepostModal(true)} />
        <Count>{repostsCount} re-posts</Count>
      </Repost>
    </UserActionsContainer>
  );
}
