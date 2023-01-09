import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../Components/Constants/Header";
import PostHashTags from "../Components/TimelinePage/PostsHashTags";
import Trending from "../Components/TimelinePage/Trending";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

export default function HashTagsPage() {
    const { hashtag } = useParams();

    
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
}
  };

let subtitle;
const [modalIsOpen, setIsOpen] = useState(false);
const [deletePost, setDeletePost] = useState("");

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = 'green'
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
      window.location.reload(true);
      setIsOpen(false);
      console.log(a.data);
    })
    .catch((err) => {
      console.log(err);
    });

}

Modal.setAppElement(document.getElementById('root'));

    return (
        <>
            <Header />
            <HashTagPage>
                <PageTitle>#{hashtag}</PageTitle>
                <PostMobile>
                    <PostHashTags setIsOpen = {setIsOpen} setDeletePost = {setDeletePost} openModal = {openModal} />
                </PostMobile>
                <Trending />
                <StyleModal>
        {/* <button onClick={openModal}>Open Modal</button> */}
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
      </StyleModal>
            </HashTagPage>
        </>
    );
}

const StyleModal = styled.div`
  h2{}
`

const HashTagPage = styled.div`
  margin-top: 70px;
  height: 150vh;
  background-color: #333333;
  @media(min-width: 900px){
    display: flex;
  justify-content: center;
  }
`;

const PostMobile = styled.div`
@media(min-width: 900px){
    display: flex;
    flex-direction: column;
}
`

const PageTitle = styled.h1`
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  height: 87px;
  display: flex;
  align-items: center;
`;
