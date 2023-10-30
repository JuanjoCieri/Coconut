import Marquee from "react-fast-marquee";

export default function Section04() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center border-y border-black">
      <div className="w-[1400px] w-max-[1400px]">
        <Marquee className="overflow-y-hidden" gradient={true}>
          <p className="text-gray-400 text-5xl font-bold">Google</p>
          <p className="text-gray-400 text-5xl font-bold">Google</p>
          <p className="text-gray-400 text-5xl font-bold">Google</p>
          <p className="text-gray-400 text-5xl font-bold">Google</p>
        </Marquee>
      </div>
    </section>
  );
}
