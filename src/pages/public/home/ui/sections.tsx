import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import { Footer } from "@/widgets/footer";

const Page = () => {
  return (
    <div className="flex sm:block">
      <div className="max-w-[1000px] w-full h-[960px] left-[-535px] top-[-558px] absolute bg-gradient-to-r from-[#F74D4D] via-[#F74D4D] to-[#BF09FF] rounded-full blur-[300px] z-10" />

      <div className="py-[30px] h-auto">
        <HeroSection />
        <div className="flex flex-col gap-y-[50px] sm:gap-y-[170px]">
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </div>
        <div className="mt-[250px]">
          <FifthSection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Page;
