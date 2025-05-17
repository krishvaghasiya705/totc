import React from "react";
import discussionsimage from "@/assets/image/discussionsimage.png";
import Image from "next/image";
import Commonbutton from "../commonbutton";

export default function Discussions() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container3">
        <div className="flex justify-between items-center gap-30 xl:flex-col xl:gap-0">
          <div className="w-[calc(100%-700px)] xl:w-full">
            <Image
              src={discussionsimage}
              alt="discussionsimage"
              width={1000}
              height={1000}
              className="xl:max-w-[600px] xl:mx-auto"
            />
          </div>
          <div className="max-w-[540px] xl:max-w-full">
            <h5 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 max-w-[274px] xl:mb-5 xl:text-[38px] xl:leading-[54px] xl:max-w-full">
              One-on-One <span className="text-greenmuted">Discussions</span>
            </h5>
            <p className="text-2xl text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-xl xl:leading-[36px] xl:max-w-full">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
        <div className="pt-30 flex justify-center mb-[57px] xl:mb-0">
          <Commonbutton
            text="See more features"
            href="/"
            variant="borderedgreen"
            Buttonclass="p-30"
          />
        </div>
      </div>
    </div>
  );
}
