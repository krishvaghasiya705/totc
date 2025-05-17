import Logo from "@/assets/icon/logo";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-cuslightblue pt-[74px] pb-10">
      <div className="container">
        <div className="max-w-[599px] mx-auto">
          <div className="flex items-center justify-between max-w-[388px] mx-auto">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div className="pl-[41px] ml-[77px] border-l-[1px] border-l-borderlightpurple">
              <span className="text-[22px] font-semibold leading-[33px] text-white max-w-[156px]">
                Virtual Class for Zoom
              </span>
            </div>
          </div>
          <p className="mt-[95px] mb-5 text-[26px] font-medium leading-[39px] text-lightpurplemuted4 text-center">
            Subscribe to get our Newsletter
          </p>
          <div className="flex items-center gap-5 mb-[96px]">
            <input
              type="email"
              placeholder="Your Email"
              className="py-[14px] px-30 rounded-full border-[1px] border-borderlightpurple2 bg-transparent w-full text-borderlightpurple2 text-xl font-normal leading-[30px]"
            />
            <button
              type="button"
              className="pt-[14px] pb-[13px] px-[34px] bg-green rounded-full cursor-pointer"
            >
              <span className="text-[22px] font-medium leading-[33px] text-white">
                Subscribe
              </span>
            </button>
          </div>
          <div className="flex justify-between items-center gap-5 mb-5">
            <Link href={"/"} className="pr-5 text-[22px] font-normal leading-[33px] text-lightpurplemuted4 relative before:absolute before:top-2/4 before:right-0 before:-translate-y-2/4 before:h-[17px] before:w-[1px] before:bg-borderlightpurple">Careers</Link>
            <Link href={"/"} className="pr-5 text-[22px] font-normal leading-[33px] text-lightpurplemuted4 relative before:absolute before:top-2/4 before:right-0 before:-translate-y-2/4 before:h-[17px] before:w-[1px] before:bg-borderlightpurple">Privacy Policy</Link>
            <Link href={"/"} className="pr-5 text-[22px] font-normal leading-[33px] text-lightpurplemuted4 relative">Terms & Conditions</Link>
          </div>
          <p className="text-[22px] font-normal leading-[33px] text-center text-lightpurplemuted4">© 2021 Class Technologies Inc. </p>
        </div>
      </div>
    </footer>
  );
}
