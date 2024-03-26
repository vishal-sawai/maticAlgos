import React from 'react';

const DataTable = ({ data }) => {
    return (
        <table className="min-w-full table-auto divide-gray-200 mt-10 rounded-t-lg">
            <thead className="bg-red-500 rounded-t-lg">
                <tr className='rounded-t-lg'>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r border-gray-200 text-white text-center rounded-tl-lg">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r border-gray-200 text-white text-center">PnL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 text-white text-center rounded-tr-lg">Cumulative Sum</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border">
                {data.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                        <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">{item.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">{item.pnl}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.cumsum}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;