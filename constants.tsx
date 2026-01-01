import React from "react";
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
  Globe,
} from "lucide-react";
import { SocialItem, ProjectItem } from "./types";

export const SOCIAL_LINKS: SocialItem[] = [
  {
    name: "Twitter",
    icon: <Twitter size={24} />,
    link: "https://twitter.com/mexitalian",
    color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
    label: "@mexitalian",
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
    link: "https://github.com/mexitalian",
    color: "bg-white/10 text-white",
    label: "mexitalian",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    link: "https://linkedin.com/in/mexitalian",
    color: "bg-[#0077B5]/10 text-[#0077B5]",
    label: "Carlo Marasco",
  },
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    link: "https://instagram.com/mexitalianglo",
    color: "bg-[#E1306C]/10 text-[#E1306C]",
    label: "mexitalianglo",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Kinetic State Vision",
    description:
      "Transforming complex data into agentic action. Explore our core philosophy and technological stack.",
    image: "./kinetic-vision.png",
    videoUrl: "https://www.youtube.com/embed/lyNjTEs6-ZM",
    aspectRatio: "1/1",
    link: "https://youtu.be/lyNjTEs6-ZM",
    tags: ["AI", "Agentic Systems"],
  },
  {
    title: "Luma",
    description: "Visualizing data streams in real-time.",
    image: "https://picsum.photos/seed/luma/800/600",
    link: "#",
    tags: ["Frontend", "Analytics"],
  },
];

export const PROFILE_INFO = {
  name: "KineticState",
  handle: "KineticState.Agency",
  location: "Berlin | London | CDMX",
  bio: "We build advanced agentic systems and high-performance digital interfaces that move at the speed of thought.",
  avatar: "https://picsum.photos/seed/kinetic/400/400",
};
