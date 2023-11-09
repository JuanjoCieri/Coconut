import Desktop from "../../../../../assets/Section01/Desktop.png";
export default function Main() {
  
  return (
    <div className="flex justify-center items-center pt-24 tablet:pt-24 laptop:pt-10 desktop:pt-10 pb-52 tablet:pb-52 laptop:pb-32 desktop:pb-24">
      <div className="w-full tablet:w-full laptop:w-1/2 desktop:w-1/2 flex flex-col justify-center items-start gap-7 pr-10">
        <div className="border border-[#D029EB] rounded-full py-1 px-3 tablet:px-5 laptop:px-8 desktop:px-10">
          <p className="text-[#D029EB] tablet:text-lg text-sm laptop:text-lg desktop:text-xl">Design & Development</p>
        </div>
        <div>
          <h1 className="text-white text-7xl tablet:text-2xl laptop:text-4xl desktop:text-7xl">Digital Agency</h1>
        </div>
        <div>
          <h2 className="text-[#7B7B7B] text-lg tablet:text-lg laptop:text-lg desktop:text-xl">
            Coconut is a design and development agency specialized in creating
            simple and performant user experiences for startup and the world’s
            leading companies.
          </h2>
        </div>
        <div>
          <button className="font-bold text-black bg-white py-3 px-12 tablet:px-12 laptop:px-12 desktop:px-16 rounded-full text-xl tablet:text-xl laptop:text-lg desktop:text-xl">
            Let´s talk
          </button>
        </div>
      </div>
      <div className="hidden tablet:hidden laptop:hidden desktop: w-1/2">
        <img src={Desktop} alt="Desktop image" className="w-[500px]" />
      </div>
      <div>
        
      </div>
    </div>
  );
}
