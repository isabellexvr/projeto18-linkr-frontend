import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Constants/Header";
import Post from "../Components/TimelinePage/Post";
import Trending from "../Components/TimelinePage/Trending";
import {
	PageStyle,
	PageTitle,
	StyledMain,
} from "../Components/Constants/PageTheme";

function ProfilePage() {
	const { id } = useParams();

	useEffect(() => {
		const config = {
			method: "GET",
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJQaWN0dXJlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2E2L0Fub255bW91c19lbWJsZW0uc3ZnLzY0MHB4LUFub255bW91c19lbWJsZW0uc3ZnLnBuZyIsInNlc3Npb25JZCI6MTEsImlhdCI6MTY3MzAxNDA2Mn0.Fq_h5mwLDmmdcmvcBwYSTQN7-1uDeN5_1dlYiLraw6k",
			},
		};
		axios(`http://localhost:4000/user/${id}`, config)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<StyledMain>
				<PageStyle>
					<PageTitle>USERNAME</PageTitle>
					<Post />
				</PageStyle>
				<Trending />
			</StyledMain>
		</>
	);
}

export default ProfilePage;
