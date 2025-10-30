
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-navy/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <div className="text-2xl font-bold font-mono text-green cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          WO
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <button key={item} onClick={() => scrollToSection(item)} className="font-mono text-slate dark:text-lightest-slate hover:text-green dark:hover:text-green transition-colors">
              <span className="text-green mr-1">0{index + 1}.</span> {item}
            </button>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate dark:text-lightest-slate hover:bg-lightest-navy focus:outline-none">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <div className="md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate dark:text-lightest-slate hover:bg-lightest-navy focus:outline-none">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
