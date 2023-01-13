import axios from "axios";
import URL_API from "./APIlink";

export function postLikeFunction(postId, token, setDisabled = null) {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`${URL_API}/like/${postId}`, config)
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
  axios(`${URL_API}/unlike/${postId}`, config)
    .then((res) => {
      if (setDisabled) {
        setDisabled(false);
      }
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
