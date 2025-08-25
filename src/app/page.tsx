import Footer from "@/components/sections/Footer";
import HeroSectionV1 from "@/components/sections/HeroSectionV1";
import HeroSectionV2 from "@/components/sections/HeroSectionV2";
import IridescentGradient from "@/components/ui/IridescentGradient";
import Image from "next/image";

export default function Home() {
  const heroColors = ['#ff7e5f', '#feb47b','#ff42g1'];
  const cardColors = ['#89f7fe', '#66a6ff'];
  const footerColors = ['#43e97b', '#38f9d7'];

  return (
    <div className="min-h-screen w-full pt-12  bg-white text-black">

        <HeroSectionV1/>
        {/* <HeroSectionV2 /> */}

    </div>
  );
}
