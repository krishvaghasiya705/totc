import React from "react";
import assessmentsimage from "@/assets/image/assessmentsimage.png"
import Image from "next/image";

export default function Assessments() {
  return (
    <div className="pt-[160px]">
      <div className="container3">
        <div className="flex justify-between items-center gap-30">
          <div className="w-[calc(100%-700px)]">
            <Image src={assessmentsimage} alt="assessmentsimage" width={1000} height={1000} />
          </div>
          <div className="max-w-[596px]">
            <h3 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 max-w-[347px]">
              Assessments, <span className="text-greenmuted">Quizzes</span>,
              Tests
            </h3>
            <p className="max-w-[837px] text-[22px] font-normal leading-[40px] text-lightpurplemuted">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
