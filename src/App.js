import { ResetCss } from "../src/Assets/ResetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimelinePage from "./Pages/TimelinePage";

function App() {
  return (
    <>
      <ResetCss />
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
