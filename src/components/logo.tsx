import type { ComponentPropsWithRef } from "react";
import { main_endpoint } from "../global";

const Logo = ({
	className = 'size-16',
	src = `/${main_endpoint}/imgs/logo.jpg`,
	alt = "Logo da pizzaria",
	...props
}: ComponentPropsWithRef<'img'>) => {
	return (
		<img 
			src={src} 
			alt={alt}
			className={`
				block 
				rounded-4xl
				${className}

`}
			{...props}
		/>

		);
}

			export default Logo;
