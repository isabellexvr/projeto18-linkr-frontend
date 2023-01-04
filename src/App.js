import { ResetCss } from "../src/Assets/ResetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimelinePage from "./Pages/TimelinePage";
import HashTagsPage from "./Pages/HashTagPage";

function App() {
  return (
    <>
      <ResetCss />
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/hashtags" element={<HashTagsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
