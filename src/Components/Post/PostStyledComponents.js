import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";

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
  height: 70vw;
  width: 100%;
  background-color: #171717;
  margin-top: 16px;
  display: flex;

  @media (min-width: 900px) {
    width: 611px;
    height: 276px;
    border-radius: 16px;
  }
`;

export const LeftContainer = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  width: 18.4%;
  align-items: center;
  color: white;
`;

export const UserProfilePicture = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 9px;
  margin-bottom: 17px;
  object-fit: cover;
`;

export const LikeIcon = styled(BsHeart)`
  margin-bottom: 12px;
  font-size: 22px;
  cursor: pointer;
`;

export const LikedIcon = styled(BsHeartFill)`
  margin-bottom: 12px;
  font-size: 22px;
  color: red;
  cursor: pointer;
`;

export const LikesCount = styled.h2`
  text-align: center;
  font-size: 12px;
  cursor: default;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato";
  width: 76.8%;
`;

export const UserName = styled.h1`
  font-weight: 400;
  font-size: 17px;
  color: white;
  margin-top: 10px;
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
  width: 100%;
  justify-content: center;
  > h1 {
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    color: #efefef;
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

export const ActionsContainer = styled.div`
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
