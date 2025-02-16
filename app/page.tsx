import Image from "next/image";
import ClientsData from "./data/clients.json";
import SalesChart from "./components/SalesChart";

export default function Home() {

  // Extract sales from clients
  const salesData = ClientsData.flatMap(product => product.sales);

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
        <div className="opacity-90 flex-col gap-6">
          <div> 
            <SalesChart sales={salesData}/>
          </div>
          <div> 
            {console.log(headers)}
          </div>
        </div>
      
      </section>
    </main>
  );
}
