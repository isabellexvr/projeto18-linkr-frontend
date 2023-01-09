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
    .delete(`https://linkr-api-9ik9.onrender.com/posts/${deletePost}`, {
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
            </HashTagPage>
        </>
    );
}

const HashTagPage = styled.div`
  margin-top: 70px;
  padding-bottom: 100vh;
  background-color: #333333;
  @media(min-width: 900px){
    display: flex;
  justify-content: center;
  height: 100vh;
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
  margin-right: -120px;
  height: 87px;
  text-align: center;
`;
