import type { ReactNode } from "react";
import Box from "../../components/box";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";
import { ChartColumnIncreasing, Home,Star,Ticket,Cog,LogOut, User, ShelvingUnit } from "lucide-react";

import Fliper, { type Flipable } from "../../components/flipper";
import React from "react";

interface SideButtonProps extends Flipable {
	nome?: string;
	icon?: ReactNode;
	to?: string;
}

function SideButton({
	nome = "default",
	icon = <></>,
	to = "",
	flip = false,
}: SideButtonProps): ReactNode {
	return (
		<li
			className={`${flip ? "bg-primaria" : "bg-secundaria"} p-3 hover:scale-110 hover:bg-contraste-3 hover:text-black hover:rounded-xl transition-all`}
		>
			<Link to={to} className="flex items-center text-3xl gap-3">
				{icon}
				{nome}
			</Link>
		</li>
	);
}

function Sidebar(): ReactNode {
	return (
		<aside
			className={`
		sticky
		top-0 left-0
		h-screen 
		w-[30%]
		z-50
		text-white
`}
		>
			<Box className={`bg-terciaria h-9/10`}>
				<h1 className="flex items-center text-5xl gap-5">
					<Logo className="size-30" />
					Admin
				</h1>
				<nav>
					<ul className="flex flex-col mx-3 gap-5">
						<Fliper>
							<SideButton nome="Home" icon={<Home />} to="/" />
							<SideButton nome="DashBoard" icon={<ChartColumnIncreasing/>} to="/hubadmin" />
							<SideButton nome="Sobre" icon={<Star/>} to="/sobre" />
							<SideButton nome="Pedidos" icon={<Ticket/>} to="/ticket" />
							<SideButton nome="Funcionários" icon={<User/>} to="" />
							<SideButton nome="Estoque" icon={<ShelvingUnit/>} to="" />
						</Fliper>
						<hr/>
						<Fliper>
							<SideButton nome="Config" icon={<Cog/>}/>
							<SideButton nome="Log Out" icon={<LogOut/>} to="/"/>
						</Fliper>
					</ul>
				</nav>
			</Box>
		</aside>
	);
}

export default Sidebar;
