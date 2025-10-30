
import React from 'react';
import { skillCategories } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate dark:text-white mb-8">
        <span className="font-mono text-green mr-4 text-xl md:text-2xl">04.</span>
        My Toolbox
        <span className="block h-px bg-lightest-navy dark:bg-slate/50 w-full md:w-1/3 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <div key={category.title} className="bg-light-navy/50 dark:bg-light-navy p-6 rounded-lg">
            <h3 className="text-lg font-bold text-lightest-slate dark:text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map(skill => (
                <li key={skill.name} className="flex items-center text-slate dark:text-light-slate font-mono text-sm">
                  <span className="text-green mr-3">&#9679;</span>
                  {skill.name}
                  {skill.level && <span className="text-xs text-slate ml-auto bg-lightest-navy/50 dark:bg-lightest-navy px-2 py-0.5 rounded-full">{skill.level}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
