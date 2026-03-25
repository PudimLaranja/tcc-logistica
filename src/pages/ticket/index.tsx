import type { ReactNode, PropsWithChildren } from "react";
import Box from "../../components/box";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Message, MsgImg } from "../../components/message";
import { Send } from "lucide-react";
import { Precos } from "../../global";
import Table from "../../components/table";

function MsgPrompt(): ReactNode {
	return (
		<Box className="sticky top-[80vh] left-0">
			<div className="flex g-3 w-full gap-5">
				<div className="bg-secundaria w-full p-3 rounded-full">
					<textarea
						className="ml-3 w-[98%]"
						name="message"
						value=""
						rows={1}
						placeholder="Escreva sua mensagem aqui"
					/>
				</div>
				<button
					className={`
									flex 
									bg-contraste-2 
									p-3 
									size-14
									rounded-full 
									items-center 
									justify-center
							`}
				>
					<Send size={"2rem"} />
				</button>
			</div>
		</Box>
	);
}

function Highlight({ children = <></> }: PropsWithChildren): ReactNode {
	return (
		<b
			className="text-red-300 scale-105"
			style={{
				WebkitTextStrokeColor: "black",
				WebkitTextStrokeWidth: `5px`,
				paintOrder: "stroke fill",
			}}
		>
			{children}
		</b>
	);
}

function Ticket(): ReactNode {
	return (
		<div className="flex w-full min-h-screen">
			<Sidebar />
			<div className="flex w-full justify-end">
				<div className="w-full text-white mt-10 items-center">
					<Box className="flex flex-col gap-4">
						<h1 className="w-full font-extrabold text-center text-4xl">
							Ticket #34210
						</h1>
						<div className="flex bg-terciaria items-center gap-3">
							<img
								src="/tcc-logistica/imgs/missing.jpeg"
								className="size-10 rounded-full"
							/>
							<h1 className="text-2xl">Carlos Carvalho</h1>
						</div>
						<div>
							<div className="w-full bg-secundaria p-6 rounded-4xl">
								<p className="text-xl">
									Bom dia.
									<br />
									Me chamo Carlos sou cliente fiel da sua pizzaria e gosto muito
									dos seus produtos.
									<br />
									No próximo mês comemorarei meu aniversário, e gostaria de
									contratar seus serviços para fornecer Pizzas para minha festá
									dia 12 de março.
									<br />
									Precisarei de 500 pizzas para o evento sendo 100 pizas dos
									seguintes sabores:
									<br />
									<br />
									-Mozzarella
									<br />
									-Portuguesa
									<br />
									-Rúcula
									<br />
									-Quatro queijos
									<br />
									-Calabresa
									<br />
									<br />
									A festa terá duração de 5 horas começando as 20:00h, ela será
									feito no salão de festa (Kabouch).
									<br />
									Não se preocupe com servir as pizzas eu já contratei pessoas
									para isso.
									<br />
									<br />
									Obrigado.
								</p>
							</div>
						</div>
					</Box>
					<MsgPrompt />
					<div>
						<div className="hidden">
							<Message user={0}></Message>
						</div>
						<Message user={0} className="flex">
							<h1>Okay pessoal o que vocês acham desse pedido?</h1>
						</Message>
						<Message user={2}>
							<h1>
								Talvez conseguamos mas temos que fazer algumas perguntas
								primeiro.
							</h1>
						</Message>
						<Message user={3}>
							Verdade, vai ser difícil conseguir entregar todas as pizzas
							quentes a tempo visto que:
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
							Eu tenho uma <Highlight>ideia</Highlight> sobre como podemos
							conseguir realizar esse pedido mas precisarei perguntar algumas
							coisas para o cliente.
						</Message>

						<Message user={3}>Fique a vontade.</Message>
						<Message user={1}>Beleza.</Message>
						<Message user={0}>Pode perguntar.</Message>

						<Message user={4} isPublic>
							Carlos carvalho, você poderia nos informar se o estabelecimento
							conta com cozinha e um armazém para os ingredientes?
						</Message>

						<Message user={5} isPublic>
							O estabelecimento conta com uma cozinha simples, e um galpão para
							guardar as pizzas.
							<br />
							porem a cozinha tem apenas fogões a gas e eu gostaria de pizzas
							assadas em <Highlight>Fogão a lenha.</Highlight>
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
							Nos não temos espaço suficiente para comportar todas as pizzas
							para o cliente aqui.
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
							Mas o cliente especificou que quer pizzas assadas no fogão a lenha
							e não temos esses tipos de fogão no lugar.
						</Message>
						<Message user={1}>
							Nós podemos alugar os equipamentos necessários para isso e
							leva-los para lá.
						</Message>
						<Message user={3}>
							E pedir uma entrega especial para os nossos fornecedores para o
							endereço do salão de festas.
						</Message>
						<Message user={0}>
							Soa ótimo mas...
							<br />
							Quanto fica tudo isso?
						</Message>
						<Message user={4}>É uma ótima pergunta vamos ver.</Message>
						<Message user={4}>
							Bom primeiro vamos considerar o preço de nossas pizzas
							<Table
								className="w-3/10"
								rows={[
									"Mozzarella",
									"Portuguesa",
									"Rúcula",
									"Quatro queijos",
									"Calabresa",
								]}
								data={[
									[Precos.getf(Precos.mozzarella)],
									[Precos.getf(Precos.portuguesa)],
									[Precos.getf(Precos.rucula)],
									[Precos.getf(Precos.quatro_queijos)],
									[Precos.getf(Precos.calabresa)],
								]}
							/>
							Cada pizza além de seus valores iniciais tem o valor de seus ingredientes
						</Message>

						<Message user={0}></Message>
					</div>
					<br />
					<br />
					<br />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Ticket;
