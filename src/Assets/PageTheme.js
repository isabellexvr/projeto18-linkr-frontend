import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => (props.width < 840 ? "70px" : "122px")};
  width: 100%;
  overflow: hidden;
  @media (min-width: 667px) {
    max-width: fit-content;
    margin: auto;
  }
`;
export const PageTitle = styled.h1`
  display: flex;
  align-items: center;
  height: 87px;
  width: fit-content;
  font-family: "Oswald";
  font-size: 33px;
  color: white;
  font-weight: 700;
  margin-left: 17px;
  justify-content: center;
  width: 100%;
  @media (max-width: 667px) {
    font-size: 23px;
    justify-content: flex-start;
  }
`;

export const PageStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 667px) {
    width: 100%;
  }
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 611px;
  @media (max-width: 667px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: inherit;
  align-items: center;
  max-width: 473px;
  margin-left: 32px;
  @media (max-width: 667px) {
    margin-left: 10px;
  }
`;

export const FollowButton = styled.button`
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  border-radius: 5px;
  color: #fff;
`;
