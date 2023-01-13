import axios from "axios";
import URL_API from "./APIlink";

export function authConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function postComment(token, commentFormat) {
  const config = authConfig(token);

  console.log("check if information is getting here:", commentFormat, token);
  return await axios.post(`${URL_API}/comments`, commentFormat, config);
}

export async function getComment(token, postId) {
  const config = authConfig(token);

  console.log(URL_API);

  console.log("Chegar a função getComment:", postId);

  return await axios.get(`${URL_API}/comments/${postId}`, config);
}
