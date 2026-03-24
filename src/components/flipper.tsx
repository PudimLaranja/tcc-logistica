import React, { type ComponentPropsWithRef, type ReactNode } from "react";

interface Flipable {
	flip?:boolean
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

					return React.cloneElement(child as React.ReactElement<Flipable>, {
						flip: shouldFlip,
					});
				}
				return child;
			})}
		</div>
	);
}

export default Fliper ;export type { Flipable };
