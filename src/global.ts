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
    IngredientLookUp("farinha", 0.210),   // 210g
    IngredientLookUp("fermento", 0.005),  // 5g (biológico seco)
    IngredientLookUp("açúcar", 0.003),    // 3g
    IngredientLookUp("sal", 0.002),       // 2g
    IngredientLookUp("azeite", 0.015),    // 15ml
    IngredientLookUp("fubá", 0.010),      // 10g (para abrir a massa)
];

const Pizzas = {
    // --- MOZZARELLA ---
    mozzarella: [
        ...MassaPadrao,
        IngredientLookUp("queijo mozzarella", 0.150),
        IngredientLookUp("tomate cereja", 0.090),
        IngredientLookUp("tomate", 0.060), // Molho
        IngredientLookUp("orégano", 0.002), // 20% do maço
    ],

    // --- PORTUGUESA ---
    portuguesa: [
        ...MassaPadrao,
        IngredientLookUp("queijo mozzarella", 0.150),
        IngredientLookUp("presunto", 0.050),
        IngredientLookUp("tomate", 0.150), // Rodelas + Molho
        IngredientLookUp("ovo", 1),
        IngredientLookUp("cebola", 0.050),
        IngredientLookUp("azeitona", 0.020),
        IngredientLookUp("orégano", 0.002)
    ],

    // --- RÚCULA ---
    rucula: [
        ...MassaPadrao,
        IngredientLookUp("queijo mozzarella", 0.200),
        IngredientLookUp("tomate", 0.100), // Molho
        IngredientLookUp("alho", 0.010),
        IngredientLookUp("rúcula", 0.33), // 1/3 do maço
        IngredientLookUp("azeitona", 0.020),
        IngredientLookUp("orégano", 0.002)
    ],

    // --- QUATRO QUEIJOS ---
    quatro_queijos: [
        ...MassaPadrao,
        IngredientLookUp("tomate", 0.080), // Molho
        IngredientLookUp("queijo mozzarella", 0.100),
        IngredientLookUp("queijo provolone", 0.050),
        IngredientLookUp("queijo gorgonzola", 0.030),
        IngredientLookUp("queijo parmesão", 0.040),
        IngredientLookUp("orégano", 0.002)
    ],

    // --- CALABRESA ---
    calabresa: [
        ...MassaPadrao,
        IngredientLookUp("tomate", 0.100), // Molho
        IngredientLookUp("calabresa", 0.150),
        IngredientLookUp("cebola", 0.080),
        IngredientLookUp("azeitona", 0.020),
        IngredientLookUp("orégano", 0.002)
    ],

}

const mao_de_obra = 10;
const lucro = 10;

const add_to_preco = mao_de_obra + lucro;

const Precos = {
    mozzarella: calculatePrecos(Pizzas.mozzarella) + add_to_preco,
    portuguesa: calculatePrecos(Pizzas.portuguesa) + add_to_preco,
    rucula: calculatePrecos(Pizzas.rucula) + add_to_preco,
    quatro_queijos: calculatePrecos(Pizzas.quatro_queijos) + add_to_preco,
    calabresa: calculatePrecos(Pizzas.calabresa) + add_to_preco,

    getf: (preco: number) => {
        return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
};


const PizzasNames: Array<string> = [
	"Mozzarella",
	"Portuguesa",
	"Rúcula",
	"Quatro queijos",
	"Calabresa",
];

export { url, main_endpoint, Precos, Pizzas, PizzasNames};
