import Cards from "./components/Cards";

export default function Section02() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center">
      <div className="w-[1400px] w-max-[1400px] flex flex-col gap-14">
        <div>
          <span className="font-semibold text-9xl text-black">
            WE CREATE <br /> REAL SOLUTIONS
          </span>
        </div>
        <Cards />
      </div>
    </section>
  );
}
