import Main from "./components/Main";
import NavBar from "./components/NavBar";

export default function Section01() {
  return (
    <section className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[3rem] desktop:px-[4rem] bg-[url('/src/assets/Section01/Gradient.png')] flex justify-center rounded-b-[100px]">
      <div className="w-[1400px] w-max-[1400px]">
        <NavBar />
        <Main />
      </div>
    </section>
  );
}
