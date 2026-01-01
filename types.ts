
import React from 'react';

// Adding React import to provide the React namespace required for React.ReactNode
export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface SocialItem {
  name: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  label?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}