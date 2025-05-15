import React from "react";
import meetingimage from "@/assets/image/meetingimage.png";
import Image from "next/image";
import Gridicon from "@/assets/icon/gridicon";
import Colsicon from "@/assets/icon/colsicon";
import Communityicon from "@/assets/icon/communityicon";

export default function Fetures() {
  return (
    <div className="pt-[160px]">
      <div className="container2">
        <div className="flex items-center flex-col mb-100">
          <h6 className="text-4xl font-bold leading-[65px] text-cusblue mb-5">
            Our <span className="text-greenmuted">Features</span>
          </h6>
          <p className="text-center text-2xl font-normal leading-[44px] text-lightpurplemuted">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={meetingimage}
              alt="meetingimage"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full max-w-[545px]">
            <h1 className="text-4xl font-bold leading-[65px] text-cusblue mb-50">
              A <span className="text-greenmuted">user interface</span> designed
              for the classroom
            </h1>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-10">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Gridicon />
                </div>
                <p>
                  Teachers don't get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Colsicon />
                </div>
                <p>
                  TA's and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="p-[17px] h-60 rounded-full shadow-shadow2">
                  <Communityicon />
                </div>
                <p>
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
