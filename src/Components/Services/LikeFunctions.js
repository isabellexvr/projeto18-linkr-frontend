import axios from "axios";

export function postLikeFunction(postId, token, setDisabled = null) {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`http://localhost:4000/like/${postId}`, config)
    .then((res) => {
      if (setDisabled) {
        setDisabled(false);
      }
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

export function dislikeFunction(postId, token, setDisabled = null) {
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`http://localhost:4000/unlike/${postId}`, config)
    .then((res) => {
      if (setDisabled) {
        setDisabled(false);
      }
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
