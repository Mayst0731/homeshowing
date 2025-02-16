import Image from "next/image";
import blender from "../public/Hamilton.png";
import logo from "../public/logo.svg";
import ClientsData from "./data/clients.json";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";

export default function Home() {

  // Extract sales from clients
  const salesData = ClientsData.flatMap(product => product.sales);

  console.log(ClientsData);

  // Setting headers for table
  const headers = ["WEEK ENDING", "RETAIL SALES", "WHOLESALE SALES", "UNITS SOLD", "RETAILER MARGIN"];

  const blenderChoices = ["Pantry", "Obselete", "Blender", "Lighting Deal"];

  return (
    <main className="flex flex-col justify-between pt-5 pl-5">
     {/* Header */}
      <section className="flex items-start justify-start pb-12">
        <Image
            src={logo}
            width={100}
            height={100}
            alt="Advertisement"
            />
      </section>

      {/* Body */}
      <section className="flex justify-start gap-20">
        {/* Advertisement */}
        <div>
          <h1 className="text-3xl lg:text-2xl mb-6">Shark Ninja</h1>
          <p className="mb-6 opacity-60">Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixter System</p>
          <div className="mb-6">
            <Image
            src={blender}
            width={200}
            height={200}
            alt="Advertisement"
            />
          </div>
          <div className="flex justify-start gap-7">
            {
              blenderChoices.map((choice) => 
                <div key={choice} className="opacity-90 mb-10 border rounded-md border-b-2 px-3 py-1">
                    {choice}
                </div>
              )
            }
          </div>
        </div>
     
      {/* Dashboard */}
        <div className="flex-col gap-20 opacity-90">

          {/* Graph */}
          <div className="mb-20"> 
            <SalesChart sales={salesData}/>
          </div>

           {/* Table */}
          <div> 
            <SalesTable headers={headers} salesData={salesData}/>
          </div>

        </div>
      
      </section>
    </main>
  );
}
