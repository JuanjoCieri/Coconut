import SolidDesignSolutions from "../../../../../assets/Section02/SolidDesignSolutions.png";

export default function Card() {
  return (
    <div className="w-[450px] h-[450px] rounded-lg bg-[url('/src/assets/Section02/SolidDesignSolutions.png')] flex flex-col justify-between px-4 py-6">
      <div>
        <h3 className="text-6xl text-white">Solid Design Solutions</h3>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div >
          <p className="text-white">
            We're driven by user‑centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </p>
        </div>
        <div className="w-[100%] h-0.5 bg-white"></div>
        <div>
          <div className="bg-white bg-opacity-60 py-1 px-8 rounded-full">
            <p className="text-white">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
