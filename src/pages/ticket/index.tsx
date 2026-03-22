import type { ReactNode } from "react";
import Header from "../../components/header";
import Box from "../../components/box";
import Footer from "../../components/footer";

function Ticket(): ReactNode {
	return (
		<div>
			<Header pagina="ticket" />
			<Box className="text-white">
				<h1>ticket</h1>
			</Box>
			<Footer />
		</div>
	);
}

export default Ticket;
