import type { ComponentPropsWithRef, ReactNode } from "react";
import { main_endpoint, url } from "../global";
import { Lock, LockOpen } from "lucide-react";


const Users = {
	JOAO:0,
	FELIPE_MARTINS:1,
	LUCAS:2,
	PAULO:3,
	FELIPE_MARQUES:4,
	CARLOS:5,
} as const;

type UserType = (typeof Users)[keyof typeof Users];

interface MessageProps extends ComponentPropsWithRef<"div"> {
	children?: ReactNode;
	user?: UserType;
	isPublic ?:boolean
}



function Message({ children = <h1>Message content</h1>, user = Users.JOAO, isPublic = false, ...props }: MessageProps): ReactNode {
	const currentUser: UserType = Users.JOAO;

	const image: string = (() => {switch (user) {
		case Users.JOAO: return "/joao.jpeg";
		case Users.LUCAS: return "/lucas.jpeg";
		case Users.PAULO: return "/paulo.jpeg";
		case Users.FELIPE_MARTINS: return "/felipem.jpeg";
		default: return "/missing.jpeg";
	}})();

	const name:string = (() => {switch (user){
		case Users.JOAO: return "João Felipe";
		case Users.LUCAS: return "Lucas";
		case Users.PAULO: return "Paulo";
		case Users.FELIPE_MARTINS: return "Felipe Martins";
		case Users.FELIPE_MARQUES: return "Felipe Marques";
		case Users.CARLOS:return "Carlos carvalho";
		default: return "";
	}})();

	return (
		<div
			{...props}
			className={`
				flex 
				p-3
				w-full 
				gap-5
				${user === currentUser ? "flex-row" : "flex-row-reverse"}
	`}
		>
			<div className="size-16 bg-red-500 rounded-4xl shadow-2xl shadow-black border-white border-3 bg-cover"
				style={{ backgroundImage: url(`/imgs/${image}`) }}
			/>
			<div className="bg-primaria w-full p-6 rounded-4xl border-2 border-white shadow-black shadow-2xl">
				<div>
					{!isPublic 
						? (<h1 className="text-xl p-2 font-extrabold text-contraste-2 flex">Privado<Lock/></h1>)
						: (<h1 className="text-xl p-2 font-extrabold text-contraste-3 flex">Público<LockOpen/></h1>)
					}
					<h1 className="bg-terciaria text-xl p-2 pl-3 rounded-full font-bold w-auto">{name}</h1> 
					<p className="p-2 pl-3 text-2xl">{children}</p>
				</div>
			</div>
		</div>
	);
}

function MsgImg({src="", ...props }: ComponentPropsWithRef<"img">): ReactNode {
	return (
		<div className="p-6 bg-terciaria my-3">
			<img src={`/${main_endpoint}/imgs/${src}`} {...props} />
		</div>
	);
}

export { Message, MsgImg, Users, type UserType };
