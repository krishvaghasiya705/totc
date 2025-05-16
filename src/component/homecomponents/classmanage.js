import React from "react";
import clasmanageimage from "@/assets/image/clasmanageimage.png";
import Image from "next/image";

export default function Classmanage() {
  return (
    <div className="pt-[150px] xl:pt-100">
      <div className="container3">
        <div className="flex justify-between items-center gap-30 xl:flex-col-reverse xl:gap-0">
          <div className="max-w-[645px] xl:max-w-full">
            <h4 className="text-[40px] font-semibold leading-[64px] text-cusblue mb-5 max-w-[420px] xl:mb-5 xl:text-[38px] xl:leading-[54px] xl:max-w-full">
              <span className="text-greenmuted">Class Management</span> Tools
              for Educators
            </h4>
            <p className="max-w-[837px] text-[22px] font-normal leading-[40px] text-lightpurplemuted xl:text-[20px] xl:leading-[36px] xl:max-w-full">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className="w-[calc(100%-700px)] xl:w-full">
            <Image
              src={clasmanageimage}
              alt="clasmanageimage"
              width={1000}
              height={1000}
              className="xl:max-w-[600px] xl:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
