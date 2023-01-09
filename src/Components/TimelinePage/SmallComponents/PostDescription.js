import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Description({ children }) {
  const navigate = useNavigate();
  return (
    <DescriptionStyle>
      <ReactTagify
        tagStyle={{
          color: "white",
          fontWeight: 800,
          cursor: "pointer",
        }}
        tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}
      >
        {children}
      </ReactTagify>
    </DescriptionStyle>
  );
}

const DescriptionStyle = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;
  line-height: 18px;
`;
