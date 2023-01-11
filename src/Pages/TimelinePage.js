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

export default function TimelinePage() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    openModal,
    setOpenModal,
  ]);

  return (
    <PageContainer>
      <Header />
      <StyledMain width={width}>
        {width < 667 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PageStyle>
          <PostsContainer>
            <PostPublicationForm loading={loading} setLoading={setLoading} />
            {verifyIfPosts(
              posts,
              setDisabled,
              disabled,
              token,
              loading,
              error,
              edit,
              setEdit,
              openModal,
              setOpenModal
            )}
          </PostsContainer>
          {width > 1020 && <Trending />}
        </PageStyle>
      </StyledMain>
    </PageContainer>
  );
}
