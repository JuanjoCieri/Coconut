import Testimonials from "./components/Testimonials";

export default function Section09() {
  return (
    <section className="py-[2rem] px-[4rem] bg-black flex justify-center">
      <div className="w-[1400px] w-max-[1400px] flex flex-col gap-10 py-24">
        <div>
          <p className="text-[#A0A0A0] text-5xl">what our clients say</p>
        </div>
        <div></div>
        <div className="w-full flex justify-end items-end">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
