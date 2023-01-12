import axios from "axios";

export default function confirmRepostingPost(postId, setOpenDeleteModal, token) {

  axios
    .post(`http://localhost:4000/repost/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}
         `,
      },
    })
    .then((ans) => {
      console.log(ans.data)
      setOpenDeleteModal(false);
    })
    .catch((err) => {
      console.log(err);
    });
}
