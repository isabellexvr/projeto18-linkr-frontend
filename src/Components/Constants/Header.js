import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Searchbox from "./Searchbox";
import useWindowDimensions from "../Services/windowDimensions";
import { AuthContext } from "../../Components/Context/authContext";
import jwtDecode from "jwt-decode";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const { width } = useWindowDimensions();
	const { token } = useContext(AuthContext);
	const [showLogout, setShowLogout] = useState(false);
	const navigate = useNavigate();

	const payload = jwtDecode(token);

	console.log(payload);

	function handleLogout() {
		localStorage.removeItem("userToken");
		navigate("/");
		console.log("check token:", token);
	}

	return (
		<HeaderStyle>
			<Container>
				<Logo>linkr</Logo>
				{width >= 840 && <Searchbox />}
				<UserContainer>
					{showLogout ? (
						<ContainerProfile>
							<AiOutlineUp onClick={() => setShowLogout(false)} />
							<Logout onClick={handleLogout}>Logout</Logout>
						</ContainerProfile>
					) : (
						<AiOutlineDown onClick={() => setShowLogout(true)} />
					)}
					<UserProfilePicture
						alt='user-profile'
						src={payload.userPicture}
					/>
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
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
	width: 91.7%;
	display: flex;
	justify-content: space-between;
`;

const UserContainer = styled.div`

  display: flex;
  align-items: center;
  width: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  > svg {
    color: white;
    font-size: 28px;
  }
`;

const UserProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 18px;
    margin-top: 16px;
    object-fit: cover;
`;
const Logo = styled.div`
	color: #ffffff;
	font-weight: 700;
	font-size: 50px;
	font-family: "Passion One";
	display: flex;
	align-items: center;
`;

const Logout = styled.div`

  color: #ffffff;
  font-family: lato;
  background-color: #171717;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  margin-top: 50px;
  @media (max-width: 800px) {
    width: 120px;
  }
`;

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  > svg {
    color: white;
    font-size: 28px;
    margin-right: 12px;
  }
`;
