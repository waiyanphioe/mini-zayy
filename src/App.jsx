import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<h1>Hi</h1>} />
		</Routes>
	);
};

export default App;
