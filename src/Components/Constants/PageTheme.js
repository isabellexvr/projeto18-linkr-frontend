import styled from "styled-components";

export const PageTitle = styled.h1`
	height: 87px;
	display: flex;
	align-items: center;
	width: 611px;
	font-family: "Oswald";
	font-size: 33px;
	color: white;
	font-weight: 700;
	margin-left: 17px;
	@media (max-width: 600px) {
		width: 100%;
		align-items: center;
	}
`;

export const StyledMain = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 122px;
	background-color: #333333;
`;

export const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
