export default function Card({title, desc}) {
  return (
    <div className=" w-[350px] tablet:w-[350px] laptop:w-[400px] desktop:w-[500px] h-[200px] rounded-[50px] flex bg-[#F9ECFF]">
      <div className="w-1/2  flex flex-col justify-between py-8 tablet:py-8 laptop:py-6 desktop:py-5 pl-10">
        <span className="text-black font-bold  text-6xl tablet:text-6xl laptop:text-6xl desktop:text-7xl">{title}</span>
        <p className="text-[#454545] font-semibold  text-sm tablet:text-sm laptop:text-lg desktop:text-lg">
{desc}        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center"><p className="text-7xl">🥥</p></div>
    </div>
  );
}
