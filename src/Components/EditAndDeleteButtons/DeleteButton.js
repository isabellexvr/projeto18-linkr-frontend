import { TrashCan } from "../Post/PostStyledComponents";

export default function DeleteButton({
  openModal,
  setIsOpen,
  setDeletePost,
  postId,
}) {
  return (
    <TrashCan
      onClick={() => {
        openModal();
        setIsOpen(true);
        setDeletePost(postId);
      }}
    />
  );
}
