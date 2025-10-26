import React from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  return (
    <header className="flex w-[1279px] justify-center items-center gap-[69px] absolute h-[73px] bg-[#F6FEF3] px-[9px] py-[13px] rounded-[22px] left-[311px] top-[39px] max-md:w-[calc(100%_-_40px)] max-md:gap-5 max-md:flex-wrap max-md:h-auto max-md:p-2.5 max-md:left-5 max-md:top-5 max-sm:w-[calc(100%_-_32px)] max-sm:gap-2.5 max-sm:left-4 max-sm:top-4">
      <div className="w-[165px] h-[43px] shrink-0 relative max-sm:w-[120px] max-sm:h-8">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/051d09b721a10c32c945e5ddf0ae9d373e0fb357?width=330"
          alt="Finverra Logo"
          className="w-[165px] h-[43px] shrink-0 aspect-[165/43] absolute left-0 top-0 max-sm:w-[120px] max-sm:h-8"
        />
        <div className="w-[90px] h-[37px] shrink-0 absolute bg-white rounded-[3px] left-[75px] top-[3px] max-sm:w-[65px] max-sm:h-7 max-sm:left-[55px] max-sm:top-0.5" />
        <div className="w-[86px] h-[19px] shrink-0 text-black text-xl font-[860] leading-[18px] absolute left-[77px] top-3 max-sm:text-base max-sm:left-[57px] max-sm:top-2">
          Finverra
        </div>
      </div>
      
      <nav className="flex w-[645px] justify-center items-center gap-[38px] shrink-0 relative max-md:hidden">
        <a href="#invest" className="text-black text-[15px] font-[510] leading-[13.5px] hover:text-gray-600 transition-colors">
          Invest
        </a>
        <a href="#simulate" className="text-black text-[15px] font-[510] leading-[13.5px] hover:text-gray-600 transition-colors">
          Simulate
        </a>
        <a href="#prices" className="text-black text-[15px] font-[510] leading-[13.5px] hover:text-gray-600 transition-colors">
          Prices
        </a>
        <a href="#about" className="text-black text-[15px] font-[510] leading-[13.5px] hover:text-gray-600 transition-colors">
          About
        </a>
        <a href="#media" className="text-black text-[15px] font-[510] leading-[13.5px] hover:text-gray-600 transition-colors">
          In Place - The Media
        </a>
      </nav>
      
      <div className="flex justify-center items-center gap-[13px] relative max-sm:gap-2">
        <Button variant="outline" className="px-[18px] py-[17px] max-sm:px-3.5 max-sm:py-3">
          <span className="max-sm:text-[13px]">Connection</span>
        </Button>
        
        <div className="relative">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="121" height="46" viewBox="0 0 121 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="launch-btn" style="display: flex; padding: 11px 10px; align-items: center; gap: 4px; border-radius: 10px; background: #8DF868; position: relative; width: 121px; height: 46px; cursor: pointer;">
                <rect width="121" height="46" rx="10" fill="#8DF868"></rect>
                <text fill="black" xml:space="preserve" style="white-space: pre" font-family="SF Pro" font-size="15" font-weight="bold" letter-spacing="0em"><tspan x="10" y="28.332">To launch</tspan></text>
                <circle cx="99" cy="23" r="12" fill="black"></circle>
                <path d="M104.221 22.6509C104.221 22.9146 104.13 23.1343 103.95 23.3101L100.229 27.0234C100.043 27.209 99.8359 27.3018 99.6064 27.3018C99.3428 27.3018 99.1304 27.2212 98.9692 27.0601C98.8081 26.894 98.7275 26.6914 98.7275 26.4521C98.7275 26.3154 98.752 26.1958 98.8008 26.0933C98.8545 25.9858 98.9229 25.8931 99.0059 25.8149L100.17 24.6431L102.126 22.8633L102.507 23.4199L100.192 23.5518H93.9302C93.6519 23.5518 93.4272 23.4688 93.2563 23.3027C93.0854 23.1367 93 22.9194 93 22.6509C93 22.3872 93.0854 22.1724 93.2563 22.0063C93.4272 21.8403 93.6519 21.7573 93.9302 21.7573H100.192L102.507 21.8892L102.126 22.4458L100.17 20.666L99.0059 19.4868C98.9229 19.4087 98.8545 19.3184 98.8008 19.2158C98.752 19.1084 98.7275 18.9863 98.7275 18.8496C98.7275 18.6104 98.8081 18.4102 98.9692 18.249C99.1304 18.083 99.3428 18 99.6064 18C99.8359 18 100.043 18.0928 100.229 18.2783L103.95 21.9917C104.13 22.1724 104.221 22.3921 104.221 22.6509Z" fill="#8DF868"></path>
              </svg>`
            }}
          />
        </div>
      </div>
    </header>
  );
};
