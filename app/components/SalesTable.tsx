
interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const SalesTable = ({headers, salesData}) => {

    return (<table className="w-full border-collapse border border-white-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header, index) => (
              <th key={index} className="border border-white-300 p-2 text-left">{header}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {salesData.map((sale, index) => (
                <tr key={index} className="border border-gray-300 p-2">
                    <td className="p-2 border">{sale.weekEnding}</td>
                    <td className="p-2 border">{sale.retailSales}</td>
                    <td className="p-2 border border-gray-300">{sale.wholesaleSales}</td>
                    <td className="p-2 border border-gray-300">{sale.unitsSold}</td>
                    <td className="p-2 border border-gray-300">{sale.retailerMargin}</td>
                </tr>
            ))}
        </tbody>
    </table>)
}

export default SalesTable;