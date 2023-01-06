import { ResetCss } from "../src/Assets/ResetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimelinePage from "./Pages/TimelinePage";
import HashTagsPage from "./Pages/HashTagPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
	return (
		<>
			<ResetCss />
			<BrowserRouter>
				<Routes>
					<Route
						path='/timeline'
						element={<TimelinePage />}
					/>
					<Route
						path='/hashtag/:hashtag'
						element={<HashTagsPage />}
					/>
					<Route
						path='/sign-in'
						element={<SignInPage />}
					/>
					<Route
						path='/sign-up'
						element={<SignUpPage />}
					/>
					<Route
						path='/user/:id'
						element={<ProfilePage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
