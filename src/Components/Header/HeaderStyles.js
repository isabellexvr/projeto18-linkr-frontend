import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 72px;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 91.7%;
  display: flex;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  > svg {
    color: white;
    font-size: 28px;
  }
`;

export const UserProfilePicture = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Logo = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 50px;
  font-family: "Passion One";
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logout = styled.div`
  color: #ffffff;
  font-family: lato;
  background-color: #171717;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  margin-top: 50px;
  @media (max-width: 800px) {
    width: 120px;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  > svg {
    color: white;
    font-size: 28px;
    margin-right: 12px;
  }
`;
