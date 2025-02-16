import Image from "next/image";

export default function Home() {
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
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6">Advertisement</h1>
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
        <div className="opacity-90 mb-10 flex-col gap-6">
          <div> Graph </div>
          <div> Table </div>
        </div>
      
      </section>
    </main>
  );
}
