import Box from "./box";
import Header from "./header";
import Footer from "./welcome/footer";
import Help from "./welcome/help";
import Hero from "./welcome/hero";
import Hub from "./welcome/hub";

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
