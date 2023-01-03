import styled from "styled-components";

export default function Link() {
  return (
    <>
      <LinkStyle>
        <UrlTextInfo>
          <UrlTitle>Como aplicar o Material UI em um projeto React</UrlTitle>
          <UrlDescription>
            Hey! I have moved this tutorial to my personal blog. Same content,
            new location. Sorry about making you click through to another page.
          </UrlDescription>
          <Url>https://medium.com/@pshrmn/a-simple-react-router</Url>
        </UrlTextInfo>
        <UrlImage
          alt="url"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof8DNWmxkNJX59_VKPdsAF_805yD2vsfKuMr_XedMSNyWgYyZG-bjw05w1zAXGrnPgew&usqp=CAU"
        />
      </LinkStyle>
      
    </>
  );
}

const LinkStyle = styled.div`
  margin-top: 13px;
  height: 115px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
`;

const UrlTextInfo = styled.div`
  padding: 7px 11px 8px;
  box-sizing: border-box;
  width: 69.42%;
`;

const UrlTitle = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 13px;
  width: 93%;
  color: #cecece;
  margin-bottom: 4px;
`;

const UrlDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 4px;
  color: #9b9595;
`;

const Url = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;

  color: #cecece;
`;

const UrlImage = styled.img`
  width: 30.58%;
  border-radius: 0px 12px 13px 0px;
  object-fit: cover;
`;
