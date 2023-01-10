import Header from "../Components/Header/Header";
import PostPublicationForm from "../Components/PostPublicationForm/PostPublicationForm";
import Post from "../Components/TimelinePage/Post1";
import useWindowDimensions from "../Services/windowDimensions";
import Searchbox from "../Components/Searchbox/Searchbox";
import axios from "axios";
import DeleteModal from "../Components/DeleteModal/DeleteModal";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import {
  StyledMain,
  PageTitle,
  PageStyle,
  PostsContainer,
} from "../Assets/PageTheme";
import Trending from "../Components/Trending/Trending";
import PageContainer from "../Components/PageContainer/PageContainer";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import NoPostsMessage from "../Components/NoPostsMessage/NoPostsMessage";
import LoadingMessage from "../Components/LoadingMessage/LoadingMessage";
import { TooltipProvider } from "react-tooltip";

export default function TimelinePage() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deletePost, setDeletePost] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/all-posts")
      .then((ans) => {
        setLoading(false);
        setPosts(ans.data);
        console.log(ans.data);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [loading, setLoading]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function confirmModal() {
    axios
      .delete(`http://localhost:4000/posts/${deletePost}`, {
        // headers: {
        //   Authorization: `Bearer ${token}
        // `,
        // },
      })
      .then((a) => {
        navigate("/timeline");
        window.location.reload(true);
        setIsOpen(false);
      })
      .catch((err) => {
        setIsOpen(false);
        alert("Não foi possível deletar o post");
        console.log(err);
      });
  }

  function verifyIfPosts() {
    if (posts) {
      if (posts.length > 0) {
        return posts.map((post, index) => (
          <Post
            key={index}
            token={token}
            user={{
              userId: post.userId,
              userName: post.userName,
              userImage: post.userImage,
            }}
            content={{
              postId: post.postId,
              likesCount: post.likesCount,
              likedBy: post.likedBy,
              postDescription: post.postDescription,
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

  return (
    <PageContainer>
      <Header />
      <TooltipProvider>
        <StyledMain width={width}>
          {width < 667 && <Searchbox />}
          <PageTitle>timeline</PageTitle>
          <PageStyle>
            <PostsContainer>
              <PostPublicationForm loading={loading} setLoading={setLoading} />
              {verifyIfPosts()}
            </PostsContainer>
            {width > 1020 && <Trending />}
          </PageStyle>
        </StyledMain>
      </TooltipProvider>
    </PageContainer>
  );
}
