import Cards from "./components/Cards";

export default function Section03() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center">
      <div className="w-[1400px] w-max-[1400px] flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <span className="text-[#626262] text-7xl">About us</span>
          <p className="text-3xl text-black pr-80 font-medium">
            Coconut is a Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <Cards />
      </div>
    </section>
  );
}
