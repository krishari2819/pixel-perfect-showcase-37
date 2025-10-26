import React from 'react';
import { OverlayCard } from './OverlayCard';

export const HeroImage: React.FC = () => {
  const highArrowIcon = (
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="high-arrow" style="width: 18px; height: 10px; flex-shrink: 0; fill: #000;">
          <path d="M1.26 10L0 8.83333L6.66 2.625L10.26 5.95833L14.94 1.66667H12.6V0H18V5H16.2V2.83333L10.26 8.33333L6.66 5L1.26 10Z" fill="black"></path>
        </svg>`
      }}
    />
  );

  return (
    <div className="relative">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8fe2b6a08bad46155b20206781d5103e08b87e10?width=868"
        alt="Investment dashboard showing portfolio performance"
        className="w-[434px] h-[540px] shrink-0 aspect-[217/270] absolute rounded-[26px] left-[1175px] top-[187px] max-md:w-[300px] max-md:h-[375px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[350px] max-sm:w-[250px] max-sm:h-[312px] max-sm:top-[350px]"
      />
      
      <OverlayCard
        title="Portfolio"
        value="1 571,90$"
        badge={{ text: "+8,37 %", type: "percentage" }}
        className="w-[227px] h-[109px] absolute left-[1080px] top-[281px] max-md:left-5 max-md:top-[750px] max-sm:w-[calc(50%_-_20px)] max-sm:left-4 max-sm:top-[700px]"
      />
      
      <OverlayCard
        title="Profit"
        value="3 928,47$"
        badge={{ text: "High", type: "status", icon: highArrowIcon }}
        className="w-[226px] h-[75px] absolute left-[1515px] top-[543px] max-md:left-[260px] max-md:top-[750px] max-sm:w-[calc(50%_-_20px)] max-sm:left-[calc(50%_+_4px)] max-sm:top-[700px]"
      />
      
      <div className="flex w-[375px] h-[38px] justify-center items-center gap-2.5 shrink-0 absolute bg-white px-[18px] py-2 rounded-[31px] left-[1204px] top-[676px] max-md:w-[calc(100%_-_40px)] max-md:left-5 max-md:top-[850px] max-sm:w-[calc(100%_-_32px)] max-sm:text-xs max-sm:left-4 max-sm:top-[800px]">
        <div className="text-black text-[13px] font-[510] leading-[11.7px] relative">
          💚 John and Doe, members since 2022 and 2023
        </div>
      </div>
    </div>
  );
};
