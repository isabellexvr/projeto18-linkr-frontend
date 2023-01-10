import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export const LikedIcon = styled(BsHeartFill)`
  margin-bottom: 12px;
  font-size: 22px;
  color: red;
  cursor: pointer;
  pointer-events: ${(props) => (props.isRequesting ? "none" : "initial")};
`;

export const LikeIcon = styled(BsHeart)`
  margin-bottom: 12px;
  font-size: 22px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isRequesting ? "none" : "initial")};
`;
