import React from "react";
import toolimage from "@/assets/image/toolimage.png"
import Image from "next/image";

export default function Toolteacher() {
  return (
    <div className="pt-[160px]">
      <div className="container2">
        <div className="flex items-center gap-30 justify-between">
          <div className="max-w-[568px]">
            <h2 className="text-4xl font-bold leading-[65px] text-cusblue mb-5">
              <span className="text-greenmuted">Tools</span> For Teachers And
              Learners
            </h2>
            <p className="max-w-[837px] text-2xl font-normal leading-[44px] text-lightpurplemuted">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className="max-w-[637px]">
            <Image src={toolimage} alt="toolimage" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
