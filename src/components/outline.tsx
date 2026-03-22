import type { ReactElement, ReactNode } from "react";
import React from "react";

interface OutlineProps {
	children?: ReactNode;
	width?: number;
	color?: string;
}

function Outline({
	children = <></>,
	width = 10,
	color = "black",
}: OutlineProps): ReactNode {
	return (
		<>
			{children === null ? (
				<></>
			) : (
					React.Children.map(children, (child) => {
						if (React.isValidElement(child)) {
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							const element = child as ReactElement<any>;

							return React.cloneElement(element, {
								style: {
									WebkitTextStrokeColor: color,
									WebkitTextStrokeWidth: `${width}px`,
									paintOrder: "stroke fill",
								},
							});
						}

						return child;
					})
			)}
		</>
	);
}

export default Outline;
