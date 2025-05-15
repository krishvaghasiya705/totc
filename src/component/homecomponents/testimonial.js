import React from "react";
import Commonbuttontwo from "../commonbuttontwo/commonbuttontwo";

export default function Testimonial() {
  return (
    <div className="pt-[130px]">
      <div className="container3">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-30 mb-8">
              <span className="h-[1px] w-20 bg-lightbluemuted"></span>
              <p className="text-xl font-normal leading-7 text-lightbluemuted">
                TESTIMONIAL
              </p>
            </div>
            <h1 className="text-6xl font-normal leading-[82px] mb-30 text-cusblue">
              What They Say?
            </h1>
            <p className="text-2xl leadin-[43px] font-normal text-lightpurplemuted mb-[26px]">
              TOTC has got more than 100k positive ratings from our users around
              the world.
            </p>
            <p className="text-2xl leadin-[43px] font-normal text-lightpurplemuted mb-[46px]">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-2xl leadin-[43px] font-normal text-lightpurplemuted mb-[43px]">
              Are you too? Please give your assessment
            </p>
            <div className="flex justify-start">
              <Commonbuttontwo
                variant="borderedgreen"
                childvariant="borderedgreen"
                href="/"
                text="Write your assessment"
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
