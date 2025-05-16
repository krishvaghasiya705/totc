import Image from "next/image";
import React from "react";
import whatimage1 from "@/assets/image/whatimage1.png";
import whatimage2 from "@/assets/image/whatimage2.png";
import Commonbutton from "../commonbutton";

export default function Whattotc() {
  return (
    <div className="pt-[158px]">
      <div className="container4">
        <div className="flex justify-center items-center flex-col mb-[77px]">
          <h4 className="text-[44px] font-semibold leading-[79px] text-cusblue mb-5">
            What is <span className="text-greenmuted">TOTC?</span>
          </h4>
          <p className="max-w-[1101px] text-center text-2xl font-normal leading-[44px] text-lightpurplemuted">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="flex justify-between items-center gap-30">
          <div className="group w-full max-w-[600px] relative h-[400px] rounded-[20px] overflow-hidden before:bg-cusblue2light before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10">
            <div className="relative">
              <Image
                src={whatimage1}
                alt="whatimage1"
                width={1000}
                height={1000}
              />
              <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center flex-col">
                <span className="text-[32px] leading-[48px] font-semibold text-white">FOR INSTRUCTORS</span>
                <div className="mt-[17px] flex justify-center">
                 <Commonbutton text="Start a class today" href="/" variant="bordered" Buttonclass="p-30" />
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full max-w-[600px] relative h-[400px] rounded-[20px] overflow-hidden before:bg-cusblue2light before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10">
            <div className="relative">
              <Image
                src={whatimage2}
                alt="whatimage2"
                width={1000}
                height={1000}
              />
              <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center flex-col">
                <span className="text-[32px] leading-[48px] font-semibold text-white">FOR STUDENTS</span>
                <div className="mt-[17px] flex justify-center">
                 <Commonbutton text="Enter access code" href="/" variant="bordered" Buttonclass="p-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
