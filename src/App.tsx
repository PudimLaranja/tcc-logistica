import Sobre from "./pages/sobre";
import Welcome from "./pages/welcome";
import { Routes, Route, HashRouter} from "react-router-dom";
import "./style/style.css";
import HubAdmin from "./pages/hubadmin";
import Ticket from "./pages/ticket";


function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Welcome/>}/>
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/hubadmin" element={<HubAdmin/>}/>
					<Route path="/ticket" element={<Ticket/>}/>
					<Route path="*" element={<Welcome/>}/>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
