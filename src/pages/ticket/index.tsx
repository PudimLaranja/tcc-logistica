import type { ReactNode } from "react";
import Box from "../../components/box";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import { Send } from "lucide-react";
import Apresentacao from "./apresentacao";
import Calculos from "./calculos";
import Estrategia from "./estrategia";


function MsgPrompt(): ReactNode {
	return (
		<Box className="sticky top-[80vh] left-0 z-10000">
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
					<MsgPrompt/>
					<div>
						<Apresentacao/>
						<Calculos/>
						<Estrategia/>
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
