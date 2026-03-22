import Box from "./box";
import Logo from "./logo";
import { Phone, Star, User } from "lucide-react";

function Header() {
	const titulos: string = `
		text-3xl
		font-extrabold
		text-white
	`;

	const buttons: string = `
		flex
		row
		items-center
		text-cyan-100
		hover:text-white
		hover:bg-primaria
		hover:scale-105
		transition-all
		p-4
		text-lg
		rounded-xl
`;


	return (
		<div>
			<Box bg_color={`bg-secundaria`}>
				<header
					className={`			
						flex
						text-center
						justify-between
						items-center
			`}
				>
					<Logo className="size-24" />
					<div
						className={`
						p-6
						bg-contraste-1
						w-5/12
						h-full
					`}
						id="titulo_container"
					>
						<h1 className={titulos}>Papa's Pizzaria</h1>
					</div>
					<nav className="flex gap-10 mr-10">
						<a href="" className={buttons}><Star />Sobre Nós</a>
						<a href="" className={buttons}><Phone />Contato</a>
						<a href="" className={buttons}><User />Login</a>
					</nav>
				</header>
			</Box>
		</div>
	);
}

export default Header;
