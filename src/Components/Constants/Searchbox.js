import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import axios from "axios";

function Searchbox(props) {
	const [search, setSearch] = useState("");
	const [result, setResult] = useState([]);

	useEffect(() => {
		if (search.length !== 0) {
			const config = {
				method: "GET",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJQaWN0dXJlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2E2L0Fub255bW91c19lbWJsZW0uc3ZnLzY0MHB4LUFub255bW91c19lbWJsZW0uc3ZnLnBuZyIsImlhdCI6MTY3MjkzNzg1NH0.DbN4kK85604ZviFjspBQP7RSC2OkuB5qqSALVEd-4CM",
				},
			};

			axios(`https://linkr-api-9ik9.onrender.com/user/${search}`, config)
				.then((res) => setResult(res.data))
				.catch((err) => console.log(err));
		}
	}, [search]);

	return (
		<ComponentWrapper result={result}>
			<InputWrapper>
				<StyledInput
					minLength={3}
					debounceTimeout={300}
					onChange={(event) => setSearch(event.target.value)}
					placeholder='Search for people'
				/>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginRight: "17px",
					}}>
					<SearchIcon />
				</div>
			</InputWrapper>
			{search.length !== 0 &&
				result.length !== 0 &&
				result.map((user, index) => (
					<ResultWrapper key={index}>
						<ProfilePicture
							src={user.pictureUrl}
							alt={`${user.username} profile picture`}
						/>
						<Username>{user.username}</Username>
					</ResultWrapper>
				))}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: fit-content;
	height: fit-content;
	background-color: #e7e7e7;
	border-radius: 8px;
	overflow-y: scroll;
	margin-top: 15px;
`;

const InputWrapper = styled.div`
	@media (min-width: 768px) {
		width: 563px;
	}
	display: inherit;
	align-items: center;
	height: 45px;
	width: 350px;
	background-color: #fff;
	border-radius: 8px;
`;

const ResultWrapper = styled.div`
	display: inherit;
	flex-flow: row nowrap;
	align-items: center;
	margin: 16px 17px;
`;

const ProfilePicture = styled.img`
	width: 39px;
	border-radius: 50%;
`;

const Username = styled.p`
	font-family: "Lato", sans-serif;
	font-size: 19px;
	line-height: 23px;
	color: #515151;
	margin-left: 12px;
`;

const SearchIcon = styled(AiOutlineSearch)`
	@media (min-width: 768px) {
		width: 21px;
		height: 21px;
	}
	width: 19.15px;
	height: 19.15px;
	color: #c6c6c6;
	cursor: pointer;
`;

const StyledInput = styled(DebounceInput)`
	@media (min-width: 768px) {
		width: 543px;
		text-indent: 14px;
		&::placeholder {
			font-size: 19px;
		}
	}
	all: unset;
	height: 43px;
	width: 330px;
	font-family: "Lato", sans-serif;
	border: none;
	border-radius: 8px;
	text-indent: 16px;
	&::placeholder {
		color: #c6c6c6;
		font-size: 17px;
	}
`;

export default Searchbox;
