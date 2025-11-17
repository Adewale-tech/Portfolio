
import React from 'react';
import { aboutMe } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate dark:text-white mb-8">
        <span className="font-mono text-green mr-4 text-xl md:text-2xl">01.</span>
        About Me
        <span className="block h-px bg-lightest-navy dark:bg-slate/50 w-full md:w-1/3 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-4 text-slate dark:text-light-slate">
          <p>{aboutMe.p1}</p>
          <p>{aboutMe.p2}</p>
          <p className="font-semibold text-light-slate dark:text-lightest-slate">{aboutMe.p3}</p>
        </div>
        <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 group">
                <div className="absolute inset-0 bg-green rounded-md z-0 transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="absolute inset-0 rounded-md overflow-hidden z-10">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQFsOpJeoAWhkg/profile-displayphoto-scale_200_200/B56ZqSrq_lI4Ac-/0/1763397520919?e=1764806400&v=beta&t=UPLigHW-dszaHI7jU8cgtZ2etXyJ3eyRCT6q7efv88E"
                      alt="Waliyullah Osman Adewale"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-navy/50 dark:bg-navy/30 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;