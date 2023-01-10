import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetCss } from "./Assets/ResetCss";
import Context from "./Context/authContext";
import HashTagsPage from "./Pages/HashTagPage";
import ProfilePage from "./Pages/ProfilePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import Teste from "./Pages/Teste";
import TimelinePage from "./Pages/TimelinePage";

function App() {
  return (
    <>
      <ResetCss />
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path='/timeline' element={<TimelinePage />} />
            <Route path='/hashtag/:hashtag' element={<HashTagsPage />} />
            <Route path='/' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/user/:id' element={<ProfilePage />} />
            <Route path='/teste' element={<Teste />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
