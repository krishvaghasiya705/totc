import React from "react";
import clasmanageimage from "@/assets/image/clasmanageimage.png";
import Image from "next/image";

export default function Classmanage() {
  return (
    <div className="pt-[160px]">
      <div className="container3">
        <div className="flex justify-between items-center gap-30">
          <div className="max-w-[645px]">
            <h4 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 max-w-[420px]">
              <span className="text-greenmuted">Class Management</span> Tools
              for Educators
            </h4>
            <p className="max-w-[837px] text-[22px] font-normal leading-[40px] text-lightpurplemuted">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className="w-[calc(100%-700px)]">
            <Image
              src={clasmanageimage}
              alt="clasmanageimage"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
