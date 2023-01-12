import NoPostsMessage from "../Components/NoPostsMessage/NoPostsMessage";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import LoadingMessage from "../Components/LoadingMessage/LoadingMessage";
import PostHashTags from "../Components/TimelinePage/PostsHashTags";

export default function verifyPostsHashtags(posts, setDisabled, disabled, token, loading, error, edit, setEdit, setOpenModal, setPostToDelete ) {
   console.log(posts);
  if (posts && !loading) {
    if (posts.length > 0) {
      return posts.map((post, index) => (
        <PostHashTags
        setPostToDelete={setPostToDelete}
          modal={{ setOpenModal}}
          edition={{edit, setEdit}}
          disable={{ setDisabled, disabled }}
          key={index}
          token={token}
          user={{
            userId: post.userId,
            userName: post.username,
            userImage: post.pictureUrl,
          }}
          content={{
            postId: post.postId,
            likesCount: post.likes,
            likedBy: post.likedBy,
            postDescription: post.description,
            url: post.url,
          }}
          metadata={{
            linkTitle: post.linkTitle,
            linkDescription: post.linkDescription,
            linkUrl: post.linkUrl,
            linkImage: post.linkImage,
          }}
        />
      ));
    }
    return <NoPostsMessage />;
  } else if (error) {
    return <ErrorMessage />;
  } else if (loading) {
    return <LoadingMessage />;
  }
}