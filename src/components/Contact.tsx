import React from 'react';
import { personalInfo } from '../data';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <h2 className="font-mono text-green text-lg mb-2">06. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate dark:text-white mb-4">Get In Touch</h3>
      <p className="text-slate dark:text-light-slate mb-8">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I’ll get back to you as soon as I can!
      </p>
      <a 
        href={`mailto:${personalInfo.email}`}
        className="inline-block font-mono text-green border border-green rounded px-8 py-4 hover:bg-green/10 transition-colors duration-300"
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-6 mt-12 md:hidden">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors"><GitHubIcon /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors"><LinkedInIcon /></a>
      </div>
    </section>
  );
};

export default Contact;
