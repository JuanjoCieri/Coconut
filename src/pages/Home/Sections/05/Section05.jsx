import Marquee from "react-fast-marquee";
import SmartDevelopmentImage from "../../../../assets/Section05/SmartDevelopmentImage.png";

export default function Section05() {
  return (
    <section className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[3rem] desktop:px-[4rem] bg-black flex justify-center items-center border-y border-black ">
      <div className="w-[1400px] w-max-[1400px] h-[1000px] flex flex-col justify-start items-start relative">
      <img
        src={SmartDevelopmentImage}
        className="animate-wiggle animate-infinite animate-duration-[10000ms] w-[350px] tablet:w-[400px] laptop:w-[600px] desktop:w-[700px] absolute z-50 mt-36 ml-[525px] tablet: laptop: desktop:ml-96"
      />
        <div className="bg-red-200">
          <h4 className="text-white  text-8xl tablet: laptop: desktop:text-8xl">
            Smart <br /> Development
          </h4>
        </div>
        <div>
          <Marquee speed={100} className="overflow-y-hidden pt-64">
            <span className="text-9xl text-[#373737] px-6">
              Focus on user experience. 
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
