import React from "react";
import discussionsimage from "@/assets/image/discussionsimage.png";
import Image from "next/image";
import Commonbutton from "../commonbutton";

export default function Discussions() {
  return (
    <div className="pt-[160px]">
      <div className="container3">
        <div className="flex justify-between items-center gap-30">
          <div className="max-w-[755px]">
            <Image
              src={discussionsimage}
              alt="discussionsimage"
              width={1000}
              height={1000}
            />
          </div>
          <div className="max-w-[540px]">
            <h5 className="text-4xl font-bold leading-[65px] text-cusblue mb-5 max-w-[274px]">
              One-on-One <span className="text-greenmuted">Discussions</span>
            </h5>
            <p className="text-2xl font-normal leading-[44px] text-lightpurplemuted">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
        <div className="pt-[150px] flex justify-center mb-[57px]">
             <Commonbutton text="See more features" href="/" variant="borderedgreen" Buttonclass="p-30" />
        </div>
      </div>
    </div>
  );
}
