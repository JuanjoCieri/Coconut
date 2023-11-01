import Marquee from "react-fast-marquee";

export default function Section04() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center border-y border-black">
      <div className="w-[1400px] w-max-[1400px]">
        <Marquee className="overflow-y-hidden h-20" gradient={true}>
          <p className="text-gray-400 text-5xl font-bold px-24">Google</p>
          <p className="text-gray-400 text-5xl font-bold px-24">Amazon</p>
          <p className="text-gray-400 text-5xl font-bold px-24">X</p>
          <p className="text-gray-400 text-5xl font-bold px-24">Shopify</p>
          <p className="text-gray-400 text-5xl font-bold px-24">AWS</p>
          <p className="text-gray-400 text-5xl font-bold px-24">Clutch</p>
        </Marquee>
      </div>
    </section>
  );
}
