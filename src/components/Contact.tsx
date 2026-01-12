import React from 'react';
import { personalInfo } from '../data';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <h2 className="font-mono text-green text-lg mb-2">06. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate dark:text-white mb-4">Let's Build Something Great</h3>
      <p className="text-slate dark:text-light-slate mb-8">
        I'm actively seeking roles where I can drive impact through backend engineering. Whether you're building the next big thing or scaling existing systems, I'd love to hear about it. Let's connect.
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
