
import React, { useState } from 'react';
import { experiences, education } from '../data';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].company);

  const allTabs = [...experiences.map(e => e.company), ...education.map(e => e.institution)];
  const activeExperience = experiences.find(e => e.company === activeTab);
  const activeEducation = education.find(e => e.institution === activeTab);
  
  const activeItem: { role: string; period: string; description?: string[]; location: string; } | undefined = activeExperience
    ? { role: activeExperience.role, period: activeExperience.period, description: activeExperience.description, location: activeExperience.location }
    : activeEducation
    ? { role: activeEducation.degree, period: activeEducation.period, location: activeEducation.location }
    : undefined;

  return (
    <section id="experience" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate dark:text-white mb-8">
        <span className="font-mono text-green mr-4 text-xl md:text-2xl">02.</span>
        Where I’ve Been
        <span className="block h-px bg-lightest-navy dark:bg-slate/50 w-full md:w-1/3 ml-4"></span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-light-navy dark:border-lightest-navy">
          {allTabs.map(tabName => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`font-mono text-sm whitespace-nowrap px-4 py-3 text-left transition-colors duration-300
                ${activeTab === tabName 
                  ? 'text-green bg-light-navy dark:bg-lightest-navy border-b-2 md:border-b-0 md:border-l-2 border-green' 
                  : 'text-slate dark:text-light-slate hover:bg-light-navy/50 dark:hover:bg-lightest-navy/50 hover:text-green'
                }`}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="flex-1">
          {activeItem && (
             <div>
                <h3 className="text-xl font-bold text-lightest-slate dark:text-white">
                    {activeItem.role}
                </h3>
                <p className="font-mono text-sm text-slate dark:text-slate mb-4">{activeItem.period} • {activeItem.location}</p>
                {activeItem.description && (
                    <ul className="space-y-2">
                    {activeItem.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                        <span className="text-green mr-4 mt-1">&#9655;</span>
                        <span className="text-slate dark:text-light-slate">{point}</span>
                        </li>
                    ))}
                    </ul>
                )}
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
