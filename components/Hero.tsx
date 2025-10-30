import React from 'react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start py-20">
      <h1 className="font-mono text-green mb-4">Hi, my name is</h1>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate dark:text-white mb-2">
        {personalInfo.name}.
      </h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate dark:text-light-slate mb-8">
        I craft scalable backend solutions.
      </h3>
      <p className="max-w-xl text-slate dark:text-slate mb-12">
        I'm a backend developer specializing in building secure and scalable systems. My focus is on crafting robust APIs and optimizing application performance to deliver reliable and efficient digital experiences.
      </p>
      <div>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block font-mono text-green border border-green rounded px-8 py-4 hover:bg-green/10 transition-colors duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;