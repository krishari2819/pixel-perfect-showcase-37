import React from 'react';
export const HeroSection: React.FC = () => {
  const handleSimulateClick = () => {
    // Handle simulate button click
    console.log('Simulate clicked');
  };
  return <section className="w-[687px] h-[295px] shrink-0 absolute left-[311px] top-[299px] max-md:w-[calc(100%_-_40px)] max-md:h-auto max-md:left-5 max-md:top-[150px] max-sm:w-[calc(100%_-_32px)] max-sm:left-4 max-sm:top-[120px]">
      <h1 className="w-[687px] shrink-0 text-black text-[80px] font-bold leading-[72px] absolute left-0 top-0 max-md:w-full max-md:text-5xl max-md:leading-[48px] max-sm:text-4xl max-sm:leading-[37.8px]">Your journey to effortless investing starts here</h1>
      
      <p className="w-[687px] shrink-0 text-black text-xl font-[510] leading-[25.2px] absolute left-0 top-[260px] max-md:w-full max-md:text-lg max-md:top-[200px] max-sm:text-base max-sm:top-[220px]">
        We help you build wealth confidently, with tools designed for every kind of investor.
      </p>
      
      <button onClick={handleSimulateClick} className="absolute left-0 top-[327px] max-md:top-[250px] max-sm:top-[270px]" aria-label="Start simulation">
        <div dangerouslySetInnerHTML={{
        __html: `<svg width="123" height="47" viewBox="0 0 123 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-btn" style="display: inline-flex; padding: 12px 10px 11px 12px; justify-content: center; align-items: center; gap: 10px; border-radius: 10px; background: #000; width: 123px; height: 47px; cursor: pointer;">
              <rect width="123" height="47" rx="10" fill="black"></rect>
              <text fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro" font-size="15" font-weight="bold" letter-spacing="0em"><tspan x="12" y="28.832">Simulate</tspan></text>
              <circle cx="101" cy="24" r="12" fill="#8DF868"></circle>
              <path d="M106.221 23.6509C106.221 23.9146 106.13 24.1343 105.95 24.3101L102.229 28.0234C102.043 28.209 101.836 28.3018 101.606 28.3018C101.343 28.3018 101.13 28.2212 100.969 28.0601C100.808 27.894 100.728 27.6914 100.728 27.4521C100.728 27.3154 100.752 27.1958 100.801 27.0933C100.854 26.9858 100.923 26.8931 101.006 26.8149L102.17 25.6431L104.126 23.8633L104.507 24.4199L102.192 24.5518H95.9302C95.6519 24.5518 95.4272 24.4688 95.2563 24.3027C95.0854 24.1367 95 23.9194 95 23.6509C95 23.3872 95.0854 23.1724 95.2563 23.0063C95.4272 22.8403 95.6519 22.7573 95.9302 22.7573H102.192L104.507 22.8892L104.126 23.4458L102.17 21.666L101.006 20.4868C100.923 20.4087 100.854 20.3184 100.801 20.2158C100.752 20.1084 100.728 19.9863 100.728 19.8496C100.728 19.6104 100.808 19.4102 100.969 19.249C101.13 19.083 101.343 19 101.606 19C101.836 19 102.043 19.0928 102.229 19.2783L105.95 22.9917C106.13 23.1724 106.221 23.3921 106.221 23.6509Z" fill="black"></path>
            </svg>`
      }} />
      </button>
    </section>;
};