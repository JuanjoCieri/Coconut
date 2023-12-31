import Cards from "./components/Cards";

export default function Section03() {
  return (
    <section className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[3rem] desktop:px-[4rem] bg-white flex justify-center">
      <div className="w-[1400px] w-max-[1400px] flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <span className="text-[#626262]  text-5xl tablet:text-5xl laptop:text-6xl desktop:text-7xl">About us</span>
          <p className=" text-xl tablet:text-xl laptop:text-2xl desktop:text-3xl text-black desktop:pr-80 font-medium">
          We're Inspired and Passionate About Solution Development bringing our clients ideas to reality in form of App - Web - Design. All of it underpinned by a vanguardist technology and design group that provides for longevity and brand evolution. TOGETHER.
          </p>
        </div>
        <Cards />
      </div>
    </section>
  );
}
