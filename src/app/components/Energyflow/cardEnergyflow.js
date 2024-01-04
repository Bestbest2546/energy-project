export default function cardFlow() {
    const circlesize = 60;
  return (
    <div className="w-[300px] h-[300px] flex flex-col p-2">
      <div className=" h-full flex justify-center items-start">
        <div className={`w-[${circlesize}px] h-[${circlesize}px] border-[1px] rounded-full border-yellow-500 outline outline-offset-4 outline-1 outline-yellow-200`}></div>
      </div>
      <div className=" h-full flex justify-between items-center">
        <div className={`w-[${circlesize}px] h-[${circlesize}px] border-[1px] rounded-full border-[#87DBDC] outline outline-offset-4 outline-1 outline-[#87dbdc7f]`}></div>
        <div className={`w-[${circlesize}px] h-[${circlesize}px] border-[1px] rounded-full border-purple-500 outline outline-offset-4 outline-1 outline-purple-200`}></div>
      </div>
      <div className=" h-full flex justify-center items-end">
        <div className={`w-[${circlesize}px] h-[${circlesize}px] border-[1px] rounded-full border-sky-500 outline outline-offset-4 outline-1 outline-sky-200`}></div>
      </div>
    </div>
  );
}
