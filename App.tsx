import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Separator from '@radix-ui/react-separator';
import * as Dialog from '@radix-ui/react-dialog';
import { BentoCard } from './components/BentoCard.tsx';
import { ProfileCard } from './components/ProfileCard.tsx';
import { AIChatBot } from './components/AIChatBot.tsx';
import { SOCIAL_LINKS, PROJECTS } from './constants.tsx';
import { X, ArrowUpRight, Github, Code2, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Tooltip.Provider delayDuration={150}>
      <main className="min-h-screen py-10 px-4 md:py-20 flex flex-col items-center bg-[var(--slate1)]">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          
          <BentoCard colSpan="sm:col-span-2 lg:col-span-2" rowSpan="lg:row-span-2" className="p-8 md:p-10">
            <ProfileCard />
          </BentoCard>

          <BentoCard colSpan="sm:col-span-2 lg:col-span-2" rowSpan="lg:row-span-1" className="p-8">
            <AIChatBot />
          </BentoCard>

          {SOCIAL_LINKS.map((social) => (
            <Tooltip.Root key={social.name}>
              <Tooltip.Trigger asChild>
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-full outline-none focus:ring-2 ring-indigo-500/40 rounded-[2.5rem]"
                >
                  <BentoCard className="flex flex-col items-center justify-center gap-4 group cursor-pointer h-full hover:bg-[var(--slate3)] transition-colors p-6">
                    <div className={`p-4 rounded-[1.5rem] ${social.color} transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                      {social.icon}
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-bold text-[var(--slate12)]">{social.name}</span>
                      <span className="block text-[10px] text-[var(--slate10)] font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </div>
                  </BentoCard>
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={8}>
                  Visit {social.name}
                  <Tooltip.Arrow className="fill-[var(--slate6)]" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}

          {PROJECTS.map((project) => (
            <Dialog.Root key={project.title}>
              <Dialog.Trigger asChild>
                <button className="text-left w-full h-full sm:col-span-2 lg:col-span-2 lg:row-span-2 group outline-none">
                  <BentoCard className="p-0 overflow-hidden h-full relative border-[var(--slate6)] hover:border-[var(--slate8)] transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                      <div className="flex gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest font-black text-white/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-black mb-2 text-white tracking-tighter leading-none">{project.title}</h3>
                      <p className="text-zinc-400 text-xs line-clamp-2 max-w-sm mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/30 group-hover:text-white transition-colors uppercase tracking-[0.2em]">
                        Case Study <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </BentoCard>
                </button>
              </Dialog.Trigger>
              
              <Dialog.Portal>
                <Dialog.Overlay className="Overlay" />
                <Dialog.Content className="DialogContent bg-[var(--slate2)] border border-[var(--slate6)] rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                  <div className="aspect-video w-full overflow-hidden relative border-b border-[var(--slate6)]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <Dialog.Close asChild>
                      <button className="absolute top-6 right-6 p-2.5 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full transition-all text-white border border-white/10">
                        <X size={20} />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="p-10 md:p-12">
                    <Dialog.Title className="text-4xl font-black mb-2 tracking-tighter text-[var(--slate12)]">{project.title}</Dialog.Title>
                    <div className="flex gap-3 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em]">{tag}</span>
                      ))}
                    </div>
                    <Dialog.Description className="text-[var(--slate11)] text-lg leading-relaxed mb-10">
                      {project.description} This exploration focuses on the harmony between visual hierarchy and technical feasibility in modern web interfaces.
                    </Dialog.Description>
                    <a 
                      href={project.link} 
                      className="inline-block w-full text-center py-5 bg-[var(--slate12)] text-[var(--slate1)] font-black rounded-3xl hover:bg-white transition-all active:scale-[0.98]"
                    >
                      Explore Project
                    </a>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}

          <BentoCard className="p-8 flex flex-col justify-center items-center text-center group">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-3xl mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <Code2 size={32} />
            </div>
            <h4 className="font-bold text-[var(--slate12)]">Modern Tech</h4>
            <p className="text-[10px] text-[var(--slate10)] font-bold uppercase tracking-widest mt-1">React / TS / Node</p>
          </BentoCard>

          <BentoCard className="p-8 flex flex-col justify-center items-center text-center group">
            <div className="p-4 bg-orange-500/10 text-orange-400 rounded-3xl mb-4 group-hover:bg-orange-500 group-hover:text-black transition-all">
              <Github size={32} />
            </div>
            <h4 className="font-bold text-[var(--slate12)]">Open Source</h4>
            <p className="text-[10px] text-[var(--slate10)] font-bold uppercase tracking-widest mt-1">Active Builder</p>
          </BentoCard>

          <BentoCard colSpan="sm:col-span-2 lg:col-span-2" className="p-8 bg-indigo-600 hover:bg-indigo-500 text-white border-none cursor-pointer group transition-all duration-300">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 flex items-center justify-center text-white group-hover:rotate-6 transition-all shadow-xl">
                  <Sparkles size={32} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter">Available for work</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Let's build the future together</span>
                </div>
              </div>
              <ArrowUpRight size={24} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </BentoCard>
        </div>

        <footer className="mt-24 flex flex-col items-center gap-10 w-full max-w-2xl text-center pb-20">
          <Separator.Root 
            className="bg-[var(--slate6)] h-[1px] w-full" 
            orientation="horizontal"
          />
          <div className="flex flex-col md:flex-row items-center gap-8 text-[var(--slate10)] font-bold text-[10px] uppercase tracking-[0.4em]">
            <span>&copy; {new Date().getFullYear()} @mexitalian</span>
            <Separator.Root className="hidden md:block bg-[var(--slate6)] w-[1px] h-4" orientation="vertical" />
            <div className="flex gap-10">
              <a href="#" className="hover:text-[var(--slate12)] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[var(--slate12)] transition-colors">Github</a>
              <a href="#" className="hover:text-[var(--slate12)] transition-colors">Resume</a>
            </div>
          </div>
        </footer>
      </main>
    </Tooltip.Provider>
  );
};

export default App;