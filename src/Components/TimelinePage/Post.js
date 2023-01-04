import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import PostLink from "./PostLink";

//https://www.rpgnext.com.br/blog/

const postsExample = [
  {
    userName: "Maluco Random",
    userImage:
      "https://i.pinimg.com/originals/64/8b/da/648bda8b742f5f713e94f17ff1b49252.jpg",
    likesCount: "12",
    postDescription:
      "Muito #foda dahora esse link aqui rapeize!! #sabadaco #kasino",
    linkInfo: {
      linkTitle: "Kasino no Sabadaço - AE KASINÃO / KASINAUM",
      linkDescription:
        'SIGA NO TWITTER: @_YuriRodrigues(Todos os direitos reservados à TV Bandeirantes)Partes de destaque (fora o GC eterno "NA SEQUÊNCIA - Thammy e as revelações n...',
      linkUrl:
        "https://www.youtube.com/watch?v=umBWV2QC0xo&ab_channel=YuriRodrigues",
      linkImage: "https://i.ytimg.com/vi/umBWV2QC0xo/hqdefault.jpg",
    },
  },
  {
    userName: "Nerdola Geek",
    userImage: "https://cf.shopee.com.br/file/0a4dba0f50d3862f3118154895d987bc",
    likesCount: "15",
    postDescription: "Mais um dia #curtindo #RPG",
    linkInfo: {
      linkTitle: "Blog - RPG Next",
      linkDescription: "Blog com conteúdo com RPG.",
      linkUrl: "https://www.rpgnext.com.br/blog/",
      linkImage:
        "https://i1.wp.com/www.rpgnext.com.br/wp-content/uploads/2015/09/canyon-BLOG-image.jpg?fit=1920%2C720&ssl=1",
    },
  },
];

export default function Post() {
  return (
    <>
      {postsExample.map((e) => (
        <PostStyle>
          <LeftContainer>
            <UserProfilePicture alt="user-profile" src={e.userImage} />
            <LikeIcon />
            <LikesCount>{e.likesCount} likes</LikesCount>
          </LeftContainer>
          <RightContainer>
            <UserName>{e.userName}</UserName>
            <Description>
              {e.postDescription.split(" ").map((e) => {
                if (e[0] === "#") {
                  return <strong>{" " + e + " "}</strong>;
                } else {
                  return " " + e + " ";
                }
              })}
            </Description>
            <PostLink
              linkTitle={e.linkInfo.linkTitle}
              linkDescription={e.linkInfo.linkDescription}
              linkUrl={e.linkInfo.linkUrl}
              linkImage={e.linkInfo.linkImage}
            />
          </RightContainer>
        </PostStyle>
      ))}
    </>
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
  line-height: 18px;
  > strong {
    font-weight: 700;
  }
`;
