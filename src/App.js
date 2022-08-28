// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./assets/styles/root.scss";
import Layout from "./components/Layout/Layout";
import ComputerList from "./pages/ComputerList";
import DetailsForm from "./pages/DetailsForm";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/detailsForm" element={<DetailsForm />} />
					<Route path="/computerList" element={<ComputerList />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
