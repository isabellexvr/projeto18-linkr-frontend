import styled from "styled-components";

export const Redirect = styled.a`
  text-decoration: none;
`;

export const LinkStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 150px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  @media (max-width: 667px) {
    min-width: 277px;
    height: 140px;
  }
`;

export const UrlTextInfo = styled.div`
  padding: 7px 11px 8px;
  box-sizing: border-box;
  width: 69.42%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 667px) {
    justify-content: space-evenly;
  }
`;

export const UrlTitle = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 13px;
  width: 93%;
  color: #cecece;
  margin-bottom: 4px;
`;

export const UrlDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 4px;
  color: #9b9595;
`;

export const Url = styled.h2`
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  height: auto;
  object-fit: contain;
  color: #cecece;
  overflow: hidden;
`;

export const UrlImage = styled.img`
  width: 30.58%;
  border-radius: 0px 12px 13px 0px;
  object-fit: cover;
`;
