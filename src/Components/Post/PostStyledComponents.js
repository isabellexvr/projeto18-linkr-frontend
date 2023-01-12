import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";

export const tooltipStyle = {
  fontFamily: "Lato",
  fontWeight: 700,
  fontSize: "11px",
  lineHeight: "13.2px",
  color: "#505050",
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "3px",
};

export const PostStyle = styled.div`
  height: 232px;
  width: 100%;
  background-color: #171717;
  margin-top: 16px;
  display: flex;

  @media (min-width: 667px) {
    width: 611px;
    height: 276px;
    border-radius: 16px;
  }
`;

export const LeftContainer = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  width: 19.5%;
  align-items: center;
  color: white;
`;

export const UserProfilePicture = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 17px;
  object-fit: cover;
`;

export const LikeIcon = styled(BsHeart)`
  margin-bottom: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const LikedIcon = styled(BsHeartFill)`
  margin-bottom: 8px;
  font-size: 20px;
  color: red;
  cursor: pointer;
`;

export const Count = styled.h2`
  text-align: center;
  font-size: 10px;
  cursor: default;
  margin-bottom: 8px;
  font-family: "Lato";
  font-weight: 400;
  line-height: 13px;
  text-align: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Lato";
  width: 76.8%;
`;

export const UserName = styled.h1`
  font-weight: 400;
  font-size: 17px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;
  line-height: 18px;
`;

export const NoPostsMessage = styled.div`
  margin-top: 25px;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  > h1 {
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    color: #efefef;
    margin-bottom: 10px;
  }
`;

export const EditPencil = styled(TiPencil)`
  margin-right: 12px;
  color: white;
  cursor: pointer;
  pointer-events: ${(props) => (props.isOpened ? "none" : "initial")};
`;

export const TrashCan = styled(FaTrash)`
  color: white;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const LoggedUserActionsContainer = styled.div`
  display: flex;
  margin-top: 22px;
  align-items: center;
`;

export const EditContainer = styled.input`
  all: unset;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: #4c4c4c;
  background-color: #fff;
  text-indent: 8px;
  min-height: 32px;
  border-radius: 7px;
`;

export const tagStyle = {
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};

export const UserActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentBalloons = styled(AiOutlineComment)`
  font-size: 20px;
  margin-bottom: 3px;
`;

export const Repost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RepostArrows = styled(BiRepost)`
  font-size: 20px;
  margin-bottom: 3px;
`;
//lembrar de componentizar o styled components do userpostactions
