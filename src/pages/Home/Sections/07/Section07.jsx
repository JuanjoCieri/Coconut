import Cards from "./components/Cards";

export default function Section07() {
  return (
    <section className="py-[2rem] px-[4rem] bg-white flex justify-center">
      <div className="w-[1400px] w-max-[1400px] flex flex-col gap-10">
        <div>
          <p className="text-[#525252] font-semibold text-4xl">Our projects</p>
        </div>
        <Cards />
      </div>
    </section>
  );
}
