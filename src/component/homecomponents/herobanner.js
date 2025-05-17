import React from "react";
import Commonbutton from "../commonbutton";
import Playicon from "@/assets/icon/playicon";
import Image from "next/image";
import Herobannergirl from "@/assets/image/herobannergirl.png";
import Waveicon from "@/assets/icon/waveicon";
import calendericon from "@/assets/image/calendericon.png";
import mailicon from "@/assets/image/mailicon.png";
import profileaciveimage from "@/assets/image/profileaciveimage.png";

export default function Herobanner() {
  return (
    <div className="pt-[200px] pb-30 home-herobanner lg:pt-[150px]">
      <div className="container2">
        <div className="flex gap-30 justify-between xl:block">
          <div className="max-w-[681px] mt-[111px] lg:max-w-[650px] xl:max-w-full xl:mt-0 xl:mb-50">
            <h1 className="text-[54px] font-bold leading-[81px] text-white mb-8 lg:text-[44px] lg:leading-[70px] lg:mb-5 md:text-[34px] md:leading-[55px]">
              <span className="text-cusorange">Studying</span> Online is now
              much easier
            </h1>
            <p className="text-2xl font-normal leading-[38px] text-white mb-[52px] max-w-[546px] xl:max-w-full md:text-xl md:leading-[28px]">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div className="flex items-center gap-10 xl:gap-5">
              <Commonbutton
                text="Join for free"
                href="/"
                variant="secondary"
                Buttonclass="py-[22px] px-[38px]"
              />
              <div className="flex items-center gap-8 md:gap-4">
                <div className="rounded-full bg-white h-20 w-20 flex justify-center items-center md:w-50 md:h-50">
                  <div className="w-6 h-7 md:w-5 md:h-5">
                    <Playicon />
                  </div>
                </div>
                <span className="text-2xl font-normal leading-9 text-cuslightblue md:text-[18px] md:leading-7">
                  Watch how it works
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[911px] w-full relative flex justify-center items-end lg:max-w-[650px] xl:max-w-full xl:pt-50">
            <Image
              src={Herobannergirl}
              alt="Herobannergirl"
              width={1000}
              height={1000}
              className="max-w-[544px] lg:max-w-[450px]"
            />
            <div className="absolute top-2/4 left-0 -translate-y-2/4 w-full xl:top-0 xl:-translate-y-0">
              <div className="flex justify-between gap-30 items-end">
                <div className="bg-whitelight2 rounded-[20px] px-7 py-[25px] flex items-center gap-8 max-w-[300px] backdrop-blur-[20px]">
                  <Image
                    src={calendericon}
                    alt="calendericon"
                    width={1000}
                    height={1000}
                    className="w-50 h-50"
                  />
                  <div>
                    <span className="text-base font-bold font-Nunito text-cusgray2">
                      250k
                    </span>
                    <p className="text-xl font-semibold font-Nunito text-cusgray3 xl:">
                      Assisted Student
                    </p>
                  </div>
                </div>
                <div className="w-[69px] h-[69px] mr-100 mb-[86px] flex justify-center items-center bg-cuslightpink rounded-[14px]">
                  <div className="bg-white rounded-lg py-2.5 px-[14px]">
                    <Waveicon />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-30 mt-[95px] mb-30">
                <div></div>
                <div className="bg-whitelight2 rounded-[20px] px-7 py-[25px] flex items-center gap-8 max-w-[380px] backdrop-blur-[20px]">
                  <Image
                    src={mailicon}
                    alt="mailicon"
                    width={1000}
                    height={1000}
                    className="w-50 h-50"
                  />
                  <div>
                    <span className="text-base font-bold font-Nunito text-cusgray2">
                      Congratulations
                    </span>
                    <p className="text-xl font-semibold font-Nunito text-cusgray3">
                      Your admission completed
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-30">
                <div className="bg-whitelight2 rounded-[20px] px-7 py-[25px] flex gap-6 max-w-[390px] backdrop-blur-[20px]">
                  <Image
                    src={profileaciveimage}
                    alt="profileaciveimage"
                    width={1000}
                    height={1000}
                    className="w-[56px] h-[56px]"
                  />
                  <div>
                    <span className="text-base font-bold font-Nunito text-cusgray2">
                      User Experience Class
                    </span>
                    <p className="text-xl font-semibold font-Nunito text-cusgray3">
                      Today at 12.00 PM
                    </p>
                    <button
                      type="button"
                      className="mt-[19px] rounded-full bg-cuslightpink2  py-3 px-12"
                    >
                      <span className="text-xl font-bold font-Nunito text-white">Join Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
