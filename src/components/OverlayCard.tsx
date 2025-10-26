import React from 'react';

interface OverlayCardProps {
  title: string;
  value: string;
  badge?: {
    text: string;
    type: 'percentage' | 'status';
    icon?: React.ReactNode;
  };
  className?: string;
}

export const OverlayCard: React.FC<OverlayCardProps> = ({ 
  title, 
  value, 
  badge, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-[17px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-4 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-black text-[13px] font-normal leading-[11.7px]">
          {title}
        </div>
        {badge && (
          <div className="flex justify-center items-center gap-1 bg-[#8DF969] px-1 py-[5px] rounded-[5px]">
            <span className="text-black text-[13px] font-bold leading-[11.7px]">
              {badge.text}
            </span>
            {badge.icon}
          </div>
        )}
      </div>
      <div className="text-black font-[510] leading-tight">
        {value}
      </div>
    </div>
  );
};
