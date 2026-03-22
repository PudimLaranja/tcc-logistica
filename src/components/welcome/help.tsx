import Box from "../box";
import {url} from "../../global";

interface ProdutoProps {
	preco?: number;
	nome?: string;
	image?: string;
	desc?: string;
}

function Produto({
	preco = 0,
	nome = "",
	image = "",
	desc = "pizza made with love",
}: ProdutoProps) {
	return (
		<Box className="hover:scale-105 transition-all">
			<div
				style={{
					backgroundImage: url(image),
					height: "20rem",
				}}
				className={`
					bg-secundaria
					bg-cover
				`}
			>
				<
					h1 className={`text-4xl font-extrabold`}
					style={{
						WebkitTextStrokeWidth: "3px",
						WebkitTextStrokeColor: "black"
					}}
				>{nome}</h1>
			</div>
			<div className={`flex justify-between mr-10 h-1/4`}>
				<div>
					<h1 className={`text-5xl`}>{preco.toFixed(2)}R$</h1>
					<p>{desc}</p>
				</div>
				<div className="flex h-full items-center justify-center">
					<button className={`
					text-4xl
					bg-contraste-2
					font-bold
					px-4
					py-2
					h-3/4
					rounded-full
					hover:scale-110
					hover:bg-contraste-3
					hover:text-black
					transition-all
				`}>Comprar</button>
				</div>
			</div>
		</Box>
	);
}

function Help() {
	return (
		<section className="bg-contraste-1">
			<h1 className="w-full text-center font-extrabold text-4xl">Cardápio</h1>
			<br/>
			<div
				className={`
			grid
			grid-cols-2
			bg-red-800
			p-3
			rounded-4xl
		`}
			>
				<Produto nome="Pizza de Mozzarella" image="/imgs/pizza_mozzarella.jpeg" desc="Pizza feita com queijo mussarela." />
				<Produto nome="Pizza Portuguesa" image="/imgs/pizza_portuguesa.avif" desc="Pizza com sabores lusitanos. Presunto, ovos cozidos, cebola e azeitona." />
				<Produto nome="Pizza Rúcula" image="/imgs/pizza_rucula.jpg" desc="Uma pizza que combina muçarela com folhas frescas de rúcula." />
				<Produto nome="Pizza Quatro Queijos" image="/imgs/pizza_quatro_queijos.jpeg" desc="Pizza com quatro queijos derretidos juntos com molho de tomate." />
				<Produto nome="Pizza Calabresa" image="/imgs/pizza_calabresa.jpg" desc="Uma pizza com calabresa, queijo e cebola." />
			</div>
		</section>
	);
}

export default Help;
