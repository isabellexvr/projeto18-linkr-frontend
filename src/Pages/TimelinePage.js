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
import { useNavigate } from "react-router-dom";
import Trending from "../Components/TimelinePage/Trending";

export default function TimelinePage() {
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "41.40%",
      height: "25.5%",
      background: "#333333",
      borderRadius: "50px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
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
        console.log(a.data);
      })
      .catch((err) => {
        setIsOpen(false);
        alert("Não foi possível deletar o post");
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <TimelinePageStyle>
        <div>
                  {width < 840 && <Searchbox />}
        <PageTitle>timeline</PageTitle>
        <PostPublicationForm loading={loading} setLoading={setLoading} />
        <Post
          loading={loading}
          setLoading={setLoading}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setDeletePost={setDeletePost}
          openModal={openModal}
        />
        </div>

        <Trending/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CancelContainer>
            <DeleteMessage>
              Are you sure you want to delete this post?
            </DeleteMessage>
            <div>
              <CancelButton onClick={closeModal}>No, go back</CancelButton>
              <ConfirmButton onClick={confirmModal}>
                Yes, delete it
              </ConfirmButton>
            </div>
          </CancelContainer>
        </Modal>
      </TimelinePageStyle>
    </>
  );
}

const TimelinePageStyle = styled.div`
  margin-top: 70px;
  height: 100%;
  background-color: #333333;
  display: flex;
  justify-content: center;
    @media (max-width: 600px) {
      width: 100%;
      >div:last-child{
        width: 100px;
        background-color: red;
      }
    }
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

const CancelContainer = styled.div`
  width: 85%;
  height: 81%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  >div{
    display:flex;
    width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    width: 85%;
  height: 81%;
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    >div{
    display:flex;
    width: 90%;
    margin-top: 20px;
  }
  }
`;

const CancelButton = styled.button`
  background: #ffffff;
  font-family: "Lato";
  font-weight: 700;
  font-size: 15px;
  color: #1877f2;
  width: 134px;
  height: 37px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 75%;
    height: auto;
    font-size: 3vw;
  }
`;


const ConfirmButton = styled.button`
  background: #1877f2;
  font-family: "Lato";
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  width: 134px;
  height: 37px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 75%;
    height: auto;
    font-size: 3vw;
  }
`;

const DeleteMessage = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  width: 338px;
  color: #ffffff;
  @media (max-width: 600px) {
    width: 98%;
    font-size: 4.8vw;
    line-height: 20px;
  }
`;
