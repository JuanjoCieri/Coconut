import Marquee from "react-fast-marquee";

export default function Section08() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center">
      <div className="w-[1400px] w-max-[1400px]">
        <div className="bg-[#FAEFFF] rounded-[50px] w-full h-[500px] relative flex justify-center items-center">
          <Marquee className="opacity-20 overflow-y-hidden h-44">
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
            <p className="text-9xl">🥥</p>
          </Marquee>
          <span className="text-black text-7xl text-center absolute z-50 px-24">
            At Coconut, We Transform your Visions into Tangible Digital
            Experiences
          </span>
        </div>
      </div>
    </section>
  );
}
