import type { ReactNode } from "react";
import { Message } from "../../components/message";
import Highlight from "../../components/highlight";

function Apresentacao(): ReactNode {
	return (
		<div>
			<Message user={0} className="flex">
				<h1>Okay pessoal o que vocês acham desse pedido?</h1>
			</Message>
			<Message user={2}>
				<h1>
					Talvez conseguamos mas temos que fazer algumas perguntas primeiro.
				</h1>
			</Message>
			<Message user={3}>
				Verdade, vai ser difícil conseguir entregar todas as pizzas quentes a
				tempo visto que:
				<br />
				<br />
				-Nossa capacidade para pizzas e ingredientes é de apenas{" "}
				<Highlight>200 Pizzas por dia</Highlight>
				<br />
				-Temos como colaboradores apenas:{" "}
				<Highlight> 1 Caixa, 2 Pizzaiolos e 2 atendentes.</Highlight>
				<br />
				<br />
				Más acredito que com um bom planejamento e o poder da{" "}
				<Highlight>Logística</Highlight> podemos conseguir!
			</Message>
			<Message user={4}>
				Eu tenho uma <Highlight>ideia</Highlight> sobre como podemos conseguir
				realizar esse pedido mas precisarei perguntar algumas coisas para o
				cliente.
			</Message>

			<Message user={3}>Fique a vontade.</Message>
			<Message user={1}>Beleza.</Message>
			<Message user={0}>Pode perguntar.</Message>

			<Message user={4} isPublic>
				Carlos carvalho, você poderia nos informar se o estabelecimento conta
				com cozinha e um armazém para os ingredientes?
			</Message>

			<Message user={5} isPublic>
				O estabelecimento conta com uma cozinha simples, e um galpão para
				guardar as pizzas.
				<br />
				porem a cozinha tem apenas fogões a gas e eu gostaria de pizzas assadas
				em <Highlight>Fogão a lenha.</Highlight>
			</Message>
			<Message user={4} isPublic>
				E o senhor alugou o espaço a partir de qual horário?
			</Message>

			<Message user={5} isPublic>
				Eu vou ter acesso ao estabelecimento a partir das 9:00h.
			</Message>
			<Message user={4} isPublic>
				Certo só um momento estamos discutindo seu pedido.
			</Message>

			<Message user={4}>
				Okay time eu tenho um plano me digam o que vocês acham.
			</Message>
			<Message user={4}>
				Nos não temos espaço suficiente para comportar todas as pizzas para o
				cliente aqui.
				<br />
				Porém{" "}
				<Highlight>
					o cliente alugou um espaço que já comporta todas as pizzas
				</Highlight>
				.
			</Message>
			<Message user={2}>
				Então podemos usar o espaço para preparar as pizzas?
			</Message>
			<Message user={4}>Exato!</Message>
			<Message user={0}>
				Mas o cliente especificou que quer pizzas assadas no fogão a lenha e não
				temos esses tipos de fogão no lugar.
			</Message>
			<Message user={1}>
				Nós podemos alugar os equipamentos necessários para isso e leva-los para
				lá.
			</Message>
			<Message user={3}>
				E pedir uma entrega especial para os nossos fornecedores para o endereço
				do salão de festas.
			</Message>
			<Message user={0}>
				Soa ótimo mas...
				<br />
				Quanto fica tudo isso?
			</Message>
			<Message user={4}>É uma ótima pergunta vamos ver.</Message>
		</div>
	);
}

export default Apresentacao;

