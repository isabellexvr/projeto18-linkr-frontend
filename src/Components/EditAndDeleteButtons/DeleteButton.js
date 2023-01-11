import { TrashCan } from "../Post/PostStyledComponents";

export default function DeleteButton({ setOpenModal }) {
  return <TrashCan onClick={() => setOpenModal(true)} />;
}
