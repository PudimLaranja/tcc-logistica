import type { PropsWithChildren, ReactNode } from "react";

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

export default Highlight;
