import type { ReactNode } from "react";
import Box from "./box";

function Footer():ReactNode {

	return <footer>
		<Box bg_color={`bg-secundaria`} className={`text-white `}>
			<h1>Copyright (c) 2026 . Todos os direitos reservados.</h1>
		</Box>	
	</footer>;
}

export default Footer
