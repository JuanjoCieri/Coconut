export default function Testimonials() {
  return (
    <div className=" w-[100%] tablet:w-[90%] laptop:w-[60%] desktop:w-[60%]">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
        <p className="text-9xl text-white font-bold">"</p>
        <p className="text-4xl text-white">
        Thanks to Coconut fast delivery and high-quality products, we can provide our new solutions much quicker. The team assisted in reaching the goals and objectives while staying within budget, consistently proving to be an excellent partner.
        </p>
        </div>
        <div className="w-full bg-white h-0.5"></div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-16 bg-[url('/src/assets/empresario.jpg')] bg-cover bg-right rounded-full"></div>
            <div>
              <p className="text-lg text-white">Juan Martín</p>
              <p className="text-[#9A9A9A] text-sm">Founder & CEO</p>
            </div>
          </div>
          <div>See more --{">"}</div>
        </div>
      </div>
    </div>
  );
}
