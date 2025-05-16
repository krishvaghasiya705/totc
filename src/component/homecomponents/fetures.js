import React from "react";
import meetingimage from "@/assets/image/meetingimage.png";
import Image from "next/image";
import Gridicon from "@/assets/icon/gridicon";
import Colsicon from "@/assets/icon/colsicon";
import Communityicon from "@/assets/icon/communityicon";

export default function Fetures() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container2">
        <div className="flex items-center flex-col mb-100 xl:mb-20">
          <h6 className="text-4xl font-bold leading-[65px] text-cusblue mb-5">
            Our <span className="text-greenmuted">Features</span>
          </h6>
          <p className="text-center text-[22px] font-normal leading-[40px] text-lightpurplemuted">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
        <div className="flex items-center justify-between xl:flex-col">
          <div className="w-[calc(100%-700px)] xl:w-full">
            <Image
              src={meetingimage}
              alt="meetingimage"
              width={1000}
              height={1000}
              className="xl:max-w-[600px] xl:mx-auto"
            />
          </div>
          <div className="max-w-[545px] xl:max-w-full xl:w-full">
            <h1 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-50 xl:mb-7 xl:text-[38px] xl:leading-[54px]">
              A <span className="text-greenmuted">user interface</span> designed
              for the classroom
            </h1>
            <div className="flex flex-col gap-10 xl:gap-5">
              <div className="flex items-center gap-5">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Gridicon />
                </div>
                <p className="text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-[20px] xl:leading-[36px]">
                  Teachers don&apos;t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Colsicon />
                </div>
                <p className="text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-[20px] xl:leading-[36px]">
                  TA&apos;s and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Communityicon />
                </div>
                <p className="text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-[20px] xl:leading-[36px]">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
