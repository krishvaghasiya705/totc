import Link from "next/link";
import React from "react";

export default function Commonbutton({
  text,
  href = "#",
  Buttonclass = "",
  variant = "primary",
}) {
  const baseStyles =
    "py-3 px-12 rounded-full text-[22px] font-medium leading-8 transition-all delay-400 ease-in-out";
  const variantStyles = {
    primary: "bg-white text-cusgray group-hover:bg-whitelight group-hover:text-white",
    secondary: "bg-whitelight text-white group-hover:bg-white group-hover:text-cusgray",
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
