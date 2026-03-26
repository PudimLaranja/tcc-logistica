import { useState, type ComponentPropsWithRef, type ReactNode } from "react";

interface TableProps extends ComponentPropsWithRef<"table"> {
	cols?: Array<string>; // Added "?" to make it optional
	rows?: Array<string>;
	data: Array<Array<string | number | ReactNode>>;
}

function Table({
	cols = [],
	rows = [],
	data = [],
	className = "",
	...props
}: TableProps): ReactNode {
	const [clicked, setClicked] = useState(false);

	function toggleClicked() {
		setClicked(!clicked);
	}

	function unclick() {
		setClicked(false);
	}

	const padding = `px-1 py-3`;

	return (
		<div
			className={`overflow-hidden rounded-2xl   shadow-2xl m-4 ${className} hover:cursor-pointer transition-all
          ${!clicked ? "border-gray-200 border-5" : "scale-150 -translate-x-1/4 z-10000 absolute border-black/50 border-[20rem] w-9/10 left-1/4"}
            `}
			style={{}}
			onClick={toggleClicked}
			onMouseLeave={unclick}
		>
			<table
				className={`min-w-full divide-y divide-gray-200 bg-black text-sm table-auto`}
				{...props}
			>
				{cols.length > 0 && (
					<thead className="bg-terciaria">
						<tr>
							{cols.map((value, idx) => (
								<th
									key={idx}
									scope="col"
									className={`${padding} font-semibold text-white text-center`}
								>
									{value}
								</th>
							))}
						</tr>
					</thead>
				)}
				<tbody className="divide-y divide-gray-200">
					{data.map((row, rowIdx) => (
						<tr
							key={rowIdx}
							className={`${rowIdx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} transition-colors`}
						>
							{/* Row Headers (Y-Axis) */}
							{rows.length > rowIdx && (
								<td
									className={`${padding} font-bold text-center text-black ${rowIdx % 2 === 0 ? "bg-gray-300" : "bg-gray-400"}`}
								>
									{rows[rowIdx]}
								</td>
							)}

							{/* Data Cells */}
							{row.map((value, cellIdx) => (
								<td
									key={cellIdx}
									className={`text-gray-100 text-center ${padding}`}
								>
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
