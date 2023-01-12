import axios from "axios";

export function followUser(id, token, setDisabled) {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios(`http://localhost:4000/follow/${id}`, config)
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
  axios(`http://localhost:4000/unfollow/${id}`, config)
    .then(() => setDisabled(false))
    .catch(() =>
      alert("Não foi possível executar a operação, tente novamente mais tarde!")
    );
}
