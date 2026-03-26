import {
	Precos,
	getIngredient,
	type IngredientLookUpType,
	type IngredienteType,
	Pizzas,
	mao_de_obra,
	lucro,
    desconto,
    PrecosComDesconto
} from "../global";
import { type ReactNode } from "react";
import Table from "../components/table";
import Highlight from "../components/highlight";

function getIngredientesTable(pizza: Array<IngredientLookUpType>): ReactNode {
	const cols = ["Ingredientes", "Quantidade(gramas/unidade)", "Preço(R$)"];
	const rows = [];
	const data = [];

		let sum: number = 0;

	pizza.forEach((e) => {
		const ingr = getIngredient(e);
		if (ingr && ingr?.preco != null && e.quantidade != null) {
			sum += ingr.preco * e.quantidade;
			rows.push(ingr.nome);
			data.push([
				e.quantidade,
				Precos.getf(ingr.preco * e.quantidade),
			]);
		}
	});

	rows.push("Total");
	data.push(["n/a", Precos.getf(sum)]);

	return (<><Table cols={cols} rows={rows} data={data}/></>);
}

const PizzasNames: Array<string> = [
	"Mozzarella",
	"Portuguesa",
	"Rúcula",
	"Quatro queijos",
	"Calabresa",
];

const PizzasObjects: Array<Array<IngredienteType>> = [
	Pizzas.mozzarella,
	Pizzas.portuguesa,
	Pizzas.rucula,
	Pizzas.quatro_queijos,
	Pizzas.calabresa,
];

function getPizzasRawPriceTable(): ReactNode {
	const cols = ["Pizza", "Preço Bruto(R$)"];
	const rows = PizzasNames;
	const data: Array<Array<number | string | ReactNode>> = [];

	PizzasObjects.forEach((p: Array<IngredientLookUpType>) => {
		if (p) {
			const sum: number = p.reduce((sum, curr) => {
				if (curr) {
					const ingr = getIngredient(curr);
					if (ingr && ingr.preco && curr.quantidade) {
						return sum + ingr.preco * curr.quantidade;
					}
				}
				return 0;
			}, 0);
			data.push([Precos.getf(sum)]);
		}
	});

	
	return (<><Table cols={cols} rows={rows} data={data}/></>);

}
function getPizzasFullPriceTable(): ReactNode {
	const cols = [
		"Pizza",
		"Preço Bruto(R$)",
		"Mão de obra",
		"Margem de lucro",
		"Preço total(R$)",
	];
	const rows = PizzasNames;
	const data: Array<Array<number | string | ReactNode>> = [];

	PizzasObjects.forEach((p: Array<IngredientLookUpType>) => {
		if (p) {
			const sum: number = p.reduce((sum, curr) => {
				if (curr) {
					const ingr = getIngredient(curr);
					if (ingr && ingr.preco && curr.quantidade) {
						return sum + ingr.preco * curr.quantidade;
					}
				}
				return 0;
			}, 0);
			data.push([
				Precos.getf(sum),
				Precos.getf(mao_de_obra),
				Precos.getf(lucro),
				<Highlight>{Precos.getf(sum + mao_de_obra + lucro)}</Highlight>,
			]);
		}
	});

	
	return (<><Table cols={cols} rows={rows} data={data}/></>);

}
function getPizzasDescountTable(): ReactNode {
	const cols = [
		"Pizza",
		"Preço Bruto(R$)",
		"Mão de obra",
		"Margem de lucro",
		"Preço total(R$)",
		"Desconto(R$)",
		"Preço descontado(R$)"
	];
	const rows = PizzasNames;
	const data: Array<Array<number | string | ReactNode>> = [];

	PizzasObjects.forEach((p: Array<IngredientLookUpType>) => {
		if (p) {
			const sum: number = p.reduce((sum, curr) => {
				if (curr) {
					const ingr = getIngredient(curr);
					if (ingr && ingr.preco && curr.quantidade) {
						return sum + ingr.preco * curr.quantidade;
					}
				}
				return 0;
			}, 0);
			data.push([
				Precos.getf(sum),
				Precos.getf(mao_de_obra),
				Precos.getf(lucro),
				Precos.getf(sum + mao_de_obra + lucro),
				Precos.getf(desconto),
				<Highlight>{Precos.getf(sum + mao_de_obra + lucro - desconto)}</Highlight>
			]);
		}
	});

	
	return (<><Table cols={cols} rows={rows} data={data} /></>);

} 
function getPizzasCountPricesTable(): ReactNode {
	const cols = ["Pizzas","Quantidade","Preço unitario", "Preço unitario com desconto","Preço total"];
	const rows = PizzasNames; rows.push("total");
	const data: Array<Array<number | string | ReactNode>> = [];

	PizzasObjects.forEach((p: Array<IngredientLookUpType>) => {
		if (p) {
			const sum: number = p.reduce((sum, curr) => {
				if (curr) {
					const ingr = getIngredient(curr);
					if (ingr && ingr.preco && curr.quantidade) {
						return sum + ingr.preco * curr.quantidade;
					}
				}
				return 0;
			}, 0);
			data.push([
				100,
				Precos.getf(sum),
				Precos.getf(sum - desconto),
				Precos.getf((sum - desconto) * 100)
			]);
		}
	});

	data.push([
		500,
		"n/a",
		"n/a",
		<Highlight>{Precos.getf(PrecosComDesconto.sum())}</Highlight>
	]);


	
	return (<><Table
					cols={cols}
					rows={rows}
					data={data}
				/></>);

}

				
export {
	getIngredientesTable,
	getPizzasRawPriceTable,
	getPizzasFullPriceTable,
	getPizzasDescountTable,
	getPizzasCountPricesTable
};
