import React from "react";
import Commonbutton from "../commonbutton";

export default function Herobanner() {
  return (
    <div className="bg-green pt-[224px] rounded-b-[100%] overflow-hidden">
      <div className="container2">
        <div className="flex gap-30 justify-between">
          <div className="max-w-[681px] w-full mt-[111px]">
            <h1 className="text-[54px] font-bold leading-[81px] text-white mb-8">
              <span className="text-cusorange">Studying</span> Online is now
              much easier
            </h1>
              TOTC is an interesting platform that will teach you in more an
            <p className="text-2xl font-normal leading-[38px] text-white mb-[52px]">
              interactive way
            </p>
            <div className="flex items-center gap-10">
              <Commonbutton text="Join for free" href="/" variant="secondary" Buttonclass="py-[22px] px-[38px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
