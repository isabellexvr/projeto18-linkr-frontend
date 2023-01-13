import Searchbox from "../Searchbox/Searchbox";
import useWindowDimensions from "../../Services/windowDimensions";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../../Context/authContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderStyle,
  Container,
  Logo,
  UserContainer,
  ContainerProfile,
  Logout,
  UserProfilePicture,
} from "./HeaderStyles";

export default function Header() {
  const { width } = useWindowDimensions();
  const { token } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const payload = jwtDecode(token);

  function handleLogout() {
    localStorage.removeItem("userToken");
    navigate("/");
  }

  return (
    <HeaderStyle>
      <Container>
        <Logo onClick={() => navigate("/timeline")}>linkr</Logo>
        {width >= 667 && <Searchbox />}
        <UserContainer>
          {showLogout ? (
            <ContainerProfile>
              <AiOutlineUp onClick={() => setShowLogout(false)} />
              <Logout onClick={handleLogout}>Logout</Logout>
            </ContainerProfile>
          ) : (
            <AiOutlineDown onClick={() => setShowLogout(true)} />
          )}
          <UserProfilePicture alt='user-profile' src={payload.userPicture} />
        </UserContainer>
      </Container>
    </HeaderStyle>
  );
}
