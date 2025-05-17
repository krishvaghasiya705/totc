import React from "react";
import assessmentsimage from "@/assets/image/assessmentsimage.png";
import Image from "next/image";

export default function Assessments() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container3">
        <div className="flex justify-between gap-30 xl:flex-col xl:gap-0">
          <div className="w-[calc(100%-700px)] xl:w-full">
            <Image
              src={assessmentsimage}
              alt="assessmentsimage"
              width={1000}
              height={1000}
              className="xl:max-w-[600px] xl:mx-auto"
            />
          </div>
          <div className="max-w-[596px] mt-[150px] xl:mt-0 xl:max-w-full">
            <h3 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 xl:mb-5 xl:text-[38px] xl:leading-[54px] max-w-[347px] xl:max-w-full">
              Assessments, <span className="text-greenmuted">Quizzes</span>,
              Tests
            </h3>
            <p className="max-w-[540px] text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-xl xl:leading-[36px] xl:max-w-full">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
