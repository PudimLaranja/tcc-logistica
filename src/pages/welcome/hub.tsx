import type { ReactNode } from "react";
import { url } from "../../global";

interface CardProps {
	name: string;
	children?: ReactNode;
	background?: number;
	image?: string;
	map?: boolean;
}

const mapLink =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7336.296007333202!2d-45.90355948123482!3d-23.164822618323893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc49e5bc854185%3A0x9b8cc1436654ceb6!2sSENAI!5e0!3m2!1spt-BR!2sbr!4v1774112375511!5m2!1spt-BR!2sbr";



function HubCard({
	name,
	children = "",
	background = 1,
	image = "",
	map = false,
}: CardProps): ReactNode {
	return (
		<div
			className={`
					w-full
					h-200
					bg-cover
					hover:scale-110
					hover:rounded-xl
					transition-all
					`}
			style={{
				backgroundImage: url(image),
			}}
		>
			<div
				className={`
				flex
				size-full
				*:p-4
				flex-col
				justify-between
				items-center
				
			`}
				style={{
					backgroundImage: `linear-gradient(to bottom, ${background === 1 ? "oklch(12.9% 0.042 264.695)" : "oklch(20.8% 0.042 265.755)"} 10%, transparent 100%)`,
					backgroundPositionX: "1000px"
				}}
			>
				<div className="flex gap-10 flex-col">
					<h1
						className={`
				text-3xl
			`}
					>
						{name}
					</h1>
					<p>{children}</p>
				</div>
				{!map ? (
					<div className="w-full justify-center items-center flex">
						<button
							className={`
								font-bold
								bg-contraste-2
								rounded-full
								p-3
								text-xl
								hover:scale-110
								hover:bg-contraste-3
								hover:text-black
								hover:cursor-pointer
								transition-all
							`}
						>
							Saiba Mais
						</button>
					</div>
				) : (
					<iframe
						src={mapLink}
						width="400"
						height="450"
						style={{ border: "0" }}
						loading="lazy"
					></iframe>
				)}
			</div>
		</div>
	);
}

function Hub() {
	return (
		<section
			className={`
			flex
			justify-between
			h-auto
			flex-col
			lg:flex-row	
		`}
		>
			<HubCard name="Pizzas Saborosas" image="/imgs/pizza1.jpg">
				Nossas pizzas são de alta qualidades, todas são cozidas no fogão a lenha
				com massa preparada na casa. Nós contamos com{" "}
				<b className="text-red-400">4</b> sabores de pizza preparados na hora.
			</HubCard>
			<HubCard
				name="Preços competitivos"
				image="/imgs/carteira.jpg"
				background={2}
			>
				Nossos profissionais de logística trabalham duro para garantir que você
				page preços justos e leves para seu bolço.
			</HubCard>
			<HubCard name="Localização Estratégica" image="/imgs/map.png" map={true}>
				Nossa localização é posicionada de maneira estratégica. Para garantir
				entrega rápida e fácil acesso para consumidores.
			</HubCard>
		</section>
	);
}

export default Hub;
