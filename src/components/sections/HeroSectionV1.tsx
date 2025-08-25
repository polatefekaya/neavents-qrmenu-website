import Button from "../ui/Button";
import IridescentGradient from "../ui/IridescentGradient";
import Image from "next/image";

function HeroSectionV1() {
  const heroColors = [ "#ecfccb", "#d9f99d", "#f7fee7"];

  return (
    <>
      <div className="flex relative h-130 w-11/12 max-w-7xl m-auto overflow-hidden justify-left self-center rounded-3xl border-1 border-neon-lime-100">
          <div className="absolute h-full w-full">
            <IridescentGradient
              colors={heroColors}
              blur={70}
              isAnimated={true}
              opacity={1}
              seed={12345676}
              className="absolute h-full w-full"
              //12345676
            />
          </div>
        <div className="relative z-10 ml-8 md:ml-36 flex flex-row items-center justify-center  text-left h-full">
          <div className="">
                  <Image className="mb-8 md:mb-10"
                    src="/images/neavents-black-logo.png"
                    alt="Neavents Logo"
                    width={90} 
                    height={35}
                    priority
                  />
            <h1 className="text-5xl font-medium">Neavents SmartMenu</h1>
            <div className="mt-2 text-lg flex flex-col md:flex-row text-black/50">
              <p>Işık Hızında QR Menü,</p>
                    <span className="bg-clip-text md:ml-1.5 text-neon-lime-700">Anında Cebinde.</span>
            </div>
            <div className="flex">
              <Button buttonType="primary" href="#" className="" label="Deneme Butonu"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionV1;
