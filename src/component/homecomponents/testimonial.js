"use client";
import React from "react";
import Commonbuttontwo from "../commonbuttontwo/commonbuttontwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderimage from "@/assets/image/sliderimage.png";
import Image from "next/image";
import Staricon from "@/assets/icon/staricon";
import Sliderarrow from "@/assets/icon/sliderarrow";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[30%] right-[35%] -translate-y-[30%]"
      onClick={onClick}
    >
      <div className="bg-white shadow-shadow3 rounded-full cursor-pointer w-[80px] h-[80px] flex justify-center items-center">
        <Sliderarrow />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="none" onClick={onClick} />;
}

export default function Testimonial() {
  var settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-[130px]">
      <div className="container3">
        <div className="flex justify-between items-center gap-5">
          <div className="max-w-[607px]">
            <div className="flex items-center gap-30 mb-8">
              <span className="h-[1px] w-20 bg-lightbluemuted"></span>
              <p className="text-xl font-normal leading-7 text-lightbluemuted tracking-[3px]">
                TESTIMONIAL
              </p>
            </div>
            <h1 className="text-6xl font-bold leading-[82px] mb-30 text-cusblue font-Nunito">
              What They Say?
            </h1>
            <p className="text-[26px] leadin-[42px] font-normal text-lightpurplemuted mb-[26px]">
              TOTC has got more than 100k positive ratings from our users around
              the world.
            </p>
            <p className="text-[26px] leadin-[42px] font-normal text-lightpurplemuted mb-[46px]">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-[26px] leadin-[42px] font-normal text-lightpurplemuted mb-[43px]">
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
          <div className="max-w-[749px] w-full">
            <Slider {...settings}>
              <div>
                <div className="relative pb-[120px]">
                  <div className="max-w-[450px] h-[600px]">
                    <Image
                      src={sliderimage}
                      alt="sliderimage"
                      width={1000}
                      height={1000}
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="ml-[69px] absolute bottom-0 left-0 w-[calc(100%-69px)]">
                    <div className="rounded-[20px] overflow-hidden bg-white pl-[55px] pr-[42px] pb-[29px] pt-[41px] relative before:absolute before:left-0 before:top-0 before:bg-redmuted before:h-full before:w-[14px]">
                      <div>
                        <p className="border-l-[1px] border-l-whitelight3 pl-8 text-[22px] font-normal leading-10 text-lightpurplemuted2 mb-30 font-Nunito">
                          &quot;Thank you so much for your help. It&apos;s
                          exactly what I&apos;ve been looking for. You
                          won&apos;t regret it. It really saves me time and
                          effort. TOTC is exactly what our business has been
                          lacking.&quot;
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-2xl font-semibold leading-[43px] text-lightpurplemuted2 font-Nunito">
                            Gloria Rose
                          </p>
                          <div className="flex items-end flex-col gap-3">
                            <div className="flex items-center gap-1">
                              <Staricon />
                              <Staricon />
                              <Staricon />
                              <Staricon />
                              <Staricon />
                            </div>
                            <span className="text-lg font-semibold leading-8 text-lightpurplemuted3 font-Nunito">
                              12 reviews at Yelp
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative pb-[120px]">
                  <div className="max-w-[450px] h-[600px]">
                    <Image
                      src={sliderimage}
                      alt="sliderimage"
                      width={1000}
                      height={1000}
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="ml-[69px] absolute bottom-0 left-0 w-[calc(100%-69px)]">
                    <div className="rounded-[20px] overflow-hidden bg-white pl-[55px] pr-[42px] pb-[29px] pt-[41px] relative before:absolute before:left-0 before:top-0 before:bg-redmuted before:h-full before:w-[14px]">
                      <div>
                        <p className="border-l-[1px] border-l-whitelight3 pl-8 text-[22px] font-normal leading-10 text-lightpurplemuted2 mb-30 font-Nunito">
                          &quot;Thank you so much for your help. It&apos;s
                          exactly what I&apos;ve been looking for. You
                          won&apos;t regret it. It really saves me time and
                          effort. TOTC is exactly what our business has been
                          lacking.&quot;
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-2xl font-semibold leading-[43px] text-lightpurplemuted2 font-Nunito">
                            Gloria Rose
                          </p>
                          <div className="flex items-end flex-col gap-3">
                            <div className="flex items-center gap-1">
                              <Staricon />
                              <Staricon />
                              <Staricon />
                              <Staricon />
                              <Staricon />
                            </div>
                            <span className="text-lg font-semibold leading-8 text-lightpurplemuted3 font-Nunito">
                              12 reviews at Yelp
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
