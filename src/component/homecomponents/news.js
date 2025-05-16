import Image from "next/image";
import React from "react";
import newsimage1 from "@/assets/image/newsimage1.png";
import newsimage2 from "@/assets/image/newsimage2.png";
import newsimage3 from "@/assets/image/newsimage3.png";
import newsimage4 from "@/assets/image/newsimage4.png";

export default function Latestnews() {
  return (
    <div className="pt-[150px] pb-[115px]">
      <div className="container2">
        <div className="flex items-center justify-center flex-col mb-100">
          <h2 className="text-4xl font-bold leading-[65px] text-cusblue mb-5">
            Lastest News and Resources
          </h2>
          <p className="max-w-[700px] text-center text-2xl font-normal leading-[44px] font-Nunito text-lightpurplemuted">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>
        <div className="flex gap-30 justify-between">
          <div className="max-w-[640px] w-full">
            <div className="h-[340px]">
              <Image
                src={newsimage1}
                alt="newsimage1"
                width={1000}
                height={1000}
                className="rounded-[20px]"
              />
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="bg-green rounded-full py-[2px] px-9 border-none outline-none"
              >
                <span className="text-xl font-medium leading-9 text-white">
                  NEWS
                </span>
              </button>

              <h3 className="mt-5 text-[26px] font-medium leading-[47px] text-cuslightblue">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h3>
              <p className="mt-5 mb-7 text-[20px] font-normal leading-[36px] text-lightpurplemuted">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <span className="text-[20px] font-normal leading-[36px] text-lightpurplemuted underline cursor-pointer">
                Read more
              </span>
            </div>
          </div>
          <div className="max-w-[797px] w-full">
            <div className="flex flex-col gap-50">
              <div className="flex justify-between gap-10">
                <div className="max-w-[280px] w-full relative">
                  <Image
                    src={newsimage2}
                    alt="newsimage2"
                    width={1000}
                    height={1000}
                    className="rounded-[20px]"
                  />
                  <button
                    type="button"
                    className="bg-green rounded-full py-[4px] px-3 border-none outline-none absolute bottom-5 right-5"
                  >
                    <span className="text-xl font-medium leading-9 text-white">
                      PRESS RELEASE
                    </span>
                  </button>
                </div>
                <div>
                  <h4 className="text-[22px] font-medium leading-[40px] text-cuslightblue mb-5">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h4>
                  <p className="text-[20px] font-normal leading-[36px] text-lightpurplemuted">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-10">
                <div className="max-w-[280px] w-full relative">
                  <Image
                    src={newsimage3}
                    alt="newsimage3"
                    width={1000}
                    height={1000}
                    className="rounded-[20px]"
                  />
                  <button
                    type="button"
                    className="bg-green rounded-full py-[4px] px-3 border-none outline-none absolute bottom-5 right-5"
                  >
                    <span className="text-xl font-medium leading-9 text-white">
                      NEWS
                    </span>
                  </button>
                </div>
                <div>
                  <h4 className="text-[22px] font-medium leading-[40px] text-cuslightblue mb-5">
                    Zoom&apos;s earliest investors are betting millions on a better
                    Zoom for schools
                  </h4>
                  <p className="text-[20px] font-normal leading-[36px] text-lightpurplemuted">
                    Zoom was never created to be a consumer product.
                    Nonetheless, the...
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-10">
                <div className="max-w-[280px] w-full relative">
                  <Image
                    src={newsimage4}
                    alt="newsimage4"
                    width={1000}
                    height={1000}
                    className="rounded-[20px]"
                  />
                  <button
                    type="button"
                    className="bg-green rounded-full py-[4px] px-3 border-none outline-none absolute bottom-5 right-5"
                  >
                    <span className="text-xl font-medium leading-9 text-white">
                      NEWS
                    </span>
                  </button>
                </div>
                <div>
                  <h4 className="text-[22px] font-medium leading-[40px] text-cuslightblue mb-5">
                    Former Blackboard CEO Raises $16M to Bring LMS Features to
                    Zoom Classrooms
                  </h4>
                  <p className="text-[20px] font-normal leading-[36px] text-lightpurplemuted">
                    This year, investors have reaped big financial returns from
                    betting on Zoom...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
