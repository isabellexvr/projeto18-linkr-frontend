import styled from "styled-components";
import Header from "../Constants/Header";

export default function MainPage() {
  return (
    <MainPageStyle>
      <Header />
    </MainPageStyle>
  );
}

const MainPageStyle = styled.div`
  height: 150vh;
`