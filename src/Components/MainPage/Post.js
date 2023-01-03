import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import urlMetadata from "url-metadata";

const texto = "Muito #foda dahora esse link aqui rapeize!! #sabadaco #kasino";

export default function Post() {
  return (
    <PostStyle>
      <LeftContainer>
        <UserProfilePicture
          alt="user-profile"
          src="https://i.pinimg.com/originals/64/8b/da/648bda8b742f5f713e94f17ff1b49252.jpg"
        />
        <LikeIcon />
        <LikesCount>12 likes</LikesCount>
      </LeftContainer>
      <RightContainer>
        <UserName>Raposinha Fofa</UserName>

        <Description>
          {texto.split(" ").map((e) => {
            if (e[0] === "#") {
              return <strong>{" " + e + " "}</strong>;
            } else {
              return " " + e + " ";
            }
          })}
        </Description>
        <button
          onClick={() => {
            urlMetadata("https://youtube.com/")
              .then((a) => {
                console.log(a);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          testing
        </button>
        <LinkStyle></LinkStyle>
      </RightContainer>
    </PostStyle>
  );
}

const PostStyle = styled.div`
  height: 232px;
  width: 100%;
  background-color: #171717;
  margin-top: 16px;
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.4%;
  align-items: center;
  color: white;
`;

const UserProfilePicture = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-top: 9px;
  margin-bottom: 17px;
`;

const LikeIcon = styled(FiHeart)`
  margin-bottom: 12px;
  font-size: 22px;
`;

const LikesCount = styled.h2`
  text-align: center;
  font-size: 12px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato";
  width: 76.8%;
`;

const UserName = styled.h1`
  font-weight: 400;
  font-size: 17px;
  color: white;
  margin-top: 10px;
`;

const Description = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;
  > strong {
    font-weight: 700;
  }
`;

const LinkStyle = styled.div``;
