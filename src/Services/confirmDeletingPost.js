import axios from "axios";

export default function confirmDeletingPost(postId, setOpenModal, token) {

  axios
    .delete(`http://localhost:4000/posts/${postId}`, {
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
