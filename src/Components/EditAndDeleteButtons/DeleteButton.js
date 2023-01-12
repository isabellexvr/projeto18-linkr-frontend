import { TrashCan } from "../Post/PostStyledComponents";

export default function DeleteButton({ setOpenModal, setPostToDelete, postId }) {
  return <TrashCan onClick={() => {
    setPostToDelete(postId)
    setOpenModal(true)}} />;
}
