import Paintingtray from "@/assets/icon/paintingtray";
import Rightarrow from "@/assets/icon/rightarrow";
import sliderbgimage from "@/assets/image/sliderbgimage.png"
import React from "react";

export default function Explorecourse() {
  return (
    <div className="relative pt-[250px] pb-[60px] before:absolute before:top-0 before:left-0 before:h-full before:w-[80%] before:bg-skybluetransparent before:rounded-br-[100px] before:-z-[1]">
      <div className="container5">
        <div>
          <h6 className="text-[40px] font-bold leading-[47px] text-black3 mb-6">
            Explore Course
          </h6>
          <p className="text-2xl leding-[28px] font-medium text-black3muted">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>
        <div className="mt-[110px]">
          <div className="flex justify-between items-center gap-30">
            <div className="flex items-center gap-4">
              <Paintingtray />
              <p className="text-[28px] font-bold leading-8 text-black3">
                Lorem Ipsum
              </p>
            </div>

            <div className="flex items-center gap-20 cursor-pointer group transition-all delay-300 ease-in-out">
              <span className="text-2xl font-medium leading-7 text-lightblue uppercase block transition-all delay-300 ease-in-out group-hover:-translate-x-2">
                See all
              </span>
              <div className="transition-all delay-300 ease-in-out group-hover:translate-x-2">
                <Rightarrow />
              </div>
            </div>
          </div>
          <div className="relative pb-6 pt-10 before:absolute before:bottom-0 before:left-0 before:h-[82px] before:w-full before:bg-black before:opacity-5 before:rounded-[30px]">
            <div className="flex overflow-x-auto overflow-y-hidden">
              <div className="w-[170px] flex justify-end">
                <div className="bg-white rounded-3xl py-5 px-[15px] h-[418px] w-[104px] rotate-[-10deg]">
                  <div className="px-[11px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
