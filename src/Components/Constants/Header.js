import styled from "styled-components";
import logo from "../../Assets/linkr.png";
import { AiOutlineDown } from "react-icons/ai";
import Searchbox from "./Searchbox";

export default function Header() {
	return (
		<HeaderStyle>
			<Container>
				<div className='logo'>
					<Logo
						alt='logo'
						src={logo}
					/>
				</div>
				<Searchbox />
				<UserContainer>
					<AiOutlineDown />
					<UserProfilePicture
						alt='user-profile'
						src='https://i.pinimg.com/originals/64/8b/da/648bda8b742f5f713e94f17ff1b49252.jpg'
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
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
`;

const Container = styled.div`
	width: 91.7%;
	display: flex;
	justify-content: space-between;
	.logo {
		display: flex;
		align-items: center;
	}
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
const Logo = styled.img`
	width: initial;
	height: initial;
`;
