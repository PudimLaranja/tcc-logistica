import type { ReactNode } from "react";

const main_endpoint = "tcc-logistica";

function url(url: string): string {
	return `url(/${main_endpoint}/${url})`;
}

interface IngredienteType {
	nome: string;
	preco?: number;
}

function Ingrediente(nome: string, preco: number = 0): IngredienteType {
	return {
		nome: nome,
		preco: preco,
	};
}

const PrecosIngredientes: Array<IngredienteType> = [
	Ingrediente("farinha", 5.0), // kg (Farinha Nita/Renata)
	Ingrediente("fermento", 48.0), // kg (Equivalente a 10 potes de 100g)
	Ingrediente("açúcar", 4.2), // kg
	Ingrediente("sal", 2.5), // kg
	Ingrediente("azeite", 63.8), // Litro (Base: R$ 31,90 por 500ml)
	Ingrediente("queijo mozzarella", 41.9), // kg (Peça no Tenda Atacado)
	Ingrediente("queijo provolone", 75.0), // kg
	Ingrediente("queijo gorgonzola", 110.0), // kg (Gorgonzola)
	Ingrediente("queijo parmesão", 95.0), // kg
	Ingrediente("tomate cereja", 32.0), // kg (Base: R$ 8,00 a bandeja de 250g)
	Ingrediente("tomate", 9.49), // kg (Tomate Italiano no Shibata)
	Ingrediente("manjericão", 3.5), // un (Preço por maço)
	Ingrediente("fubá", 4.0), // kg
	Ingrediente("óleo", 7.22), // Litro (Base: R$ 6,50 por 900ml)
	Ingrediente("presunto", 28.0), // kg
	Ingrediente("ovo", 0.76), // un (Cartela c/ 30 por R$ 22,90)
	Ingrediente("cebola", 5.8), // kg
	Ingrediente("azeitona", 40.0), // kg (Drenado/Sem caroço)
	Ingrediente("orégano", 112.5), // kg (Base: R$ 4,50 o pacote de 40g)
	Ingrediente("alho", 35.0), // kg
	Ingrediente("pimenta", 1.5), // un (Dedo de moça unidade)
	Ingrediente("rúcula", 4.0), // un (Preço por maço)
	Ingrediente("calabresa", 27.5), // kg (Sadia/Perdigão)
	Ingrediente("lenha", 3.0), // kg (Base: R$ 30,00 o saco de 10kg)];
];
//

interface IngredientLookUpType {
	nome: string;
	quantidade?: number;
}

function IngredientLookUp(
	nome: string,
	quantidade: number = 0,
): IngredientLookUpType {
	return {
		nome: nome,
		quantidade: quantidade,
	};
}

function calculatePrecos(ingredientes: Array<IngredientLookUpType>): number {
	return ingredientes.reduce((acc, curr) => {
		const ing = PrecosIngredientes.find((v) => v.nome === curr.nome);
		const valorAdicional =
			ing?.preco && curr.quantidade ? ing.preco * curr.quantidade : 0;
		return acc + valorAdicional;
	}, 0);
}

// --- DEFINIÇÃO DA MASSA PADRÃO (Baseada na receita da Rita Lobo) ---
// Rende 1 disco de pizza grande
const MassaPadrao: Array<IngredientLookUpType> = [
	IngredientLookUp("farinha", 0.21), // 210g
	IngredientLookUp("fermento", 0.005), // 5g (biológico seco)
	IngredientLookUp("açúcar", 0.003), // 3g
	IngredientLookUp("sal", 0.002), // 2g
	IngredientLookUp("azeite", 0.015), // 15ml
	IngredientLookUp("fubá", 0.01), // 10g (para abrir a massa)
	IngredientLookUp("lenha", 2.0), // 2kg de lenha por pizza (estimativa de consumo/aquecimento)];
];

const Pizzas = {
	// --- MOZZARELLA ---
	mozzarella: [
		...MassaPadrao,
		IngredientLookUp("queijo mozzarella", 0.15),
		IngredientLookUp("tomate cereja", 0.09),
		IngredientLookUp("tomate", 0.06), // Molho
		IngredientLookUp("orégano", 0.002), // 20% do maço
	],

	// --- PORTUGUESA ---
	portuguesa: [
		...MassaPadrao,
		IngredientLookUp("queijo mozzarella", 0.15),
		IngredientLookUp("presunto", 0.05),
		IngredientLookUp("tomate", 0.15), // Rodelas + Molho
		IngredientLookUp("ovo", 1),
		IngredientLookUp("cebola", 0.05),
		IngredientLookUp("azeitona", 0.02),
		IngredientLookUp("orégano", 0.002),
	],

	// --- RÚCULA ---
	rucula: [
		...MassaPadrao,
		IngredientLookUp("queijo mozzarella", 0.2),
		IngredientLookUp("tomate", 0.1), // Molho
		IngredientLookUp("alho", 0.01),
		IngredientLookUp("rúcula", 0.33), // 1/3 do maço
		IngredientLookUp("azeitona", 0.02),
		IngredientLookUp("orégano", 0.002),
	],

	// --- QUATRO QUEIJOS ---
	quatro_queijos: [
		...MassaPadrao,
		IngredientLookUp("tomate", 0.08), // Molho
		IngredientLookUp("queijo mozzarella", 0.1),
		IngredientLookUp("queijo provolone", 0.05),
		IngredientLookUp("queijo gorgonzola", 0.03),
		IngredientLookUp("queijo parmesão", 0.04),
		IngredientLookUp("orégano", 0.002),
	],

	// --- CALABRESA ---
	calabresa: [
		...MassaPadrao,
		IngredientLookUp("tomate", 0.1), // Molho
		IngredientLookUp("calabresa", 0.15),
		IngredientLookUp("cebola", 0.08),
		IngredientLookUp("azeitona", 0.02),
		IngredientLookUp("orégano", 0.002),
	],
};

const mao_de_obra = 8.5;
const lucro = 15;
const desconto = 7.21;


const add_to_preco = mao_de_obra + lucro;

const PrecosBrutos = {
	mozzarella: calculatePrecos(Pizzas.mozzarella),
	portuguesa: calculatePrecos(Pizzas.portuguesa),
	rucula: calculatePrecos(Pizzas.rucula),
	quatro_queijos: calculatePrecos(Pizzas.quatro_queijos),
	calabresa: calculatePrecos(Pizzas.calabresa),

	sum(): number {
		let total = 0;

		for (const valor of Object.values(this)) {
			if (typeof valor === "number") {
				total += valor * 100;
			}
		}

		return total;
	},
};

const PrecosComMaoDeObra = {
	mozzarella: calculatePrecos(Pizzas.mozzarella) + mao_de_obra,
	portuguesa: calculatePrecos(Pizzas.portuguesa) + mao_de_obra,
	rucula: calculatePrecos(Pizzas.rucula) + mao_de_obra,
	quatro_queijos: calculatePrecos(Pizzas.quatro_queijos) + mao_de_obra,
	calabresa: calculatePrecos(Pizzas.calabresa) + mao_de_obra,

	sum(): number {
		let total = 0;

		for (const valor of Object.values(this)) {
			if (typeof valor === "number") {
				total += valor * 100;
			}
		}

		return total;
	},
};

const Precos = {
	mozzarella: PrecosBrutos.mozzarella + add_to_preco,
	portuguesa: PrecosBrutos.portuguesa + add_to_preco,
	rucula: PrecosBrutos.rucula + add_to_preco,
	quatro_queijos: PrecosBrutos.quatro_queijos + add_to_preco,
	calabresa: PrecosBrutos.calabresa + add_to_preco,

	getf(preco: number): string {
		return preco.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	},
	sum(): number {
		let total = 0;

		for (const valor of Object.values(this)) {
			if (typeof valor === "number") {
				total += valor * 100;
			}
		}

		return total;
	},
};
const PrecosComDesconto = {
	sum(): number {
		let total = 0;

		for (const valor of Object.values(Precos)) {
			if (typeof valor === "number") {
				total += (valor - desconto) * 100;
			}
		}

		return total;
	},
};

interface TableProps {
	cols: Array<string>;
	rows: Array<string>;
	data: Array<Array<string | number | ReactNode>>;
}

function getIngredient(
	lookUp: IngredientLookUpType,
): IngredienteType | undefined {
	return PrecosIngredientes.find(
		(ingredient: IngredienteType) => ingredient?.nome === lookUp.nome,
	);
}

const preco_fogao = 6290; //R$
//fogao:https://www.lojametavila.com.br/produto/forno-de-pizza-a-lenha-garden-napoli-810ex-grande-preto-150218

const preco_mesa = 550;
//mesa:https://www.mercadolivre.com.br/mesa-de-servico-total-inox-70x70-reforcada-suporta-100kg/up/MLBU3198257676

const preco_aluguel_mesa = preco_mesa * 0.04;

const aluguel_fogao = preco_fogao * 0.04; //4%

const aluguel_caminao = 1200;

const mesas_necessarias =
	2 + //estação de descongelamento
	2 + //estação de montagem
	3 + //estão de cozinhamento
	1; //estação de expedição

const fogoes_necessarios = 3;

const aluguel_total =
	fogoes_necessarios * aluguel_fogao +
	preco_aluguel_mesa * mesas_necessarias +
	aluguel_caminao;

const preco_semlucro = PrecosComMaoDeObra.sum() + aluguel_total;

const preco_total = PrecosComDesconto.sum() + aluguel_total;


export {
	url,
	main_endpoint,
	Precos,
	PrecosComMaoDeObra,
	PrecosBrutos,
	PrecosComDesconto,
	Pizzas,
	getIngredient,
	type TableProps,
	type IngredientLookUpType,
	type IngredienteType,
	mao_de_obra,
	lucro,
	desconto,
	aluguel_total,
	preco_fogao,
	aluguel_fogao,
	aluguel_caminao,
	preco_aluguel_mesa,
	fogoes_necessarios,
	mesas_necessarias,
	preco_total,
	preco_semlucro
};
