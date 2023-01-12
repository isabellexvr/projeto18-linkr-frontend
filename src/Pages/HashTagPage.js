import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import PostHashTags from "../Components/TimelinePage/PostsHashTags";
import Trending from "../Components/Trending/Trending";
import { AuthContext } from "../Context/authContext";
import verifyIfPosts from "../Services/verifyPosts";
import verifyPostsHashtags from "../Services/verifyPostsHashtags";
import useWindowDimensions from "../Services/windowDimensions";

export default function HashTagsPage() {
  const { hashtag } = useParams();
  const { width } = useWindowDimensions();
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "597px",
      height: "262px",
      background: "#333333",
      borderRadius: "50px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deletePost, setDeletePost] = useState("");

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "green";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function confirmModal() {
  //   axios
  //     .delete(`http://localhost:4000/posts/${deletePost}`, {
  //       // headers: {
  //       //   Authorization: `Bearer ${token}
  //       // `,
  //       // },
  //     })
  //     .then((a) => {
  //       window.location.reload(true);
  //       setIsOpen(false);
  //       console.log(a.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // Modal.setAppElement(document.getElementById("root"));

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
        {/* <StyleModal>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Are you sure you want to delete this post?
            </h2>
            <button onClick={closeModal}>close</button>
            <button onClick={confirmModal}>confirm</button>
          </Modal>
        </StyleModal> */}
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
