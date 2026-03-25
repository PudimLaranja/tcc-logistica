import type { ComponentPropsWithRef, ReactNode } from "react";


interface TableProps extends ComponentPropsWithRef<"table"> {
    cols?: Array<string>; // Added "?" to make it optional
    rows?: Array<string>;
    data: Array<Array<string|number|ReactNode>>;
}

function Table({ cols = [], rows = [], data = [], className = "", ...props }: TableProps): ReactNode {

    return (
        <div className={`overflow-hidden rounded-4xl border-5 border-gray-200 shadow-2xl m-4 ${className}`}>
            <table className={`min-w-full divide-y divide-gray-200 bg-black text-xl`} {...props}>
                {cols.length > 0 && (
                    <thead className="bg-terciaria">
                        <tr>
                            {/* Empty header cell only if side-rows exist */}
                            {rows.length > 0 && <th className="px-4 py-3"></th>}
                            
                            {cols.map((value, idx) => (
                                <th 
                                    key={idx} 
                                    scope="col" 
                                    className="px-4 py-3 font-semibold text-white text-center"
                                >
                                    {value}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, rowIdx) => (
                        <tr key={rowIdx} className={`${rowIdx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} transition-colors`}>
                            {/* Row Headers (Y-Axis) */}
                            {rows.length > rowIdx && (
                                <td className={`whitespace-nowrap px-4 py-3 font-bold text-center text-black ${rowIdx % 2 === 0 ? "bg-gray-300" : "bg-gray-400"}`}>
                                    {rows[rowIdx]}
                                </td>
                            )}
                            
                            {/* Data Cells */}
                            {row.map((value, cellIdx) => (
                                <td key={cellIdx} className="whitespace-nowrap px-4 py-3 text-gray-100 text-center">
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
