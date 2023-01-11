import React from "react";
import Modal from "react-modal";
import {
  CancelButton,
  CancelContainer,
  DeleteMessage,
  ConfirmButton,
} from "./DeleteModalStyles";

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

function DeleteModal(props) {
  const { confirmModal, openModal, setOpenModal } = props;

  return (
    <Modal isOpen={openModal} style={customStyles} contentLabel="Example Modal">
      <CancelContainer>
        <DeleteMessage>
          Are you sure you want to delete this post?
        </DeleteMessage>
        <div>
          <CancelButton onClick={() => setOpenModal(false)}>
            No, go back
          </CancelButton>
          <ConfirmButton onClick={confirmModal}>Yes, delete it</ConfirmButton>
        </div>
      </CancelContainer>
    </Modal>
  );
}

export default DeleteModal;
