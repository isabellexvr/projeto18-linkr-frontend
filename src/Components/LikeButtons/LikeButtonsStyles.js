import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export const LikedIcon = styled(BsHeartFill)`
  margin-bottom: 4px;
  font-size: 18px;
  color: red;
  cursor: pointer;
  pointer-events: ${(props) => (props.isrequesting ? "none" : "initial")};
`;

export const LikeIcon = styled(BsHeart)`
  margin-bottom: 4px;
  font-size: 18px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isrequesting ? "none" : "initial")};
`;
