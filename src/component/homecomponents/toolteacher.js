import React from "react";
import toolimage from "@/assets/image/toolimage.png"
import Image from "next/image";

export default function Toolteacher() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container2">
        <div className="flex items-center gap-30 justify-between xl:flex-col-reverse">
          <div className="max-w-[568px] xl:max-w-full xl:w-full">
            <h2 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 max-w-[393px] xl:mb-5 xl:text-[38px] xl:leading-[54px] xl:max-w-full">
              <span className="text-greenmuted">Tools</span> For Teachers And
              Learners
            </h2>
            <p className="max-w-[837px] text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:max-w-full xl:text-[20px] xl:leading-[36px]">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className="w-[calc(100%-700px)] xl:w-full">
            <Image src={toolimage} alt="toolimage" width={1000} height={1000} className="xl:max-w-[600px] xl:mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
