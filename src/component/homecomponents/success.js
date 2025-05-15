import React from "react";

export default function Success() {
  return (
    <div className="pt-[134px]">
      <div className="container3">
        <div className="flex justify-center items-center flex-col text-center mb-100">
          <h2 className="text-5xl font-bold text-black2 mb-4">Our Success</h2>
          <p className="max-w-[750px] text-[18px] leading-[27px] text-black2muted">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
        <div className="flex justify-between items-center gap-30">
          <div className="flex flex-col items-center">
            <span className="text-8xl font-light text-gradiented">15K+</span>
            <p className="text-[32px] leading-[42px] font-normal text-black2muted">Students</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-8xl font-light text-gradiented">75 %</span>
            <p className="text-[32px] leading-[42px] font-normal text-black2muted">Total success</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-8xl font-light text-gradiented">35</span>
            <p className="text-[32px] leading-[42px] font-normal text-black2muted">Main questions</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-8xl font-light text-gradiented">26</span>
            <p className="text-[32px] leading-[42px] font-normal text-black2muted">Chief experts</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-8xl font-light text-gradiented">16</span>
            <p className="text-[32px] leading-[42px] font-normal text-black2muted">Years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
