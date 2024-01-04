import Image from "next/image";
import Cardflow from "../Energyflow/cardEnergyflow";
export default function cardenergy() {
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
              Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
            </p>
            <p className="text-gray-400">Total yield</p>
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
        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Cardflow />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Image src="/png/totalyield.png" alt="" height={70} width={70} />
          <div className="flex flex-col justify-center items-center w-fit">
            <p>Topic</p>
            <p>value</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Image src="/png/consum.png" alt="" height={70} width={70} />
          <div className="flex flex-col justify-center items-center w-fit">
            <p>Topic</p>
            <p>value</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-2">
          <Image src="/png/consumpv.png" alt="" height={70} width={70} />
          <div className="flex flex-col justify-center items-center w-fit">
            <p>Topic</p>
            <p>value</p>
          </div>
        </div>
      </div>
    </>
  );
  return {
    card,
    energyflow,
  };
}
