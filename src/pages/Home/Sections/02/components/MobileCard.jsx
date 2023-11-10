export default function MobileCard() {
  return (
    <div className="w-[350px] tablet:w-[350px] laptop:w-[400px] desktop:w-[450px] h-[350px] tablet:h-[350px] laptop:h-[400px] desktop:h-[450px] rounded-lg bg-[url('/src/assets/Section02/MobileAppDesign.png')] flex flex-col justify-between px-4 py-6">
      <div>
        <h3 className=" text-5xl tablet:text-5xl laptop:text-6xl desktop:text-6xl text-white">
          Mobile App Design
        </h3>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div>
          <p className="text-white">
            Boost brand visibility with a business-driven mobile application
            solution. Coconut specializes in developing realistic apps that
            effectively target potential customers, leading to a substantial
            surge in revenue generation.
          </p>
        </div>
        <div className="w-[100%] h-0.5 bg-white"></div>
        <div>
        <div className="flex justify-center item-center gap-3">
          <div className="bg-white bg-opacity-60 py-1 px-8 rounded-full">
            <p className="text-white">React Native</p>
          </div>
          <div className="bg-white bg-opacity-60 py-1 px-8 rounded-full">
            <p className="text-white">Kotlin</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
