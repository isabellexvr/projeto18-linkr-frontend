import axios from "axios";
import URL_API from "../Services/APIlink"

export default function confirmDeletingPost(postId, setOpenModal, token) {

  axios
    .delete(`${URL_API}/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}
         `,
      },
    })
    .then((ans) => {
      console.log(ans.data)
      setOpenModal(false);
    })
    .catch((err) => {
      console.log(err);
    });
}
