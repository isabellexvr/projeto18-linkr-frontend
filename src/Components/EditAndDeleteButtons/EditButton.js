import { EditPencil } from "../Post/PostStyledComponents";

export default function EditButton({ setEdit, edit }) {
  return (
    <EditPencil
      onClick={() => {
        edit ? setEdit(false) : setEdit(true)
      }}
    />
  );
}
