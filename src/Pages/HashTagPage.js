import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Trending from "../Components/Trending/Trending";
import { AuthContext } from "../Context/authContext";
import verifyPostsHashtags from "../Services/verifyPostsHashtags";

export default function HashTagsPage() {
  const { hashtag } = useParams();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [display, setDisplay] = useState("none");
  const [countNewPosts, setCountNewPosts] = useState(0);


  useEffect(() => {
    const promisse = axios.get(
      `http://localhost:4000/hashtag/${hashtag}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    promisse.then((res) => {
      setLoading(false);
      setPosts(res.data);
    });
    promisse.catch((err) => {
      setLoading(false);
      setError(true);
    });
  }, [hashtag, loading, setLoading]);

  return (
    <>
      <Header />
      <HashTagPage>
        <PageTitle>#{hashtag}</PageTitle>
        <PostMobile>
          {verifyPostsHashtags(
            posts,
            setDisabled,
            disabled,
            token,
            loading,
            error,
            edit,
            setEdit,
            setOpenModal,
            setPostToDelete
          )}
        </PostMobile>
        <Trending />
      </HashTagPage>
    </>
  );
}

// const StyleModal = styled.div`
//   h2 {
//   }
// `;

const HashTagPage = styled.div`
  margin-top: 70px;
  padding-bottom: 100vh;
  background-color: #333333;
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
`;

const PostMobile = styled.div`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const PageTitle = styled.h1`
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-right: -120px;
  height: 87px;
  text-align: center;
`;
