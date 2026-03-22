import type { CSSProperties } from "react";
import { url } from "../../global";

function Hero() {

	function textOutline(width:string):CSSProperties {
		return {
			WebkitTextStrokeColor: "black",
			WebkitTextStrokeWidth: width
		}
	}


	return (
		<section
			className={`
					flex
					w-full
					h-96
					bg-secundaria
					justify-between
					items-center
		`}
		>
			<div
				className="h-2/3 translate-x-10 z-1 *:mt-2"
				style={{
					textWrap: "nowrap",
				}}
			>
				<h1 style={(()=>{return textOutline("3px")})()} className="text-7xl font-extrabold">Pizza a lenha</h1>
				<h2 style={(()=>{return textOutline("2px")})()} className="ml-4 text-3xl font-extrabold">A melhor da região</h2>
				<button
					className={`
						bg-contraste-2
						p-3
						rounded-full
						ml-12
						font-bold
						hover:bg-contraste-3
						hover:text-black
						hover:scale-110
						hover:cursor-pointer
						transition-all
					`}
				>
					Saiba Mais
				</button>
			</div>
			<div
				style={{
					backgroundImage: url("/imgs/pizza2.jpg"),
					backgroundSize: "cover",
					height: "100%",
					width: "100%",
					marginLeft: "-200px",
					maskImage: "linear-gradient(to right, transparent 0%, black 150px)",
					borderRadius: "15px"
				}}
			></div>
		</section>
	);
}

export default Hero;
