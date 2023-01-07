import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

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

export const LikeIcon = styled(FiHeart)`
	margin-bottom: 12px;
	font-size: 22px;
`;

export const LikesCount = styled.h2`
	text-align: center;
	font-size: 12px;
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
