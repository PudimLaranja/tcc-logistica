import type { ComponentPropsWithRef, ReactNode } from "react";
import Box from "../../components/box";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { main_endpoint, url } from "../../global";
import React from "react";

interface CreditoProps {
	children?: ReactNode;
	image?: string;
	nome?: string;
	flip?: boolean;
}

function Credito({
	children = <>Algum texto aqui que os cara vai ter que me falar depois</>,
	image = "/imgs/missing.jpeg",
	nome = "Default",
	flip = false,
}: CreditoProps): ReactNode {
	return (
		<div
			className={`
				flex	
				${flip ? "flex-row-reverse" : "flex-row"}
		`}
		>
			<div
				style={{ backgroundImage: url(image), zIndex: 10 }}
				className={`
				size-60 
				rounded-full 
				bg-cover 
				shadow-xl 
				shadow-black
				border-white
				border-3
		`}
			></div>
			<Box
				className={`
				${flip ? "-mr-16" : "-ml-16"}
				w-10/12
				bg-terciaria
				flex
				justify-end
			`}
				style={{ zIndex: 0 }}
			>
				<div className="w-11/12">
					<h1 className="text-4xl font-bold">{nome}</h1>
					<p className="text-xl ml-4">{children}</p>
				</div>
			</Box>
		</div>
	);
}

interface FliperProps extends ComponentPropsWithRef<"div"> {
	children?: ReactNode;
}

function Fliper({ children = <></>, ...props }: FliperProps): ReactNode {
	return (
		<div {...props}>
			{React.Children.map(children, (child: ReactNode, idx: number) => {
				if (React.isValidElement(child)) {
					const shouldFlip = idx % 2 !== 0;

					return React.cloneElement(child as React.ReactElement<CreditoProps>, {
						flip: shouldFlip,
					});
				}
				return child;
			})}
		</div>
	);
}

function Sobre(): ReactNode {
	return (
		<div
			className={`
		text-white
	`}
		>
			<Header pagina="sobre" />
			<Box>
				<h1 className="w-full text-center text-6xl font-extrabold">
					Sobre Nós
				</h1>

				<div className="flex *:w-full -mt-10">
					<Box className="bg-secundaria" style={{ zIndex: 10 }}>
						<h1 className="text-2xl bg-terciaria font-bold">Nossa hístoria</h1>
						<p className="pt-0 mt-0">
							A Pizzaria "Papa's Pizzaria" foi fundada dos sonhos de quatro
							associados com o objetivo de fornecer pizza de qualidade para o
							povo. Nossa pizzaria é um lugar para todos poderem desfrutar de
							nossos produtos por preços acessíveis ao consumidor. Fundada em
							2022 começando com uma dark store no ifood onde as pizzas eram
							preparadas nas casas dos fundadores, hoje ela é um
							estabelecimentos completo equipado com os melhores equipamentos do
							mercado. Além disso conta com o método de produção rápido,
							inventado pelo mcDonalds em 1948, garantido produtos de qualidade
							na sua mesa ou porta tudo em menos de 30 segundo até o delivery.
						</p>
					</Box>
					<img
						className="border-white border-3 -ml-30 mt-10"
						style={{ zIndex: 0 }}
						src={`/${main_endpoint}/imgs/fachada.jpg`}
						alt=""
					/>
				</div>

				<h1 className="text-4xl font-bold w-full text-center">
					Conheça o time!
				</h1>

				<Fliper>
					<Credito nome="João Felipe" image="/imgs/joao.jpeg">
						Programador e game dev amador. Atualment estudando logistica no
						Senai para trabalhar para a embraer
					</Credito>
					<Credito nome="Felipe Martins"></Credito>
					<Credito nome="Lucas" image="/imgs/lucas.jpeg"></Credito>
					<Credito nome="Paulo" image="/imgs/paulo.jpeg"></Credito>
					<Credito nome="Felipe Marques"></Credito>
				</Fliper>
			</Box>
			<Footer />
		</div>
	);
}

export default Sobre;
