import React from 'react';
import { BentoCardProps } from '../types.ts';

export const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = "", 
  colSpan = "col-span-1", 
  rowSpan = "row-span-1" 
}) => {
  return (
    <div 
      className={`
        bg-[var(--slate2)] border border-[var(--slate6)] rounded-[2.5rem]
        transition-all duration-300 hover:border-[var(--slate8)]
        flex flex-col relative overflow-hidden group shadow-lg
        ${colSpan} ${rowSpan} ${className}
      `}
    >
      {children}
    </div>
  );
};