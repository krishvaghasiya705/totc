import React from "react";
import Link from "next/link";
import Logo from "@/assets/icon/logo";
import Commonbutton from "@/component/commonbutton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 py-30 w-full bg-green">
      <div className="container">
        <div className="flex justify-between gap-30">
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-20">
              <Link
                href={"/"}
                className="text-white text-[22px] font-normal leading-8"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-white text-[22px] font-normal leading-8"
              >
                Courses
              </Link>
              <Link
                href={"/"}
                className="text-white text-[22px] font-normal leading-8"
              >
                Careers
              </Link>
              <Link
                href={"/"}
                className="text-white text-[22px] font-normal leading-8"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="text-white text-[22px] font-normal leading-8"
              >
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Commonbutton text="Login" href="/" variant="primary" />
              <Commonbutton text="Sign Up" href="/" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
