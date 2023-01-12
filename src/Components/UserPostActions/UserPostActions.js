import {
  UserActionsContainer,
  Like,
  Count,
  Comments,
  CommentBalloons,
  Repost,
  RepostArrows,
  RepostedArrows,
} from "../UserPostActions/UserPostsActionsStyledComponents";
import IsLiked from "../../Services/CheckIfIsLiked";
import handleLikedBy from "../../Services/handleLikedBy";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function UserPostActions({
  postInfo,
  user,
  disabledUseState,
  repostModal,
}) {
  const {
    likedBy,
    postId,
    likesCount,
    repostsCount,
    commentsCount,
    repostedBy,
  } = postInfo;
  const { userInfo, token } = user;
  const { setDisabled, disabled } = disabledUseState;
  const { setOpenRepostModal, setPostToRepost } = repostModal;

  const repostsId = repostedBy.map((r) => r.userId);

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
        <Count>
          {commentsCount} {commentsCount === "1" ? "comment" : "comments"}
        </Count>
      </Comments>
      <Repost>
        {repostsId.includes(userInfo.userId) ? (
          <>
            <RepostedArrows
            //mostrar outro modal? ou simplesmente deixar de repostar?
            //
            />
            <Count>{repostsCount > 1 ? "You and others reposted": "You reposted"}</Count>
          </>
        ) : (
          <>
            <RepostArrows
              onClick={() => {
                setPostToRepost(postId);
                setOpenRepostModal(true);
              }}
            />
            <Count>{repostsCount} re-posts</Count>
          </>
        )}
      </Repost>
    </UserActionsContainer>
  );
}
