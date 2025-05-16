import Rightarroslim from "@/assets/icon/rightarroslim";
import Link from "next/link";
import React from "react";

export default function Commonbuttontwo({
  text,
  href = "#",
  Buttonclass = "",
  ChildButtonclass = "",
  variant = "borderedgreen",
  childvariant = "borderedgreen",
}) {
  const baseStyles =
    "pl-9 rounded-full text-[22px] font-normal leading-[35px] flex items-center gap-[26px] transition-all delay-400 ease-in-out";
  const ChildbaseStyles =
    "w-[70px] h-[70px] -my-[1px] -mr-[1px] flex justify-center items-center rounded-full border-[1px] border-green bg-white transition-all delay-400 ease-in-out";
  const variantStyles = {
    borderedgreen:
      "bg-transparent border-solid border-[1px] border-green text-green group-hover:bg-green group-hover:border-green group-hover:text-white",
  };
  const childvariantStyles = {
    borderedgreen:
      "",
  };
  return (
    <>
      <Link href={href} className="group">
        <button
          type="button"
          className={`${baseStyles} ${variantStyles[variant]} ${Buttonclass}`}
        >
          {text}
          <div
            className={`${ChildbaseStyles} ${childvariantStyles[childvariant]} ${ChildButtonclass}`}
          >
            <Rightarroslim />
          </div>
        </button>
      </Link>
    </>
  );
}
