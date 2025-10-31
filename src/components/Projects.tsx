import React from 'react';
import { projects } from '../data';
import { GitHubIcon, BookOpenIcon } from './Icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate dark:text-white mb-8">
        <span className="font-mono text-green mr-4 text-xl md:text-2xl">03.</span>
        Things I’ve Built
        <span className="block h-px bg-lightest-navy dark:bg-slate/50 w-full md:w-1/3 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="group bg-light-navy rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
          >
            <div>
              <div className="flex justify-end items-center mb-4">
                <div className="flex space-x-4">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-light-slate hover:text-green transition-colors"><GitHubIcon /></a>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-light-slate hover:text-green transition-colors"><BookOpenIcon /></a>}
                </div>
              </div>
              <h3 className="text-xl font-bold text-lightest-slate dark:text-white mb-3 group-hover:text-green transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-slate dark:text-light-slate mb-6">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-slate dark:text-slate">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
