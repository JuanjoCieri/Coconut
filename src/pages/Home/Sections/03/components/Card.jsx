export default function Card() {
  return (
    <div className="w-[500px] h-[200px] rounded-[50px] flex bg-[#F9ECFF]">
      <div className="w-1/2  flex flex-col justify-between py-5 pl-10">
        <span className="text-black font-bold text-7xl">+300</span>
        <p className="text-[#454545] font-semibold text-lg">
          We have successfully completed a total of 300+ projects
        </p>
      </div>
      <div className="w-1/2 "></div>
    </div>
  );
}
