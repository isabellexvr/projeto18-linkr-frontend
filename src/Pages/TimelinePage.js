import styled from "styled-components";
import Header from "../Components/Constants/Header";
import PostPublicationForm from "../Components/TimelinePage/PostPublicationForm";
import Post from "../Components/TimelinePage/Post";
import useWindowDimensions from "../Components/Services/windowDimensions";
import Searchbox from "../Components/Constants/Searchbox";
import { useContext, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { AuthContext } from "../Components/Context/authContext";

export default function TimelinePage() {
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '597px',
      height: '262px',
      background: '#333333',
      borderRadius: '50px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deletePost, setDeletePost] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'green';
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
        console.log(a.data);
       setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  Modal.setAppElement(document.getElementById('root'));

  return (
    <>
      <Header />
      <TimelinePageStyle>
        {width < 840 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PostPublicationForm loading={loading} setLoading={setLoading} />
        <Post loading={loading} setLoading={setLoading} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}
          setDeletePost={setDeletePost} />
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure you want
              to delete this post?</h2>
            <button onClick={closeModal}>close</button>
            <button onClick={confirmModal}>confirm</button>
          </Modal>
        </div>
      </TimelinePageStyle>
    </>
  );
}

const TimelinePageStyle = styled.div`
  margin-top: 70px;
  height: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  height: 87px;
  display: flex;
  align-items: center;
  width: 611px;
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;
