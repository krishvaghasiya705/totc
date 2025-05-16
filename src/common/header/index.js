import React from "react";
import Link from "next/link";
import Logo from "@/assets/icon/logo";
import Commonbutton from "@/component/commonbutton";
import Menuicon from "@/assets/icon/menuicon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 py-3 w-full bg-green">
      <div className="container">
        <div className="flex justify-between gap-30 xl:items-center">
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-20 lg:w-full lg:gap-5 lg:justify-between xl:hidden">
            <div className="flex items-center gap-20 lg:w-[calc(100%-379px)] lg:gap-5 lg:justify-between">
              <Link
                href={"/"}
                className="text-white text-[20px] font-normal leading-8"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-white text-[20px] font-normal leading-8"
              >
                Courses
              </Link>
              <Link
                href={"/"}
                className="text-white text-[20px] font-normal leading-8"
              >
                Careers
              </Link>
              <Link
                href={"/"}
                className="text-white text-[20px] font-normal leading-8"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="text-white text-[20px] font-normal leading-8"
              >
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Commonbutton text="Login" href="/" variant="primary" />
              <Commonbutton text="Sign Up" href="/" variant="secondary" />
            </div>
          </div>

          <div className="hidden xl:block w-30 h-30">
            <Menuicon />
          </div>
        </div>
      </div>
    </header>
  );
}
