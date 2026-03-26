import type { ReactNode } from "react";
import { Message} from "../../components/message";
import Table from "../../components/table";
import {aluguel_caminao, aluguel_fogao, aluguel_total, desconto, fogoes_necessarios, lucro, mao_de_obra, mesas_necessarias, Pizzas, preco_aluguel_mesa, preco_fogao, preco_semlucro, preco_total, Precos,  PrecosComDesconto} from "../../global";
import { getPizzasRawPriceTable,getPizzasFullPriceTable,getIngredientesTable, getPizzasDescountTable, getPizzasCountPricesTable } from "../../scripts/table_generators";
import Highlight from "../../components/highlight";

function Calculos(): ReactNode {
	const Mozzarella = getIngredientesTable(Pizzas.mozzarella);
	const Portuguesa = getIngredientesTable(Pizzas.portuguesa);
	const Rucula = getIngredientesTable(Pizzas.rucula);
	const QuatroQueijos = getIngredientesTable(Pizzas.quatro_queijos);
	const Calabresa = getIngredientesTable(Pizzas.calabresa);

	const pizzasNomes = [
		"Mozzarella",
		"Portuguesa",
		"Rúcula",
		"Quatro queijos",
		"Calabresa",
	];	
	const pizzasRawPrices = getPizzasRawPriceTable();
	const pizzaFullPrices = getPizzasFullPriceTable();
	return (
		<div>
			<br />
			<Message user={4}>
				Bom primeiro vamos considerar o preço de nossas pizzas:
				<div className="flex justify-center w-full">
					<Table
						className="min-w-90 w-1/2"
						rows={pizzasNomes}
						data={[
							[Precos.getf(Precos.mozzarella)],
							[Precos.getf(Precos.portuguesa)],
							[Precos.getf(Precos.rucula)],
							[Precos.getf(Precos.quatro_queijos)],
							[Precos.getf(Precos.calabresa)],
						]}
					/>
				</div>
				Cada pizza além de seus valores iniciais (Mão de obra <b>{mao_de_obra.toFixed(2)}R$</b> e
				margem de lucro <b>{lucro.toFixed(2)}R$</b>) elas tem os{" "}
				<Highlight>valores dos seus ingredientes:</Highlight>
				<div className="grid grid-cols-1 xl:grid-cols-2 mt-10 *:bg-secundaria *:p-1 *:rounded-2xl gap-3   *:min-w-10 *:w-[95%]">
					<div>
						<h1>Mozzarella</h1>
						{Mozzarella}
					</div>
					<div>
						<h1>Portuguesa</h1>
						{Portuguesa}
					</div>
					<div>
						<h1>Rúcula</h1>
						{Rucula}
					</div>
					<div>
						<h1>Quatro queijos</h1>
						{QuatroQueijos}
					</div>
					<div>
						<h1>Calabresa</h1>
						{Calabresa}
					</div>
				</div>
			</Message>
			<Message user={4}>
				Com isso conseguimos os valores brutos de cada pizza que seria as somas
				dos ingredientes.
				{pizzasRawPrices}
			</Message>
			<Message user={4}>
				E adicionando a mão de obra e a margem de lucro temos o preço total das pizzas:
				{pizzaFullPrices}
			</Message>
			<Message user={0}>
				Como a encomenda é bem grande podemos diminuir a margem de lucro de <b>{Precos.getf(lucro)}</b> 
				<b> </b>para <b>{Precos.getf(lucro - desconto)}</b>, aplicando logística de escala com a intenção de tornar a oferta mais atraente!<br/> 
				Os preços ficariam assim:
				{getPizzasDescountTable()}
			</Message>
			<Message user={4}>Okay podemos fazer isso.</Message>
			<Message user={2}>E quanto fica a questão de alugar o equipamento?</Message>
			<Message user={1}>Deixo dar uma olhada</Message>
			<Message user={1}>
				Okay gente acredito que se planejarmos corretamente o processo podemos usar esse fogão <a 
					href="https://www.lojametavila.com.br/produto/forno-de-pizza-a-lenha-garden-napoli-810ex-grande-preto-150218"
					className="text-blue-400"
				><u>aqui.</u></a>
				<div className="p-6 w-full flex justify-center bg-secundaria rounded-4xl *:rounded-4xl mt-4">
					<img className="size-1/2"
				src="https://churraqueirametavila.fbitsstatic.net/img/p/forno-de-pizza-a-lenha-garden-napoli-810ex-grande-preto-150218/336734.jpg?v=202602100914" 
				alt="Fogão a lenha portátil"
				/>
				</div>
			</Message>
			<Message user={1}>
				Esse fogão custa <Highlight>{Precos.getf(preco_fogao)}</Highlight>.<br/>
				Mas podemos alugá-lo por <Highlight>{Precos.getf(aluguel_fogao)}</Highlight> a unidade.<br/>
			</Message>
			<Message user={1}>
				Eu também conversei com os nossos cozinheiros e eles disseram que conseguem facilmente fazer <Highlight>40 pizzas por hora.</Highlight><br/>
				Então se vamos ter um tempo de 5 horas de preparo, mas vamos ter <Highlight>5 horas</Highlight> de evento para <Highlight>500</Highlight> pizas
				precisamos fazer <Highlight>100 pizzas por hora</Highlight>, então se com <Highlight>1</Highlight> desse forno conseguimos 
				fazer <Highlight>40 pizzas por hora,</Highlight>
				com <Highlight>3</Highlight> dessas unidades conseguimos fazer <Highlight>120 por hora</Highlight>. O que é perfeito considerando possíveis atrasos.
			</Message>
			<Highlight></Highlight>
			<Message user={1}>E o aluguel desses três fornos fica <Highlight>{Precos.getf(aluguel_fogao * 3)}.</Highlight></Message>


			<Message user={3}>O preço é bem elevado mas levando em conta a velocidade para fazer pizzas com esses fornos vale a pena.</Message>
			<Message user={2}>
				Também vamos precisar de mesas para conseguir ter espaço para: montar as pizzas, deixar as massas para descongelar e apoiar os fornos.
			</Message>
			<Message user={2}>
				Acho que esse tipo de mesa deve ser o ideal: <a className="text-blue-400"
					href="https://www.mercadolivre.com.br/mesa-de-servico-total-inox-70x70-reforcada-suporta-100kg/up/MLBU3198257676"
				><u>link</u></a>
				<div className="p-6 bg-secundaria flex justify-center rounded-4xl my-4">
					<img className="size-1/2 rounded-4xl" 
						src="https://http2.mlstatic.com/D_NQ_NP_2X_915328-MLB92971178381_092025-F.webp" 
						alt="Mesa de aço inox"
					/>
				</div>
				Ela é uma mesa propiá para cozinha, é resistente ao calor e é pequena o suficiente para transportar com caminhão.
			</Message>
			<Message user={0}>Caminhão?</Message>
			<Message user={2}>
				Sim o melhor jeito de transportar tanto quanto as mesas, tanto quanto os fogões é de caminhão.<br/>
				Além disso se alugarmos um caminhão poderemos buscar os equipamentos alugados nós mesmos e evitar frete de entrega dos equipamentos 
				e devolução deles, pois podemos fazer tudo no mesmo dia com o mesmo caminhão.				
			</Message>
			<Message>Certo vamos precisar de 8 mesas;</Message>
			<Message user={2}>
				Ok então vai ficar:
				<Table 
					cols={["Equipamento","Preço aluguel","Quantidade necessaria","Preco total"]}
					rows={["Forno","Mesa","Caminhão","total"]}
					data={[
						[Precos.getf(aluguel_fogao),fogoes_necessarios,Precos.getf(aluguel_fogao * fogoes_necessarios)],
						[preco_aluguel_mesa,mesas_necessarias,Precos.getf(aluguel_fogao * fogoes_necessarios)],
						[Precos.getf(aluguel_caminao),1,Precos.getf(aluguel_caminao)],
						["n/a","n/a",<Highlight>{Precos.getf(aluguel_total)}</Highlight>]
					]}
				/>

			</Message>
			<Message user={0}>
				Perfeito agora se a gente pegar o valor das pizzas e multiplicar pela quantidade que é <Highlight>100 para cada</Highlight> vai ficar:
				{getPizzasCountPricesTable()}
			</Message>

			<Message user={0}>
				E juntando tudo teremos um valor total de <Highlight>{Precos.getf(PrecosComDesconto.sum() + aluguel_total)}</Highlight>
				{" "}para mandar para o cliente.<br/>
				Com <Highlight>{Precos.getf(preco_total - preco_semlucro)} de lucro.</Highlight><br/>
			</Message>
		</div>
	);
}

export default Calculos;
