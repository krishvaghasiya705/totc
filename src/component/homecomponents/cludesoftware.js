import Calendericon from "@/assets/icon/calendericon";
import Pageicon from "@/assets/icon/pageicon";
import Supporticon from "@/assets/icon/supporticon";
import React from "react";

export default function Cludesoftware() {
  const Cloudecarddata = [
    {
      iconcolor: "bg-themeblue",
      icon: <Pageicon />,
      title: "Online Billing, Invoicing, & Contracts",
      paragraph:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    },
    {
      iconcolor: "bg-greenmuted",
      icon: <Calendericon />,
      title: "Easy Scheduling & Attendance Tracking",
      paragraph:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      iconcolor: "bg-themeskyblue",
      icon: <Supporticon />,
      title: "Customer Tracking",
      paragraph:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization ",
    },
  ];
  return (
    <div className="pt-[131px] xl:pt-100">
      <div className="container3">
        <div className="px-[28px] md:px-0">
          <div className="flex justify-center items-center flex-col mb-100 md:mb-50">
            <h3 className="text-4xl font-bold leading-[65px] text-cusblue mb-5">
              All-In-One{" "}
              <span className="text-greenmuted">Cloud Software.</span>
            </h3>
            <p className="max-w-[837px] text-center text-2xl font-normal leading-[44px] text-lightpurplemuted">
              TOTC is one powerful online software suite that combines all the
              tools needed to run a successful school or office.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-60 xl:grid-cols-2 md:!grid-cols-1 md:gap-30">
            {Cloudecarddata.map((i, index) => (
              <div className="relative pt-50 md:pt-30" key={index}>
                <div className="absolute top-0 left-2/4 -translate-x-2/4">
                  <div
                    className={`rounded-full w-100 h-100 flex justify-center items-center ${i.iconcolor} md:w-60 md:h-60 md:p-[20px]`}
                  >
                    {i.icon}
                  </div>
                </div>
                <div className="shadow-shadow1 w-full h-full flex items-center justify-between flex-col text-center px-9 pb-50 pt-[122px] rounded-[20px] md:pt-50">
                  <h4 className="text-[28px] font-medium leading-[45px] text-cusblue mb-6 lg:text-[25px]">
                    {i.title}
                  </h4>
                  <p className="text-lg leading-[30px] font-normal text-lightpurplemuted">
                    {i.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
