import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import {
  ComponentWrapper,
  InputWrapper,
  SearchIcon,
  ResultWrapper,
  ProfilePicture,
  Username,
  StyledInput,
  FollowingTag,
} from "./SearchboxStyles";
import jwtDecode from "jwt-decode";
import { sortByFollowing } from "../../Services/sortByFollowing";

function Searchbox() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [followers, setFollowers] = useState([]);

  const { token } = useContext(AuthContext);
  const { userId } = jwtDecode(token);
  const navigate = useNavigate();

  console.log(followers);

  useEffect(() => {
    if (search.length >= 3) {
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(`http://localhost:4000/user?username=${search}`, config)
        .then((res) => {
          res.data.forEach((user) => {
            if (!followers.includes(user.id)) {
              if (user.followedBy?.includes(Number(userId))) {
                setFollowers([...followers, user.id]);
              }
            }
          });
          setResult(res.data);
        })
        .catch((err) => console.log(err));
    }
    setFollowers([]);
    setResult([]);
  }, [search]);

  function handleClick(user) {
    setSearch("");
    setResult([]);
    setFollowers([]);
    navigate(`/user/${user.id}`);
  }

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
        sortByFollowing(followers, result).map((user, index) => (
          <ResultWrapper key={index} onClick={() => handleClick(user)}>
            <ProfilePicture
              src={user.pictureUrl}
              alt={`${user.username} profile picture`}
            />
            <Username>{user.username}</Username>
            {followers.includes(user.id) && (
              <FollowingTag>• following</FollowingTag>
            )}
          </ResultWrapper>
        ))}
    </ComponentWrapper>
  );
}

export default Searchbox;
