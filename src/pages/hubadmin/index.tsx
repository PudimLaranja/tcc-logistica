import type { ReactNode } from "react";
import Footer from "../../components/footer";
import Box, { type BoxProps } from "../../components/box";
import Sidebar from "../../components/sidebar";
import "./hubadmin.css"
import Outline from "../../components/outline";
import React from "react";
import { CircleAlert, CircleX, List, ListChecks, ListTodo, ListX, OctagonX, TriangleAlert, type LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps extends BoxProps {
	icon?: ReactNode,
	nome?: string,
	subTitulo?: string,
	footer_color?: string,
	icon_size?: string,
	text_format?: string,
	count?:number,
}

function Card({
	icon = (<></>),
	nome = "default",
	subTitulo = "Prioridade",
	children = (<></>),
	footer_color = "bg-secundaria",
	bg_color = "bg-primaria",
	icon_size = "size-2/3",
	text_format = "",
	count = 0,
	...props
}: CardProps): ReactNode {
	const var_bg_color = "var(--color-" + bg_color.replace('bg-', '') + ")";
	const var_footer_color = "var(--color-" + footer_color.replace('bg-', '') + ")";

	const footer_heigth: number = 15

	const size: string = icon_size;

	return <Link to="/ticket" className={`
	hover:scale-110
	transition-all
`}>
		<Box className={`
	text-white
	h-3/4
	flex
`}
			{...props}
			style={{
				backgroundImage: `linear-gradient(to top,${var_footer_color} 0%, ${var_footer_color} ${footer_heigth}%, ${var_bg_color} ${footer_heigth}%, ${var_bg_color} 100%)`
			}}

		>
			<div className="flex w-full items-center justify-between -mx-10 ml-0">

				{
					!React.isValidElement(icon) ? (<></>) :
						React.cloneElement(icon as React.ReactElement<LucideProps>, {
							className: size
						})
				}
				<div className={`font-bold ${text_format}`}>
					<h1 className={`text-2xl text-nowrap`}>{nome}</h1>
					<h2 className="text-xl">{subTitulo}</h2>
				<h1 className="text-4xl">{count}</h1>
				</div>
			</div>
			{children}
		</Box>
	</Link>
}

function HubAdmin(): ReactNode {
	return (
		<div className="flex w-full min-h-screen">
			<Sidebar />

			<div className="flex w-full justify-end">


				<div className="w-full text-white mt-10 items-center">
					<Outline><h1 className="text-4xl ml-10">Bem vindo(a) Admin!</h1></Outline>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<Card nome="Crítico" bg_color={`bg-red-700`} footer_color={`bg-red-900`} icon={<OctagonX />} count={1}/>
						<Card nome="Alta" bg_color={`bg-orange-700`} footer_color={`bg-orange-900`} icon={<CircleX />} />
						<Card nome="Média" bg_color={`bg-yellow-500`} footer_color={`bg-yellow-700`} icon={<TriangleAlert />} />
						<Card nome="Baixa" bg_color={`bg-green-700`} footer_color={`bg-green-900`} icon={<CircleAlert />} />

						<Card nome="A fazer" subTitulo="status" bg_color={`bg-amber-700`} footer_color={`bg-amber-900`} icon={<List />} />
						<Card nome="Fazendo" subTitulo="status" bg_color={`bg-amber-400`} footer_color={`bg-amber-500`} icon={<ListTodo />} count={1} />
						<Card nome="Concluido" subTitulo="status" bg_color={`bg-emerald-600`} footer_color={`bg-emerald-800`} icon={<ListChecks />} />
						<Card nome="Descartado" subTitulo="status" bg_color={`bg-gray-400`} footer_color={`bg-gray-600`} icon={<ListX />} />

					</div>
					<Box className="text-white">

						<h1>graficos vão aqui</h1>

					</Box>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default HubAdmin;
