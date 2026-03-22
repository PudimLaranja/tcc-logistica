import type { ComponentPropsWithRef, ReactNode } from "react";

interface Props extends ComponentPropsWithRef<'div'> {
	children?:ReactNode,
	bg_color?:string
};

const Box = ({
	children,
	className = "",
	bg_color = "bg-primaria",
	...props

}:Props) => {
	return <div
		className={
			`
				${bg_color}
				*:p-6
				m-5
				rounded-2xl
				border-white
				overflow-hidden
				border-2
				shadow-xl
				shadow-gray-950
			${className}
` 
		}
		{...props}
	>
		{children}
	</div>
}

export default Box;
