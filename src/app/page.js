import Assessments from "@/component/homecomponents/assessments";
import Classmanage from "@/component/homecomponents/classmanage";
import Cludesoftware from "@/component/homecomponents/cludesoftware";
import Discussions from "@/component/homecomponents/discussions";
import Everything from "@/component/homecomponents/everything";
import Explorecourse from "@/component/homecomponents/explorecourse";
import Fetures from "@/component/homecomponents/fetures";
import Herobanner from "@/component/homecomponents/herobanner";
import Latestnews from "@/component/homecomponents/news";
import Success from "@/component/homecomponents/success";
import Testimonial from "@/component/homecomponents/testimonial";
import Toolteacher from "@/component/homecomponents/toolteacher";
import Whattotc from "@/component/homecomponents/whattotc";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Success />
      <Cludesoftware />
      <Whattotc />
      <Everything />
      <Fetures />
      <Toolteacher />
      <Assessments />
      <Classmanage />
      <Discussions />
      {/* <Explorecourse /> */}
      <Testimonial />
      <Latestnews />
    </>
  );
}
