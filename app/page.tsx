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
    <main className="flex flex-col justify-between bg-white">
     {/* Header */}
      <section className="flex items-start justify-start pl-5 pt-5 pb-5 bg-black">
        <Image
            src={logo}
            width={100}
            height={100}
            alt="Advertisement"
            />
      </section>

      {/* Body */}
      <section className="flex justify-start gap-20 pl-5 bg-black bg-opacity-20">
        {/* Advertisement */}
        <div className="pt-10 bg-white mt-10">
          <h1 className="text-3xl lg:text-2xl mb-6 mx-3 text-black">Shark Ninja</h1>
          <p className="mb-6 text-black opacity-60 mx-3">Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixter System</p>
          <div className="mb-6 mx-3">
            <Image
            src={blender}
            width={200}
            height={200}
            alt="Advertisement"
            />
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div className="flex justify-start gap-7 mx-3">
            {
              blenderChoices.map((choice) => 
                <div key={choice} className="opacity-100 mb-10 border rounded-md border-b-2 px-3 py-1s text-gray-400">
                    {choice}
                </div>
              )
            }
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>
        </div>
     
      {/* Dashboard */}
        <div className="flex-col opacity-90 mt-10">

          {/* Graph */}
          <div className="mb-10"> 
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
