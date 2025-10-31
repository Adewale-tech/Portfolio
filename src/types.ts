
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verifyUrl: string;
  description: string[];
}