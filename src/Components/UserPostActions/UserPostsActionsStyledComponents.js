import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";

export const UserActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9px;
`;

export const CommentBalloons = styled(AiOutlineComment)`
  font-size: 20px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Repost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RepostArrows = styled(BiRepost)`
  font-size: 20px;
    cursor: pointer;
`;

export const RepostedArrows = styled(BiRepost)`
    font-size: 20px;
    cursor: pointer;
    color: green;
`

export const Count = styled.h2`
  text-align: center;
  font-size: 10px;
  cursor: default;

  font-family: "Lato";
  font-weight: 400;
  line-height: 13px;
  text-align: center;
`;
