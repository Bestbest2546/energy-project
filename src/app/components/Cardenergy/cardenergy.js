import Image from "next/image";
import Cardflow from "../Energyflow/cardEnergyflow";
import Wheather from "../Weather/wheather";
import Map from "../Map/map";
import Graph from "../Graph/graph";
import Getgrid from "../../hook/Energydata/totalgrid";
import Getlux from "../../hook/Energydata/lux";

export default function cardenergy() {
  const { gridData, isLoading } = Getgrid();
  const { luxData, isLoadinglux } = Getlux();
  let kilowattsgrid = gridData / 1000;
  const iconsize = 50;
  const card = (
    <>
      <div className="flex justify-start items-center w-full col-span-4">
        <Image src="/png/home.png" height={30} width={30} />
        <h5 className="text-xl font-bold m-2">Thetigerteamacademy</h5>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 w-full divide-x-2 border-solid border-2 border-grey-500 lg:p-4 p-1 rounded">
        <div className="flex flex-row justify-center items-center w-full col-span-1 gap-2">
          <Image
            src="/png/solaryield.png"
            alt=""
            height={iconsize}
            width={iconsize}
          />
          <div className="flex flex-col justify-start items-start w-fit">
            <p className="font-bold text-xl flex flex-row items-end ">
              Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
            </p>
            <p className="text-gray-400">Total yield</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
          <Image
            src="/png/totalyield.png"
            alt=""
            height={iconsize}
            width={iconsize}
          />
          <div className="flex flex-col justify-start items-start w-fit">
            <p className="font-bold text-xl flex flex-row items-end ">
              Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
            </p>
            <p className="text-gray-400">Total yield</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
          <Image
            src="/png/consum.png"
            alt=""
            height={iconsize}
            width={iconsize}
          />
          <div className="flex flex-col justify-start items-start w-fit">
            <p className="font-bold text-xl flex flex-row items-end ">
              {isLoading ? <p>Loading...</p> : <p>{kilowattsgrid}</p>}
              <p className="mx-1 font-thin text-sm text-gray-400">kWh</p>
            </p>
            <p className="text-gray-400">Total grid in one day</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
          <Image
            src="/png/consumpv.png"
            alt=""
            height={iconsize}
            width={iconsize}
          />
          <div className="flex flex-col justify-start items-start w-fit">
            <p className="font-bold text-xl flex flex-row items-end ">
              Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
            </p>
            <p className="text-gray-400">Total yield</p>
          </div>
        </div>
      </div>
    </>
  );

  const energyflow = (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full border-solid border-2 border-grey-500 rounded my-4">
        <div className="flex flex-row justify-center items-center w-[300px] gap-2">
          <Cardflow />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Image
              src="/png/sunny (1).png"
              alt=""
              height={iconsize}
              width={iconsize}
            />
            <div className="flex flex-col justify-start items-start w-fit">
              <p className="font-bold text-xl flex flex-row items-end ">
                {isLoadinglux ? <p>Loading...</p> : <p>{luxData}</p>}
                <p className="mx-1 font-thin text-sm text-gray-400">Lux</p>
              </p>
              <p className="text-gray-400">Light intensity</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Image
              src="/png/weather.png"
              alt=""
              height={iconsize}
              width={iconsize}
            />
            <div className="flex flex-col justify-start items-start w-fit">
              <p className="font-bold text-xl flex flex-row items-end ">
                Value
                <p className="mx-1 font-thin text-sm text-gray-400"> ºC</p>
              </p>
              <p className="text-gray-400">Temperature</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Image
              src="/png/cloud.png"
              alt=""
              height={iconsize}
              width={iconsize}
            />
            <div className="flex flex-col justify-start items-start w-fit">
              <p className="font-bold text-xl flex flex-row items-end ">
                Value
                <p className="mx-1 font-thin text-sm text-gray-400">%RH</p>
              </p>
              <p className="text-gray-400">Humidity</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Wheather />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Map />
        </div>
      </div>
    </>
  );

  const energygraph = (
    <>
      <div className="flex justify-center items-center w-full border-solid border-2 border-grey-500 rounded my-4">
        <Graph />
      </div>
    </>
  );
  return {
    card,
    energyflow,
    energygraph,
  };
}
