'use client'
import { Line } from 'react-chartjs-2';
import { FunctionComponent } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// This sales chart is aggregated by month

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const aggregateSalesByMonth = (salesData: SalesData[]) => {
  return salesData.reduce((acc, { weekEnding, retailSales, wholesaleSales }) => {
    const month = parseInt(weekEnding.substring(5, 7), 10) - 1; // Extract MM as zero-based index
    acc[month] = acc[month] || { retailSales: 0, wholesaleSales: 0 };
    acc[month].retailSales += retailSales;
    acc[month].wholesaleSales += wholesaleSales;
    return acc;
  }, {} as Record<number, { retailSales: number; wholesaleSales: number }>);
};

const monthNames = ["JAN", "FEB", "MAE", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const SalesChart : FunctionComponent<{ sales: SalesData[] }> = ({sales}) => {
 
  const aggregatedSales = aggregateSalesByMonth(sales);
  const labels = Object.keys(aggregatedSales).map(month => monthNames[Number(month)]);
  const retailSalesData = Object.values(aggregatedSales).map(sales => sales.retailSales);
  const wholesaleSalesData = Object.values(aggregatedSales).map(sales => sales.wholesaleSales);

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesData,
        borderColor: "#778899",
        backgroundColor: "#778899",
        fill: false,
      },
      {
        label: "Wholesale Sales",
        data: wholesaleSalesData,
        borderColor: "#1E90FF",
        backgroundColor: "#1E90FF",
        fill: true,
      }
    ]
  };
  
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg mb-2 text-black opacity-50">Retail Sales</h2>
      <Line data={data}/>
    </div>
  );

};

export default SalesChart;