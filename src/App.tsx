import Sobre from "./pages/sobre";
import Welcome from "./pages/welcome";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./style/style.css";
import { main_endpoint } from "./global";
import HubAdmin from "./pages/hubadmin";
import Ticket from "./pages/ticket";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={main_endpoint}>
						<Route path="welcome" element={<Welcome />} />
						<Route path="sobre" element={<Sobre />} />
						<Route path="hubadmin" element={<HubAdmin/>}/>
						<Route path="ticket" element={<Ticket/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
