import Header from "../Components/Header/Header";
import PostPublicationForm from "../Components/PostPublicationForm/PostPublicationForm";
import Post from "../Components/TimelinePage/Post";
import useWindowDimensions from "../Services/windowDimensions";
import Searchbox from "../Components/Searchbox/Searchbox";
import axios from "axios";
import DeleteModal from "../Components/DeleteModal/DeleteModal";
import { useContext, useState } from "react";
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

export default function TimelinePage() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deletePost, setDeletePost] = useState("");

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

  return (
    <PageContainer>
      <Header />
      <StyledMain width={width}>
        {width < 667 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PageStyle>
          <PostsContainer>
            <PostPublicationForm loading={loading} setLoading={setLoading} />
            <Post
              loading={loading}
              setLoading={setLoading}
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
              setDeletePost={setDeletePost}
              openModal={openModal}
            />
            <DeleteModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              confirmModal={confirmModal}
            />
          </PostsContainer>
          {width > 1020 && <Trending />}
        </PageStyle>
      </StyledMain>
    </PageContainer>
  );
}
