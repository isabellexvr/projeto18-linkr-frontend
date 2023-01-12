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
} from "./SearchboxStyles";

function Searchbox() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length !== 0) {
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(
        `https://linkr-api-9ik9.onrender.com/user?username=${search}`,
        config
      )
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
    }
  }, [search]);

  function handleClick(user) {
    setSearch("");
    setResult([]);
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
        result.map((user, index) => (
          <ResultWrapper key={index} onClick={() => handleClick(user)}>
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

export default Searchbox;
