import axios from "axios";
import URL_API from "../Services/APIlink"

export function followUser(id, token, setDisabled) {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`${URL_API}/follow/${id}`, config)
    .then(() => setDisabled(false))
    .catch(() =>
      alert("Não foi possível executar a operação, tente novamente mais tarde!")
    );
}

export function unFollowUser(id, token, setDisabled) {
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`${URL_API}/unfollow/${id}`, config)
    .then(() => setDisabled(false))
    .catch(() =>
      alert("Não foi possível executar a operação, tente novamente mais tarde!")
    );
}
