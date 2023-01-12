import Header from "../Components/Header/Header";
import PostPublicationForm from "../Components/PostPublicationForm/PostPublicationForm";
import useWindowDimensions from "../Services/windowDimensions";
import Searchbox from "../Components/Searchbox/Searchbox";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/authContext";
import {
  StyledMain,
  PageTitle,
  PageStyle,
  PostsContainer,
} from "../Assets/PageTheme";
import Trending from "../Components/Trending/Trending";
import PageContainer from "../Components/PageContainer/PageContainer";
import verifyIfPosts from "../Services/verifyPosts";
import DeleteModal from "../Components/DeleteModal/DeleteModal";
import NewPost from "../Components/TimelinePage/NewPosts";
import useInterval from "use-interval";
import RepostModal from "../Components/RepostModal/RepostModal";

export default function TimelinePage() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRepostModal, setOpenRepostModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState("");
  const [postToRepost, setPostToRepost] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [display, setDisplay] = useState("none");
  const [countNewPosts, setCountNewPosts] = useState(0);

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
  }, [
    loading,
    setLoading,
    disabled,
    setDisabled,
    edit,
    setEdit,
    openDeleteModal,
    setOpenDeleteModal,
  ]);

  useInterval(() => {
    axios
      .get("http://localhost:4000/all-posts", {
        params: {
          _limit: 3,
        },
      })
      .then((a) => {
        setNewPosts(a.data);
        console.log(newPosts);
        setLoading(false);
        if (newPosts.length > posts.length) {
          let prod = newPosts.length - posts.length;
          setCountNewPosts(prod);
          setDisplay("");
          // setPosts(a.data);
          return;
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, 15000);

  const modals = {
    setOpenDeleteModal,
    openDeleteModal,
    setOpenRepostModal,
    openRepostModal,
  };
  const states = {
    setDisabled,
    disabled,
    loading,
    error,
    edit,
    setEdit,
    setPostToDelete,
    setPostToRepost
  };
  return (
    <PageContainer>
      <Header />
      <StyledMain width={width}>
        {width < 667 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PageStyle>
          <PostsContainer>
            <PostPublicationForm loading={loading} setLoading={setLoading} />
            <NewPost
              display={display}
              setDisplay={setDisplay}
              setPosts={setPosts}
              newPosts={newPosts}
              countNewPosts={countNewPosts}
            />
            {verifyIfPosts(posts, token, modals, states)}
            <DeleteModal
              openDeleteModal={openDeleteModal}
              setOpenDeleteModal={setOpenDeleteModal}
              token={token}
              postToDelete={postToDelete}
            />
            <RepostModal 
              openRepostModal={openRepostModal}
              setOpenRepostModal={setOpenRepostModal}
              token={token}
              postToRepost={postToRepost}
            />
          </PostsContainer>
          {width > 1020 && <Trending />}
        </PageStyle>
      </StyledMain>
    </PageContainer>
  );
}
