import axios from "axios";

export default function confirmModal(postId, setOpenModal, token) {
  axios
    .delete(`http://localhost:4000/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}
         `,
      },
    })
    .then((ans) => {
      setOpenModal(false);
    })
    .catch((err) => {
      console.log(err);
    });
}
