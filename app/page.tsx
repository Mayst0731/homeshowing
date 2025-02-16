import Image from "next/image";
import ClientsData from "./data/clients.json";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";

export default function Home() {

  // Extract sales from clients
  const salesData = ClientsData.flatMap(product => product.sales);
  console.log(salesData);

  // Setting headers for table
  const headers = ["WEEK ENDING", "RETAIL SALES", "WHOLESALE SALES", "UNITS SOLD", "RETAILER MARGIN"];

  return (
    <main className="flex flex-col justify-between pt-5 pl-5">
     {/* Header */}
      <section className="flex items-start justify-start pb-12">
        <div className="font-bold">
          Stackline
        </div>
      </section>

      {/* Body */}
      <section className="flex justify-between">
        <div>
          <h1 className="text-3xl lg:text-2xl mb-6">Advertisement</h1>
          <div className="flex justify-start gap-2">
             <div className="opacity-90 mb-10">
              select_1
            </div>
            <div className="opacity-90 mb-10">
              select_2
            </div>
            <div className="opacity-90 mb-10">
              select_3
            </div>
          </div>
        </div>
     
      {/* Dashboard */}
        <div className="flex-col gap-20 opacity-90">
          <div className="mb-20"> 
            <SalesChart sales={salesData}/>
          </div>
          <div> 
            <SalesTable headers={headers} salesData={salesData}/>
          </div>

        </div>
      
      </section>
    </main>
  );
}
