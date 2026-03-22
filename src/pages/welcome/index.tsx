import Box from "../../components/box";
import Header from "../../components/header";
import Footer from "./footer";
import Help from "./help";
import Hero from "./hero";
import Hub from "./hub";

function Welcome() {

	return (
		<div>
			<Header/>
			<Box className={`
				text-white
			`}>
				<Hero/>
				<Hub/>
				<Help/>
			</Box>
			<Footer/>
		</div>
	);
}

export default Welcome;
