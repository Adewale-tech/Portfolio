import { Project, SkillCategory, Experience, Education, Certificate } from './types';

export const personalInfo = {
  name: "Waliyullah Osman Adewale",
  tagline: "Software Engineer | Backend Systems & Distributed Architectures",
  email: "waliyullahadewale30@gmail.com",
  linkedin: "https://www.linkedin.com/in/waliyullah-osman-7b84b0311",
  github: "https://github.com/Adewale-tech",
};  

export const aboutMe = {
  p1: "I'm a Software Engineer who architects high-performance backend systems that scale. I transform complex business requirements into elegant, maintainable code — building secure APIs, designing distributed architectures, and optimizing systems that handle real-world production loads. My work spans microservices, message queues, and cloud-native deployments.",
  p2: "I thrive at the intersection of engineering excellence and product impact. Whether it's implementing robust authentication flows, designing fault-tolerant notification systems, or containerizing applications for seamless deployment, I bring a systems-thinking approach to every challenge. Beyond code, I'm passionate about traveling, reading, and photography.",
  p3: "I build with purpose. Every system I design prioritizes reliability, security, and scalability — because great backend engineering is invisible to users but essential to business success. I'm driven to join teams where I can contribute to meaningful products and grow alongside talented engineers."
};

export const projects: Project[] = [
  {
    title: "Distributed Notification System",
    description: "Architected a microservices notification platform handling async email and push delivery via RabbitMQ. Implemented intelligent message routing, retry mechanisms with dead-letter queues, and template rendering across isolated services. Deployed with Docker, automated CI/CD pipelines, and comprehensive health monitoring.",
    tags: [
      "Python",
      "REST APIs",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Microservices",
      "CI/CD"
    ],
    repoUrl: "https://github.com/Adewale-tech/template_service.git"
  },
  {
    title: "Country Currency & Exchange API",
    description: "Engineered a high-performance RESTful API with intelligent caching for country and currency exchange data. Features full CRUD operations, advanced filtering/sorting, dynamic image generation, and graceful degradation for external API failures. Built with data validation and integrity as core principles.",
    tags: ["Python", "Django", "REST API", "MySQL", "Data Caching", "API Integration", "Image Generation", "Error Handling"],
    repoUrl: "https://github.com/Adewale-tech/Stage2_BE.git",
  },
  {
    title: "Smart Finance App",
    description: "Developed secure authentication, expense tracking, and analytics APIs for personal financial management. Implemented automated deployment via GitHub Actions CI/CD and containerized the application with Docker for production-ready scalability.",
    tags: ["Django", "Django REST Framework", "MySQL", "Docker", "GitHub Actions", "Swagger"],
    repoUrl: "https://github.com/Waliyullah-Osman/smart-finance",
  },
  {
    title: "Dynamic Profile Endpoint",
    description: "Built a REST API integrating external JSON data sources with comprehensive validation and testing. Implemented robust error handling and data formatting to ensure reliability across integrations.",
    tags: ["Django", "REST API", "Python", "Render", "Testing"],
    repoUrl: "https://github.com/Adewale-tech/Stage1_BE.git",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: "Full" },
      { name: "Django", level: "Full" },
      { name: "Django REST Framework", level: "Professional" },
      { name: "NestJS", level: "Professional" },
      { name: "Java" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Docker", level: "Professional" },
      { name: "PostgreSQL", level: "Professional" },
      { name: "MySQL", level: "Professional" },
      { name: "Render", level: "Professional" },
      { name: "Git & GitHub" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "System Architecture" },
      { name: "Scalability & Performance" },
      { name: "API Design & Security" },
      { name: "Test-Driven Development (TDD)" },
      { name: "CI/CD & DevOps" },
      { name: "Agile Methodologies" },
      { name: "Technical Communication" },
    ],
  },
];


export const experiences: Experience[] = [
  {
    role: "Backend Software Engineer",
    company: "ALX Software Engineering Program",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: [
      "Engineered modular REST APIs with JWT authentication and ORM integration, improving data security and system modularity.",
      "Led collaborative development through Git workflows and rigorous code reviews, elevating code quality across the team.",
      "Architected secure database schemas and backend services following industry best practices for scalability and maintainability."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Information Technology | Bachelor of Technology",
    institution: "Federal University of Technology, Minna",
    period: "Feb 2023 - Present",
    location: "Minna, Nigeria"
  }
];

export const certifications: Certificate[] = [
  {
    title: "Software Engineering in Back-End Web Development",
    issuer: "ALX Africa",
    date: "September 2025",
    imageUrl: "https://placehold.co/800x500/112240/ccd6f6.png?text=ALX+Software+Engineering%0ACertificate&font=inter",
    verifyUrl: "https://savanna.alxafrica.com/certificates/CNhRS8rcJx",
    description: [
      "Gained expertise in building robust, scalable web applications and RESTful APIs using Python and Django.",
      "Mastered database design and management with SQL (MySQL, PostgreSQL) and Object-Relational Mapping (ORM).",
      "Applied modern DevOps practices, including containerization with Docker and CI/CD pipeline automation with GitHub Actions.",
      "Developed proficiency in Test-Driven Development (TDD) to ensure high-quality, reliable, and maintainable code.",
      "Acquired deep knowledge of system architecture, API security best practices, and data integrity principles."
    ]
  }
];
