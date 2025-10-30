
import React from 'react';
import { personalInfo } from '../data';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <>
      {/* Social links for desktop */}
      <div className="hidden md:flex fixed bottom-0 left-12 flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate dark:after:bg-light-slate">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors transform hover:-translate-y-1"><GitHubIcon /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors transform hover:-translate-y-1"><LinkedInIcon /></a>
      </div>
      
      {/* Email link for desktop */}
      <div className="hidden md:flex fixed bottom-0 right-12 flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate dark:after:bg-light-slate">
        <a href={`mailto:${personalInfo.email}`} className="font-mono text-sm text-light-slate hover:text-green transition-colors transform hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>
          {personalInfo.email}
        </a>
      </div>
      
      <footer className="text-center py-6">
        <p className="font-mono text-xs text-slate dark:text-slate">
          Designed & Built by Waliyullah Osman
        </p>
      </footer>
    </>
  );
};

export default Footer;
