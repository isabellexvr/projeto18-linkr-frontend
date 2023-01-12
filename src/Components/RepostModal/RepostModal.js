import Modal from "react-modal";
import {
  CancelButton,
  CancelContainer,
  DeleteMessage,
  ConfirmButton,
} from "../DeleteModal/DeleteModalStyles";
import confirmRepostingPost from "../../Services/confirmRepostingPost";

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

function RepostModal({
  openRepostModal,
  setOpenRepostModal,
  token,
  postToRepost,
}) {
  return (
    <Modal
      isOpen={openRepostModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <CancelContainer>
        <DeleteMessage>
          Are you sure you want to re-post this link?
        </DeleteMessage>
        <div>
          <CancelButton onClick={() => setOpenRepostModal(false)}>
            No, go back
          </CancelButton>
          <ConfirmButton
            onClick={() =>
              confirmRepostingPost(postToRepost, setOpenRepostModal, token)
            }
          >
            Yes, repost it
          </ConfirmButton>
        </div>
      </CancelContainer>
    </Modal>
  );
}

export default RepostModal;
