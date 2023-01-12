import { TrashCan } from "../Post/PostStyledComponents";

export default function DeleteButton({ setOpenDeleteModal, setPostToDelete, postId }) {
  return <TrashCan onClick={() => {
    setPostToDelete(postId)
    setOpenDeleteModal(true)}} />;
}
