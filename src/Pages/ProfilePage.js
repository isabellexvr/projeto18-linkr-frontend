import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TooltipProvider } from "react-tooltip";
import {
  FollowButton,
  PageStyle,
  PageTitle,
  PostsContainer,
  ProfilePicture,
  StyledMain,
  TitleWrapper,
  Wrapper,
} from "../Assets/PageTheme";
import { AuthContext } from "../Context/authContext";
import useWindowDimensions from "../Services/windowDimensions";
import Header from "../Components/Header/Header";
import PageContainer from "../Components/PageContainer/PageContainer";
import Post from "../Components/Post/Post";
import { NoPostsMessage } from "../Components/Post/PostStyledComponents";
import Searchbox from "../Components/Searchbox/Searchbox";
import Trending from "../Components/Trending/Trending";
import { followUser, unFollowUser } from "../Services/followUser";

function ProfilePage() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [follow, setFollow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { width } = useWindowDimensions();
  const myUser = jwtDecode(token);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(`http://localhost:4000/user/${id}`, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.posts[0].id === null) {
          delete res.data.posts;
        }
        if (
          res.data.followedBy &&
          res.data.followedBy.includes(Number(myUser.userId))
        ) {
          setFollow(true);
          setUser(res.data);
          return;
        }
        setFollow(false);
        setUser(res.data);
        return;
      })
      .catch((err) => console.log(err));
  }, [id, deleted]);

  function handleFollow() {
    setDisabled(true);
    if (follow) {
      setFollow(false);
      return unFollowUser(id, token, setDisabled);
    }
    setFollow(true);
    return followUser(id, token, setDisabled);
  }

  return (
    <PageContainer>
      <Header />
      <TooltipProvider>
        <StyledMain width={width}>
          {width < 667 && <Searchbox />}
          <Wrapper>
            <TitleWrapper>
              <ProfilePicture src={user?.userImage} />
              <PageTitle>{user?.username}'s posts</PageTitle>
            </TitleWrapper>
            {Number(id) !== myUser.userId && (
              <FollowButton disabled={disabled} onClick={handleFollow}>
                {follow ? "Unfollow" : "Follow"}
              </FollowButton>
            )}
          </Wrapper>
          <PageStyle>
            <PostsContainer>
              {user?.posts ? (
                user.posts.map((post, index) => (
                  <Post
                    key={index}
                    myUser={myUser}
                    token={token}
                    username={user.username}
                    userImage={user.userImage}
                    userId={Number(id)}
                    post={post}
                    deleted={deleted}
                    setDeleted={setDeleted}
                  />
                ))
              ) : (
                <NoPostsMessage>
                  <h1>There are no posts yet.</h1>
                  <button
                    style={{ width: "fit-content" }}
                    onClick={() => window.location.reload()}>
                    Reload
                  </button>
                </NoPostsMessage>
              )}
            </PostsContainer>
            {width > 1020 && <Trending />}
          </PageStyle>
        </StyledMain>
      </TooltipProvider>
    </PageContainer>
  );
}

export default ProfilePage;
