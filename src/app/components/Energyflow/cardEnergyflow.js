import Image from "next/image";
import './cardflow.css'

export default function cardFlow() {
  return (
    <div className="w-[300px] h-[300px] flex flex-col p-2 bg-[url('/energyflow.svg')] bg-no-repeat bg-center">
      <div className="circlesolar"></div>
      <div className="circlebatt"></div>
      <div className="circlesolarhome"></div>
      <div className="circlegrid"></div>
      <div className=" h-full flex justify-center items-start">
        <div
          className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-yellow-500 outline outline-offset-4 outline-1 outline-yellow-200 bg-white`}
        >
          <Image src="/png/solar-panel.png" alt="" height={0} width={20} />
          <p className="text-[8px] font-bold font-serif text-gray-500">value</p>
          <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
        </div>
      </div>
      <div className=" h-full flex justify-between items-center">
        <div
          className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-[#87DBDC] outline outline-offset-4 outline-1 outline-[#87dbdc7f] bg-white`}
        >
          <div className="flex justify-center items-center">
            <Image src="/png/empty-battery.png" alt="" height={0} width={20} />
            <p className="absolute text-[7px] font-bold font-serif text-black">55%</p>
          </div>
          <p className="text-[8px] font-bold font-serif text-gray-500">value</p>
          <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
        </div>
        <div
          className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-purple-500 outline outline-offset-4 outline-1 outline-purple-200 bg-white`}
        >
          <Image src="/png/electric-tower.png" alt="" height={0} width={20} />
          <p className="text-[8px] font-bold font-serif text-gray-500">value</p>
          <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
        </div>
      </div>
      <div className=" h-full flex justify-center items-end">
        <div
          className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-sky-500 outline outline-offset-4 outline-1 outline-sky-200 bg-white`}
        >
          <Image src="/png/energy-costs.png" alt="" height={0} width={20} />
          <p className="text-[8px] font-bold font-serif text-gray-500">value</p>
          <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
        </div>
      </div>
    </div>
  );
}
