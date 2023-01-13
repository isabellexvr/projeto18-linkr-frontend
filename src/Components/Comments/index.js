import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext";
import jwtDecode from "jwt-decode";
import * as S from "./styles";
import { FaRegPaperPlane } from "react-icons/fa";
import { useForm } from "../../Services/useForm";
import { getComment, postComment } from "../../Services/API";

function Comments({ commentInfo }) {
  const { token } = useContext(AuthContext);
  const userInfo = jwtDecode(token);
  const { postId, userId, userName, userImage, openComments } = commentInfo;
  const [form, handleForm] = useForm({
    comment: "",
  });
  const [getComments, setGetComments] = useState([]);
  const [showExistingComments, setExistingComments] = useState(false);

  const commentFormat = {
    comment: form.comment,
    postId: postId,
  };

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAh que inferno");

    console.log("Post ID:", postId);
    const promise = getComment(token, postId);

    promise.then((res) => {
      console.log(res.data);
      setGetComments(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
    console.log("Bora ver se chega aqui:", postId);
  }, [postId]);

  function saveComment(event) {
    event.preventDefault();

    const promise = postComment(token, commentFormat);

    promise.then((res) => {
      console.log(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
  }

  return (
    <>
      {openComments && (
        <S.Container
          onClick={() => console.log(postId, userId, userName, userImage)}
        >
          {getComments.map((c) => (
            <S.WrapperGetComment>
              <S.PictureBox>
                <img src={c.pictureUrl} alt="Foto do usuário" />
              </S.PictureBox>
              {console.log("checking:", c)}
              <S.ContentBox>
                <S.name>{c.username}</S.name>
                <S.Comment>{c.comment}</S.Comment>
              </S.ContentBox>
            </S.WrapperGetComment>
          ))}

          <S.WrapperComment>
            <img src={userInfo.userPicture} alt="Foto do usuário" />
            <S.CommentForm onSubmit={saveComment}>
              <input
                type="text"
                placeholder=" write a comment..."
                name="comment"
                value={form.comment}
                onChange={handleForm}
              />
            </S.CommentForm>
            <FaRegPaperPlane />
          </S.WrapperComment>
        </S.Container>
      )}
    </>
  );
}

export default Comments;
