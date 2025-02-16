import { FunctionComponent } from 'react';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const SalesTable: FunctionComponent<{headers: string[], salesData: SalesData[]}> = ({headers, salesData}) => {

    return (<table className="w-full border-collapse border border-white-300 mb-4 bg-white">
        <thead>
          <tr className="bg-white">
            {headers.map((header, index) => (
              <th key={index} className="border border-grey-300 p-2 text-left text-black opacity-55 uppercase">{header}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {salesData.map((sale, index) => (
                <tr key={index} className="border border-gray-300 p-2">
                    <td className="p-2 border border-gray-300 text-black opacity-50">{sale.weekEnding}</td>
                    <td className="p-2 border border-gray-300 text-black opacity-50">{sale.retailSales}</td>
                    <td className="p-2 border border-gray-300 text-black opacity-50">{sale.wholesaleSales}</td>
                    <td className="p-2 border border-gray-300 text-black opacity-50">{sale.unitsSold}</td>
                    <td className="p-2 border border-gray-300 text-black opacity-50">{sale.retailerMargin}</td>
                </tr>
            ))}
        </tbody>
    </table>)
}

export default SalesTable;