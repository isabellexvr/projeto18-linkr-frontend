import { TiPencil } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

export function EditButton({ setEditedDescription, e, edit, setEdit }) {
  return (
    <EditPencil
      onClick={() => {
        setEditedDescription(e.postDescription);
        edit.includes(e.postId) ? setEdit([]) : setEdit([...edit, e.postId]);
      }}
    />
  );
}

export function DeleteButton({ openModal, setIsOpen, setDeletePost, e }) {
  return (
    <TrashCan
      onClick={() => {
        openModal();
        setIsOpen(true);
        setDeletePost(e.postId);
      }}
    />
  );
}

const EditPencil = styled(TiPencil)`
  position: absolute;
  color: white;
  right: 25px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isOpened ? "none" : "initial")};
`;

const TrashCan = styled(FaTrash)`
  color: white;
  position: absolute;
  right: 0;
  cursor: pointer;
`;
