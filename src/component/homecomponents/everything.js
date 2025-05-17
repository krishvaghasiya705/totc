import Image from "next/image";
import React from "react";
import classimage from "@/assets/image/classimage.jpg";
import Playicon2 from "@/assets/icon/playicon2";

export default function Everything() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container3">
        <div className="grid grid-cols-2 gap-[47px] items-center xl:grid-cols-1">
          <div className="pl-7">
            <h5 className="text-4xl font-medium leading-[58px] mb-30 text-cusblue relative before:absolute before:-top-[13px] before:-left-[25px] before:bg-skygreenmuted before:w-[73px] before:h-[73px] before:rounded-full before:-z-[1]">
              Everything you can do in a physical classroom,{" "}
              <span className="text-greenmuted">you can do with TOTC</span>
            </h5>
            <p className="text-[24px] font-normal leading-[43px] text-lightpurplemuted mb-30 max-w-[700px] relative before:absolute before:bottom-[69px] before:right-[10px] before:bg-skygreenmuted before:w-30 before:h-30 before:rounded-full before:z-[1]">
              TOTC&apos;s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <span className="text-[22px] leading-10 font-normal text-lightpurplemuted underline cursor-pointer">
              Learn more
            </span>
          </div>
          <div className="relative p-5 before:absolute before:top-0 before:left-0 before:w-[128px] before:h-[128px] before:rounded-[20px] before:bg-skybluemuted after:absolute after:bottom-0 after:right-0 after:w-[231px] after:h-[231px] after:rounded-[20px] after:bg-skygreenmuted">
            <div className="h-[470px] relative rounded-[20px] overflow-hidden z-10">
              <Image
                src={classimage}
                alt="classimage"
                width={1000}
                height={1000}
              />
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer">
                <div className="w-[70px] h-[70px] flex justify-center items-center bg-white rounded-full">
                  <Playicon2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
