
import React from 'react';
import { certifications } from '../data';

const Certifications: React.FC = () => {
  const cert = certifications[0]; // Assuming one certificate for now

  return (
    <section id="certifications" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate dark:text-white mb-8">
        <span className="font-mono text-green mr-4 text-xl md:text-2xl">05.</span>
        Certifications & Achievements
        <span className="block h-px bg-lightest-navy dark:bg-slate/50 w-full md:w-1/3 ml-4"></span>
      </h2>
      
      <div className="bg-light-navy/50 dark:bg-light-navy p-6 md:p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-lightest-slate dark:text-white group-hover:text-green transition-colors duration-300">
              {cert.title}
            </h3>
            <p className="font-mono text-sm text-slate dark:text-slate mb-4">{cert.issuer} • Issued {cert.date}</p>
            <p className="text-sm text-slate dark:text-light-slate mb-4">
              This intensive program provided a comprehensive foundation in backend development, focusing on building scalable and secure systems. Key areas of learning included:
            </p>
            <ul className="space-y-2">
              {cert.description.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green mr-4 mt-1">&#9655;</span>
                  <span className="text-slate dark:text-light-slate text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <a 
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-sm rounded-md overflow-hidden aspect-[16/10]"
              aria-label="Verify Certificate"
            >
                <div className="absolute inset-0 bg-green z-0 transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                    src={cert.imageUrl} 
                    alt={`${cert.title} Certificate`}
                    className="relative w-full h-full object-cover z-10 border-2 border-transparent group-hover:border-green transition-all duration-300"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-navy/70 dark:group-hover:bg-navy/80 transition-all duration-300 z-20 flex items-center justify-center">
                    <span className="text-white font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">Verify Certificate</span>
                </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;