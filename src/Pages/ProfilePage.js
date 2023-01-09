import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Constants/Header";
import Post from "../Components/Post/Post";
import Trending from "../Components/TimelinePage/Trending";
import {
	PageStyle,
	PageTitle,
	StyledMain,
} from "../Components/Constants/PageTheme";
import { AuthContext } from "../Components/Context/authContext";

function ProfilePage() {
	const { id } = useParams();
	const { token } = useContext(AuthContext);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const config = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios(`http://localhost:4000/user/${id}`, config)
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<StyledMain>
				<PageStyle>
					<PageTitle>{user && user.username}'s posts</PageTitle>
					{user &&
						user.posts.map((post, index) => (
							<Post
								username={user.username}
								userImage={user.userImage}
								post={post}
							/>
						))}
				</PageStyle>
				<Trending />
			</StyledMain>
		</>
	);
}

export default ProfilePage;
