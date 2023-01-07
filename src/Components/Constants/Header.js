import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import Searchbox from "./Searchbox";
import useWindowDimensions from "../Services/windowDimensions";
import { AuthContext } from "../../Components/Context/authContext";
import jwtDecode from "jwt-decode";
import { useContext } from "react";

export default function Header() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);

  const payload = jwtDecode(token);

  return (
    <HeaderStyle>
      <Container>
        <Logo>linkr</Logo>
        {width >= 840 && <Searchbox />}
        <UserContainer>
          <AiOutlineDown />
          <UserProfilePicture alt="user-profile" src={payload.userPicture} />
        </UserContainer>
      </Container>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 72px;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 91.7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  > svg {
    color: white;
    font-size: 28px;
    margin-right: 12px;
  }
`;

const UserProfilePicture = styled.img`
  width: 44px;
  border-radius: 50%;
`;
const Logo = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 50px;
  font-family: "Passion One";
`;
