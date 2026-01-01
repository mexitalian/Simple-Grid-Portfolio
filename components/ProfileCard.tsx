import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { PROFILE_INFO } from '../constants.tsx';
import { MapPin } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-28 h-28 rounded-[2rem] border border-[var(--slate6)] bg-[var(--slate3)] shadow-xl">
          <Avatar.Image
            className="w-full h-full object-cover rounded-[inherit]"
            src={PROFILE_INFO.avatar}
            alt={PROFILE_INFO.name}
          />
          <Avatar.Fallback
            className="w-full h-full flex items-center justify-center bg-[var(--slate4)] text-[var(--slate11)] text-2xl font-bold"
            delayMs={600}
          >
            {PROFILE_INFO.name.charAt(0)}
          </Avatar.Fallback>
        </Avatar.Root>
        
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-black tracking-tight text-[var(--slate12)]">{PROFILE_INFO.name}</h1>
          <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">{PROFILE_INFO.handle}</p>
          <div className="flex items-center gap-1.5 text-[var(--slate11)] mt-2 justify-center md:justify-start font-medium">
            <MapPin size={14} className="text-[var(--slate9)]" />
            <span className="text-xs uppercase tracking-wider">{PROFILE_INFO.location}</span>
          </div>
        </div>
      </div>
      
      <p className="text-[var(--slate11)] text-lg leading-relaxed font-medium">
        {PROFILE_INFO.bio}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {['Product Design', 'Engineering', 'Creative Tech'].map(tag => (
          <span key={tag} className="px-4 py-1.5 bg-[var(--slate3)] border border-[var(--slate6)] rounded-xl text-[10px] font-bold text-[var(--slate11)] uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};