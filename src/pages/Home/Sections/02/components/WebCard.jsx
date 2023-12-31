export default function WebCard() {
  return (
    <div className="w-[350px] tablet:w-[350px] laptop:w-[400px] desktop:w-[450px] h-[350px] tablet:h-[350px] laptop:h-[400px] desktop:h-[450px] rounded-lg bg-[url('/src/assets/Section02/WebDevelopment.png')] flex flex-col justify-between px-4 py-6">
      <div>
        <h3 className="text-5xl tablet:text-5xl laptop:text-6xl desktop:text-6xl text-white">
          Web Development
        </h3>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div>
          <p className="text-white">
            Bring to reality your idea with a Design-driven product development.
            Be open to innovative web design & branding solutions which move the
            boundaries. Our sophisticated approach to the development of digital
            experiences exceeds all expectations.
          </p>
        </div>
        <div className="w-[100%] h-0.5 bg-white"></div>
        <div className="flex justify-center item-center gap-3">
          <div className="bg-white bg-opacity-60 py-1 px-8 rounded-full">
            <p className="text-white">React</p>
          </div>
          <div className="bg-white bg-opacity-60 py-1 px-8 rounded-full">
            <p className="text-white">Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
}
