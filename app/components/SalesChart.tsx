'use client'
import { Line } from 'react-chartjs-2';
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

interface SalesChartProps {
  salesData: SalesData[]; // Defining salesData as an array of SalesData
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

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SalesChart = ({sales}) => {
 
  const aggregatedSales = aggregateSalesByMonth(sales);
  const labels = Object.keys(aggregatedSales).map(month => monthNames[Number(month)]);
  const retailSalesData = Object.values(aggregatedSales).map(sales => sales.retailSales);
  const wholesaleSalesData = Object.values(aggregatedSales).map(sales => sales.wholesaleSales);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesData,
        borderColor: "#778899",
        backgroundColor: "#778899",
        fill: true,
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
      <h2 className="text-lg font-bold mb-2">Sales Chart by Month</h2>
      <Line data={data} options={options}/>
    </div>
  );

};

export default SalesChart;