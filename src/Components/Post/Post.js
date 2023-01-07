import React from "react";
import PostLink from "../TimelinePage/PostLink";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import {
	PostStyle,
	LeftContainer,
	UserProfilePicture,
	LikeIcon,
	LikesCount,
	RightContainer,
	UserName,
	Description,
} from "./PostStyledComponents";

function Post(props) {
	const navigate = useNavigate();
	const { username, userImage, post } = props;

	const tagStyle = {
		color: "white",
		fontWeight: 800,
		cursor: "pointer",
	};

	return (
		<PostStyle>
			<LeftContainer>
				<UserProfilePicture
					alt='user-profile'
					src={userImage}
				/>
				<LikeIcon />
				<LikesCount>{post.likesCount} likes</LikesCount>
			</LeftContainer>
			<RightContainer>
				<UserName>{username}</UserName>
				<Description>
					<ReactTagify
						tagStyle={tagStyle}
						tagClicked={(tag) => navigate(`/hashtag/${tag.substring(1)}`)}>
						{post.description}
					</ReactTagify>
				</Description>
				<PostLink
					linkTitle={post.linkTitle}
					linkDescription={post.linkDescription}
					linkUrl={post.linkUrl}
					linkImage={post.linkImg}
				/>
			</RightContainer>
		</PostStyle>
	);
}

export default Post;
