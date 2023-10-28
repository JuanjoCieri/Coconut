import Desktop from "../../../../../assets/Section01/Desktop.png";

export default function Main() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-1/2 flex flex-col justify-center items-start gap-7 pr-10">
        <div className="border border-[#D029EB] rounded-full py-1 px-10">
          <p className="text-[#D029EB] text-xl">Design & Development</p>
        </div>
        <div>
          <h1 className="text-white text-7xl">Digital Agency</h1>
        </div>
        <div>
          <h2 className="text-[#7B7B7B] text-xl">
            Coconut is a design and development agency specialized in creating
            simple and performant user experiences for startup and the world’s
            leading companies.
          </h2>
        </div>
        <div>
          <button className="font-bold text-black bg-white py-3 px-16 rounded-full text-xl">
            Let´s talk
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={Desktop} alt="Desktop image" className="w-[500px]" />
      </div>
      <div>
        
      </div>
    </div>
  );
}