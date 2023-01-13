import axios from "axios";
import URL_API from "./APIlink";

export default function handleEditInput(e, postId, editedDescription, setEdit, token) {
    if (e.key === "Escape") setEdit(false);
    if (e.key === "Enter") {
      axios(`${URL_API}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: editedDescription,
        },
      })
        .then((ans) => {
          setEdit(false);
          console.log(ans.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }