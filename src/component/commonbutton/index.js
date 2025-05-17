import Link from "next/link";
import React from "react";

export default function Commonbutton({
  text,
  href = "#",
  Buttonclass = "",
  variant = "primary",
}) {
  const baseStyles =
    "pt-[12px] pb-[15px] pl-[39px] pr-[34px] rounded-full text-[22px] font-medium leading-8 transition-all delay-400 ease-in-out md:py-[18px] md:px-5 md:text-[18px] md:leading-7";
  const variantStyles = {
    primary: "bg-white text-cusgray group-hover:bg-whitelight group-hover:text-white",
    secondary: "bg-whitelight text-white group-hover:bg-white group-hover:text-cusgray",
    bordered: "bg-transparent border-solid border-[1px] border-white text-white group-hover:bg-skybluemuted group-hover:border-skybluemuted",
    borderedgreen: "bg-transparent border-solid border-[1px] border-green text-green group-hover:bg-green group-hover:border-green group-hover:text-white",
  };

  return (
    <Link href={href} className="group">
      <button
        type="button"
        className={`${baseStyles} ${variantStyles[variant]} ${Buttonclass}`}
      >
        {text}
      </button>
    </Link>
  );
}
