import type { ReactNode } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Box from "../../components/box";

function HubAdmin():ReactNode {
	return <div>
		<Header pagina="admin"/>
		<Box className="text-white">
			<h1>admin</h1>
		</Box>
		<Footer/>
	</div>
}

export default HubAdmin;
