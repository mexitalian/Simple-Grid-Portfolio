
import React from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram, 
  Dribbble, 
  Figma, 
  Music, 
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Layout,
  Globe
} from 'lucide-react';
import { SocialItem, ProjectItem } from './types';

export const SOCIAL_LINKS: SocialItem[] = [
  { 
    name: 'Twitter', 
    icon: <Twitter size={24} />, 
    link: 'https://twitter.com', 
    color: 'bg-[#1DA1F2]/10 text-[#1DA1F2]',
    label: '@mexitalian'
  },
  { 
    name: 'GitHub', 
    icon: <Github size={24} />, 
    link: 'https://github.com', 
    color: 'bg-white/10 text-white',
    label: 'mexitalian'
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin size={24} />, 
    link: 'https://linkedin.com', 
    color: 'bg-[#0077B5]/10 text-[#0077B5]',
    label: 'Christian Calvache'
  },
  { 
    name: 'Instagram', 
    icon: <Instagram size={24} />, 
    link: 'https://instagram.com', 
    color: 'bg-[#E1306C]/10 text-[#E1306C]',
    label: 'mexitalian'
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Domo',
    description: 'A smart home controller interface built for simplicity.',
    image: 'https://picsum.photos/seed/domo/800/600',
    link: '#',
    tags: ['Design', 'Mobile']
  },
  {
    title: 'Luma',
    description: 'Visualizing data streams in real-time.',
    image: 'https://picsum.photos/seed/luma/800/600',
    link: '#',
    tags: ['Frontend', 'Analytics']
  }
];

export const PROFILE_INFO = {
  name: "Christian Calvache",
  handle: "@mexitalian",
  location: "Quito, Ecuador 🇪🇨",
  bio: "Product Designer & Frontend Engineer focused on building minimal, functional interfaces.",
  avatar: "https://picsum.photos/seed/me/400/400"
};
