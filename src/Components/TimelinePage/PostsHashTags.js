import React, { useEffect, useState } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import {
  ActionsContainer,
  Description,
  EditContainer,
  LeftContainer,
  LikesCount,
  PostStyle,
  RightContainer,
  TitleContainer,
  UserName,
  UserProfilePicture,
} from "../Post/PostStyledComponents";
import PostLink from "../PostLink/PostLink";
import jwtDecode from "jwt-decode";
import EditButton from "../EditAndDeleteButtons/EditButton";
import DeleteButton from "../EditAndDeleteButtons/DeleteButton";
import { useNavigate, useParams } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import IsLiked from "../../Services/CheckIfIsLiked";
import { TooltipProvider } from "react-tooltip";
import handleLikedBy from "../../Services/handleLikedBy";
import handleEditInput from "../../Services/postEdition";
import axios from "axios";
import styled from "styled-components";

export default function PostHashTags(props) {
  console.log(props.metadata);
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [liked, setLiked] = useState([]);
  // const [disabled, setDisabled] = useState(false);
  // const [edit, setEdit] = useState([]);
  // const [editedDescription, setEditedDescription] = useState({});
  // const { token } = useContext(AuthContext);
  // const { userId } = jwtDecode(token);
  const { userId, userName, userImage } = props.user;
  const { postId, likesCount, likedBy, postDescription, url } = props.content;
  const { disabled, setDisabled } = props.disable;
  const { edit, setEdit } = props.edition;
  const [editedDescription, setEditedDescription] = useState(postDescription);
  const { setOpenModal } = props.modal;
  const setPostToDelete = props.setPostToDelete;
  const navigate = useNavigate();
  const token = props.token;
  const userInfo = jwtDecode(token);


  function handleLikedBy(arr) {
    let string;

    if (arr.find((e) => e.userId === userId)) {
      if (arr.length > 2) {
        string = `Você ${arr[arr.length - 1].username} e outras ${arr.length - 2
          } pessoas`;
        return string;
      }
      if (arr.length === 2) {
        string = `Você e ${arr[arr.length - 1].username} curtiram`;
        return string;
      } else {
        return (string = "Você curtiu");
      }
    }

    if (arr.length > 2) {
      string = `${arr[arr.length - 1].username} , ${arr[arr.length - 2].username
        } e outras ${arr.length - 2} pessoas`;
      return string;
    } else if (arr.length === 2) {
      string = `${arr[arr.length - 1].username} , ${arr[arr.length - 2].username
        } curtiram`;
      return string;
    } else {
      return (string = `${arr[arr.length - 1].username}, curtiu`);
    }
  }

  // function sendNewDescription(e, postId) {
  //   e.preventDefault();
  //   console.log(postId);
  //   setLoading(true);

  //   const config = {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJ1c2VyUGljdHVyZSI6Imh0dHBzOi8va2JpbWFnZXMxLWEuYWthbWFpaGQubmV0L2FmY2Q4NjUzLTNiMjctNDQyMy1iZWU5LTU3MGZiMTQ0MWFlZC8zNTMvNTY5LzkwL0ZhbHNlL3ByaWRlLWFuZC1wcmVqdWRpY2UtNzEuanBnIiwic2Vzc2lvbklkIjoxNTgsImlhdCI6MTY3MzIzMDMzNH0.poYNfisvv3a4b3b4kCuUXtIqH8yDVkkn4K04VN9ivn0`,
  //     },
  //     data: {
  //       description: editedDescription,
  //     },
  //   };
  //   axios(`http://localhost:4000/posts/${postId}`, config)
  //     .then((a) => {
  //       setLoading(false);
  //       setEdit([]);
  //       console.log(a.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setError(true);
  //       setLoading(false);
  //     });
  // }


  return (
    <TooltipProvider>
      <PostStyleHashTag>
        <LeftContainer>
          <UserProfilePicture src={userImage} />
          <IsLiked
            likedBy={likedBy}
            setDisabled={setDisabled}
            disabled={disabled}
            token={token}
            postId={postId}
            loggedUserId={userInfo.userId}
          />
          <TooltipWrapper tooltipId={postId}>
            <LikesCount>
              {likesCount} {likesCount === "1" ? "like" : "likes"}
            </LikesCount>
          </TooltipWrapper>
          <Tooltip
            id={postId}
            content={handleLikedBy(likedBy, userInfo)}
            place="bottom"
          />
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <UserName>{userName}</UserName>
            {userId === userInfo.userId && (
              <ActionsContainer>
                <EditButton setEdit={setEdit} edit={edit} />
                <DeleteButton
                  setPostToDelete={setPostToDelete}
                  setOpenModal={setOpenModal}
                  postId={postId}
                />
              </ActionsContainer>
            )}
          </TitleContainer>
          {edit && userId === userInfo.userId ? (
            <EditContainer
              type="text"
              ref={(ref) => ref && ref.focus()}
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
              onKeyDown={(event) =>
                handleEditInput(
                  event,
                  postId,
                  editedDescription,
                  setEdit,
                  token
                )
              }
            />
          ) : (
            <Description>
              <ReactTagify
                tagStyle={{
                  color: "white",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
                tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}
              >
                {postDescription}
              </ReactTagify>
            </Description>
          )}
          <PostLink metadata={props.metadata} />
        </RightContainer>
      </PostStyleHashTag>
    </TooltipProvider>
  );
}

const PostStyleHashTag = styled.div`
  height: 100%;
  width: 100%;
  background-color: #171717;
  margin-top: 100px;
  margin-bottom: -80px;
  display: flex;
  @media (min-width: 900px) {
    width: 611px;
    height: 276px;
    border-radius: 16px;
  }
`;

// export const PostStyle = styled.div`
//   height: 232px;
//   width: 100%;
//   background-color: #171717;
//   margin-top: 16px;
//   display: flex;

//   @media (min-width: 667px) {
//     width: 611px;
//     height: 276px;
//     border-radius: 16px;
//   }
// `;

// const LoadingMessage = styled.div`
//   margin-top: 25px;
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   > div {
//     height: 50px;
//     width: 60%;
//     border-radius: 15px;
//     background-color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     > h1 {
//       font-family: "Lato";
//       font-weight: 600;
//       font-size: 18px;
//     }
//   }
// `;

// const ErrorMessage = styled.div`
//   margin-top: 25px;
//   font-family: "Lato";
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   > div {
//     height: 125px;
//     background-color: white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     > h1 {
//       color: red;
//       font-weight: 800;
//       font-size: 20px;
//       margin-bottom: 5px;
//     }
//     > h2 {
//       font-size: 14px;
//       margin-bottom: 10px;
//       width: 90%;
//       text-align: justify;
//     }
//     > button {
//       background-color: #1877f2;
//       border-radius: 5px;
//       width: 112px;
//       height: 22px;
//       border: none;
//       color: #ffffff;
//       font-family: "Lato";
//       font-weight: 700;
//       font-size: 13px;
//     }
//   }
// `;

// const NoPostsMessage = styled.div`
//   margin-top: 25px;
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   > h1 {
//     font-family: "Lato";
//     font-weight: 600;
//     font-size: 18px;
//     color: #efefef;
//   }
// `;

// const LeftContainer = styled.div`
//   margin-top: 17px;
//   display: flex;
//   flex-direction: column;
//   width: 18.4%;
//   align-items: center;
//   color: white;
// `;

// const UserProfilePicture = styled.img`
//   width: 40px;
//   border-radius: 50%;
//   margin-top: 9px;
//   margin-bottom: 17px;
// `;

// const LikeIcon = styled(FiHeart)`
//   margin-bottom: 12px;
//   font-size: 22px;
// `;

// const LikesCount = styled.h2`
//   text-align: center;
//   font-size: 12px;
// `;

// const RightContainer = styled.div`
//   margin-top: 18px;
//   display: flex;
//   flex-direction: column;
//   font-family: "Lato";
//   width: 76.8%;
// `;

// const UserName = styled.h1`
//   font-weight: 400;
//   font-size: 17px;
//   color: white;
//   margin-top: 10px;
// `;

// const Description = styled.p`
//   margin-top: 7px;
//   font-weight: 400;
//   font-size: 15px;
//   color: #b7b7b7;
//   line-height: 18px;
// `;

// const EditPencil = styled(TiPencil)`
//   position: absolute;
//   color: white;
//   right: 25px;
//   cursor: pointer;
//   pointer-events: ${(props) => (props.isOpened ? "none" : "initial")};
// `;

// const TrashCan = styled(FaTrash)`
//   color: white;
//   position: absolute;
//   right: 0;
//   cursor: pointer;
// `;

// const EditDescription = styled.input``;
