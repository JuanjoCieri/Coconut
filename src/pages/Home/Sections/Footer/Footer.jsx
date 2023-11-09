import { ArrowRigthIcon, ArrowUpRightIcon } from "../../../../utils/Icons";

export default function Footer() {
  return (
    <footer className="py-[2rem] px-[1rem] tablet:px-[2rem] laptop:px-[3rem] desktop:px-[4rem] bg-[url('/src/assets/Footer/Gradient.png')] bg-cover bg-top flex justify-center relative">
      <div className="bg-black h-16 w-full absolute top-0 rounded-b-[100px]"></div>
      <div className="w-[1400px] w-max-[1400px] h-[900px]  tablet:h-[800px] laptop:h-[600px] desktop:h-[600px] pt-16">
        <div className="h-5/6 flex flex-col tablet:flex-col laptop:flex-row desktop:flex-row justify-center items-center">
          <div className=" w-full tablet:w-full laptop:w-2/3 desktop:w-2/3 flex flex-col justify-center items-start gap-10">
            <div>
              <div>
                <p className="text-white text-3xl pb-4">🥥 Coconut</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-5xl">
                  We would love to hear <br /> from you.
                </p>
              </div>
              <div>
                <p className="text-[#757575]">
                  Feel free to reach our if you want to collaborate with us, or
                  simply have a chat
                </p>
              </div>
              <div>
                <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
                  <p className="text-white">Start a project</p>
                  <div className="p-2 rounded-full bg-white">
                    <ArrowRigthIcon />
                  </div>
                </button>
              </div>

              <div>
                <p className="text-[#BBBBBB] text-lg">Or send us a email.</p>
                <p className="text-sm text-[#D7D7D7]">coconut@gmail.com</p>
              </div>
            </div>
          </div>
          <div className=" w-full tablet:w-full laptop:w-1/3 desktop:w-1/3 flex  justify-start tablet:justify-start laptop:justify-center desktop:justify-center items-start gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-lg">Contact Us</p>
              </div>
              <div>
                <p className="text-[#D3D3D3] text-sm">
                  Our email: <br />
                  coconut@gmai.com
                </p>
              </div>
              <div>
                <p className="text-[#D3D3D3] text-sm">
                  Our phone: <br />
                  +54 2364287876
                </p>
              </div>
              <div>
                <p className="text-[#D3D3D3] text-sm">
                  Puerto madero, <br />
                  Buenos Aires, <br />
                  Argentina.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-lg">Follow us</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <p className="text-[#D3D3D3] text-sm">linkedin</p>
                <ArrowUpRightIcon />
              </div>
              <div className="flex justify-start items-center gap-4">
                <p className="text-[#D3D3D3] text-sm">instagram</p>
                <ArrowUpRightIcon />
              </div>
              <div className="flex justify-start items-center gap-4">
                <p className="text-[#D3D3D3] text-sm">dribble</p>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/6 flex justify-center items-center">
          <p className="text-white">
            © Coconut 2023. All rights reserved . Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
