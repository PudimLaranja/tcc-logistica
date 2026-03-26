import { useNavigate } from "react-router-dom";
import Box from "./box";
import Logo from "./logo";
import { Phone, Star, User } from "lucide-react";
import type { ReactNode } from "react";


interface PropsHeader {
	pagina?:string
}

function Header({pagina}:PropsHeader):ReactNode {
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
		hover:cursor-pointer
		hover:scale-105
		transition-all
		p-4
		text-lg
		rounded-xl
`;

	const nav = useNavigate();


	function toWelcome() {nav("/")}
	function toSobre() {nav("/sobre")}
	function toHubAdmin() {nav("/hubadmin")}

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
					<button
						onClick={toWelcome}
						className={`
						hover:scale-105
						hover:opacity-90
						hover:cursor-pointer
					`}>
						<Logo className="size-24"/>
					</button>
					<div
						className={`
						p-6
						bg-contraste-1
						w-5/12
						h-full
					`}
						id="titulo_container"
					>
						<h1 className={titulos}>Pizzaria Santos Dumont</h1>
					</div>
					<nav className="flex gap-10 mr-10">
						<button className={buttons} onClick={toSobre}>
							<Star />
							Sobre Nós
						</button>
						<button className={buttons}>
							<Phone />
							Contato
						</button>
						<button onClick={toHubAdmin} className={buttons}>
							{pagina === "admin" ? <Logo className="size-10"/> : <User/>}
							{pagina === "admin" ? "Admin" : "Login"}
						</button>
					</nav>
				</header>
			</Box>
		</div>
	);
}

export default Header;
