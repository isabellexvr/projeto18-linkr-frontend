import axios from "axios";
import URL_API from "../Services/APIlink"

export default function confirmRepostingPost(postId, setOpenDeleteModal, token) {

  console.log(postId)

  axios(`${URL_API}/repost/${postId}`, {
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


