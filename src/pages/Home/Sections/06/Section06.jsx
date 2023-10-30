import HandHoldingPhone from "../../../../assets/Section06/HandHoldingPhone.png";
import AlfaOmegaLanding from "../../../../assets/Section06/AlfaOmegaLanding.png";

export default function Section06() {
  return (
    <section className="py-[2rem] px-[4rem] bg-black flex justify-center border-y border-black">
      <div className="w-[1400px] w-max-[1400px]">
        <div>
          <span className="text-white text-5xl">
            we bring your idea to reality
          </span>
        </div>
        <div className="h-[1500px] flex flex-col gap-10 py-10 justify-start items-center relative">
          <img src={HandHoldingPhone} className="w-[600px] absolute mr-44" />
          <div className="flex flex-row justify-between items-center w-full">
            <img src={AlfaOmegaLanding} className="rounded-3xl w-[300px]" />
            <img src={AlfaOmegaLanding} className="rounded-3xl w-[300px]" />
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <img src={AlfaOmegaLanding} className="rounded-3xl w-[300px]" />
            <img src={AlfaOmegaLanding} className="rounded-3xl w-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
