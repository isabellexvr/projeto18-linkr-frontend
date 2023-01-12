import axios from "axios";

export default function confirmRepostingPost(postId, setOpenDeleteModal, token) {

  console.log(postId)

  axios(`http://localhost:4000/repost/${postId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then((ans) => {
      console.log(ans.data)
      setOpenDeleteModal(false);
    })
    .catch((err) => {
      console.log(err);
    });
}


